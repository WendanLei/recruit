'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _info = require('./../../components/common/info.js');

var _info2 = _interopRequireDefault(_info);

var _nav = require('./../../components/common/nav.js');

var _nav2 = _interopRequireDefault(_nav);

var _formid = require('./../../components/CustomerService/CustomerService.js');

var _formid2 = _interopRequireDefault(_formid);

var _onfire = require('./../../npm/onfire.js/dist/onfire.min.js');

var _onfire2 = _interopRequireDefault(_onfire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexIndex = function (_wepy$page) {
    _inherits(IndexIndex, _wepy$page);

    function IndexIndex() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, IndexIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = IndexIndex.__proto__ || Object.getPrototypeOf(IndexIndex)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '首页',
            enablePullDownRefresh: true
        }, _this2.$repeat = { "nav_list": { "com": "nav", "props": "list.sync" }, "work_list": { "com": "info", "props": "list.sync" } }, _this2.$props = { "nav": { "xmlns:v-bind": { "value": "", "for": "nav_list", "item": "item", "index": "index", "key": "index" }, "v-bind:list.sync": { "value": "item", "type": "item", "for": "nav_list", "item": "item", "index": "index", "key": "index" } }, "info": { "v-bind:list.sync": { "value": "item", "type": "item", "for": "work_list", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "work_list", "item": "item", "index": "index", "key": "index" } } }, _this2.$events = { "info": { "v-on:infoTap": "detailTap" } }, _this2.components = {
            info: _info2.default,
            nav: _nav2.default
        }, _this2.data = {
            nav_list: [{
                name: '热门招聘',
                src: 'icon_rmzp',
                url: '/pages/work/index'
            }/*, {
                name: '伯乐排行',
                src: 'icon_blph',
                url: '/pages/index/bole'
            }*/
            , {
                name: '小时工',
                src: 'icon_blph',
                url: '/pages/work/Hourly'
            }, {
                name: '培训/活动',
                src: 'icon_jnpx',
                url: '/pages/skill/index'
            }, {
                name: '圈子',
                src: 'icon_qz',
                url: '/pages/index/circle'
            }],
            work_list: [],
            page_info: { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 },
            select_city: {
                "area_name": "杭州市",
                "areano": 330100
            },
          formId:[],
        }, _this2.methods = {
            detailTap: function detailTap(v) {
              let _this=this;
                wx.getStorage({
                    key: 'sess_key',
                    success: function success(res) {
                        _this.getUserFormId(res.data, _this.formId.toString());
                        wx.navigateTo({
                            url: '/pages/work/workDetails?sess_key=' + res.data + '&id=' + v.id
                        });
                    
                        _this.getUserFormId(res.data, _this.formId)
                        
                    }
                });
            },
          
            inputTap: function inputTap() {
                wx.navigateTo({
                    url: '/pages/index/search'
                });
            },
            locationTap: function locationTap() {
                wx.navigateTo({
                    url: '/pages/index/location'
                });
            },
          formSubmit :function (e){
              console.log(e)
              let _this=this;
              _this.formId=_this.formId.concat(e.detail.formId);
             

              _this.$apply();
          },
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(IndexIndex, [{
        key: 'getWorkList',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key, areano) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context.next = 4;
                                return _api2.default.recWorkList({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        is_rec: 1,
                                        //areano: areano || "",
                                        prov_code: areano?areano.split('-')[0]:'',
                                        city_code:areano?areano.split('-')[1]:'',
                                        district_code:areano?areano.split('-')[2]:'',
                                        page: Number(that.page_info.cur_page) + 1 || 1,
                                        page_size: that.page_info.page_size
                                    } });

                            case 4:
                                res = _context.sent;

                                if (res.data.error_code == 0) {
                                    if (res.data.bizobj.data == null) {
                                        that.work_list = [];
                                        that.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 };
                                    } else {
                                        if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                                            that.work_list = that.work_list.concat(res.data.bizobj.data);
                                        } else {
                                            that.work_list = res.data.bizobj.data;
                                        }
                                        that.page_info = res.data.bizobj.page_info;
                                    }
                                    that.$apply();
                                    _tip2.default.loaded();
                                } else if (res.data.error_code == 4) {
                                    wx.showToast({ //如果全部加载完成了也弹一个框
                                        title: '登录已失效，请重新登录',
                                        icon: 'none',
                                        duration: 1000
                                    });
                                    wx.navigateTo({
                                        url: '/pages/personal/login?page=index'
                                    });
                                } else {
                                    _tip2.default.error(res.data.error_msg);
                                }

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getWorkList(_x, _x2) {
                return _ref2.apply(this, arguments);
            }

            return getWorkList;
        }()
    }, {
        key: 'getUserFormId',
        value: function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key, forum) {
            var that, res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {

                switch (_context.prev = _context.next) {
                  case 0:
                    that = this;

                    _tip2.default.loading();
                    _context.next = 4;
                    return _api2.default.recWorkList({
                      method: 'POST', query: {
                        sess_key: sess_key,
                        forum: forum,
                        
                      }
                    });

                  case 4:
                    res = _context.sent;

                    if (res.data.error_code == 0) {
                      
                      that.$apply();
                   
                    } else {
                      _tip2.default.error(res.data.error_msg);
                    }

                  case 6:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function getUserFormId(_x, _x2) {
            return _ref2.apply(this, arguments);
          }

          return getUserFormId;
        }()
      },
     {
        key: 'getLocation',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sess_key, latitude, longitude) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context2.next = 4;
                                return _api2.default.defaultDistrict({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        latitude: latitude,
                                        longitude: longitude
                                    } });

                            case 4:
                                res = _context2.sent;

                                if (res.data.error_code == 0) {
                                    let prov_code=res.data.bizobj.data.position.prov.code,prov_name=res.data.bizobj.data.position.prov.name,city_code=res.data.bizobj.data.position.city.code,city_name=res.data.bizobj.data.position.city.name,district_name=res.data.bizobj.data.position.district.name,district_code=res.data.bizobj.data.position.district.code;
                                    that.select_city = {"area_name":district_name,"areano":prov_code+'-'+city_code+'-'+district_code};
                                    that.getWorkList(sess_key, that.select_city.areano);

                                    that.$apply();
                                    _tip2.default.loaded();
                                } else if (res.data.error_code == 4) {
                                    wx.showToast({ //如果全部加载完成了也弹一个框
                                        title: '登录已失效，请重新登录',
                                        icon: 'none',
                                        duration: 1000
                                    });
                                    wx.navigateTo({
                                        url: '/pages/personal/login?page=index'
                                    });
                                } else {
                                    _tip2.default.error(res.data.error_msg);
                                }

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getLocation(_x3, _x4, _x5) {
                return _ref3.apply(this, arguments);
            }

            return getLocation;
        }()
    }, {
        key: 'geter',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(sess_key, latitude, longitude) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context3.next = 4;
                                return _api2.default.disttrictList({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        latitude: latitude,
                                        longitude: longitude
                                    } });

                            case 4:
                                res = _context3.sent;

                                if (res.data.error_code == 0) {
                                    that.select_city = res.data.bizobj.data.location_city;
                                    that.getWorkList(sess_key, that.select_city.areano);
                                    that.$apply();
                                    _tip2.default.loaded();
                                } else if (res.data.error_code == 4) {
                                    _tip2.default.alert('登录已失效，请重新登录');
                                    wx.navigateTo({
                                        url: '/pages/personal/login?page=index'
                                    });
                                } else {
                                    _tip2.default.error(res.data.error_msg);
                                }

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function geter(_x6, _x7, _x8) {
                return _ref4.apply(this, arguments);
            }

            return geter;
        }()
      }, {
        key: 'getUserFormId',
        value: function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key, forum) {
            var that, res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    that = this;
                    _tip2.default.loading();
                    _context.next = 4;
                    return _api2.default.getUserFormId({
                      method: 'POST', query: {
                        sess_key: sess_key,
                        forum: forum
                      }
                    });
                  case 4:
                    res = _context.sent;
                    if (res.data.error_code == 0) {
                    }
                  case 6:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
          function getUserFormId(_x, _x2) {
            return _ref2.apply(this, arguments);
          }
          return getUserFormId;
        }()
      },{
        key: 'onLoad',
        value: function onLoad(options) {
            var _this = this;
            if (options && options.scene) {
                var scene = decodeURIComponent(options.scene);
                wx.setStorage({
                    key: 'scene',
                    data: scene
                });
            }
            _onfire2.default.on('search', function (args) {
                _this.select_city = args.inputVal.area_name?args.inputVal:_this.select_city;
                wx.getStorage({
                    key: 'sess_key',
                    success: function success(res) {
                      
                        _this.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 };
                        _this.getWorkList(res.data, _this.select_city.areano, _this.page_info.cur_page);
                    }
                });
            });
            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                    wx.getLocation({
                        type: 'wgs84',
                        success: function success(data) {
                            _this.getLocation(res.data, data.latitude, data.longitude);
                        }
                    });
                }, fail: function fail() {
                    wx.showToast({ //如果全部加载完成了也弹一个框
                        title: '请先登录',
                        icon: 'none',
                        duration: 1000
                    });
                    wx.navigateTo({
                        url: '/pages/personal/login?page=index'
                    });
                }
            });
        }
    }, {
        key: 'onPullDownRefresh',
        value: function onPullDownRefresh() {
            wx.stopPullDownRefresh();
        }
    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            var _this = this;
            if (_this.page_info.cur_page == _this.page_info.total_pages) {
                wx.showToast({ //如果全部加载完成了也弹一个框
                    title: '我也是有底线的',
                    icon: 'success',
                    duration: 2000
                });
            } else {
                wx.getStorage({
                    key: 'sess_key',
                    success: function success(res) {
                        _this.getWorkList(res.data, _this.select_city.areano);
                    }
                });
            }
        }
    }]);

    return IndexIndex;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(IndexIndex , 'pages/index/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4SW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiaW5mbyIsIm5hdiIsImRhdGEiLCJuYXZfbGlzdCIsIm5hbWUiLCJzcmMiLCJ1cmwiLCJ3b3JrX2xpc3QiLCJwYWdlX2luZm8iLCJjdXJfcGFnZSIsInBhZ2Vfc2l6ZSIsInRvdGFsX2l0ZW1zIiwidG90YWxfcGFnZXMiLCJzZWxlY3RfY2l0eSIsIm1ldGhvZHMiLCJkZXRhaWxUYXAiLCJ2Iiwid3giLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsInJlcyIsIm5hdmlnYXRlVG8iLCJpZCIsImlucHV0VGFwIiwibG9jYXRpb25UYXAiLCJzZXNzX2tleSIsImFyZWFubyIsInRoYXQiLCJ0aXAiLCJsb2FkaW5nIiwiYXBpIiwicmVjV29ya0xpc3QiLCJtZXRob2QiLCJxdWVyeSIsImlzX3JlYyIsInBhZ2UiLCJOdW1iZXIiLCJlcnJvcl9jb2RlIiwiYml6b2JqIiwiY29uY2F0IiwiJGFwcGx5IiwibG9hZGVkIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJlcnJvciIsImVycm9yX21zZyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZGlzdHRyaWN0TGlzdCIsImxvY2F0aW9uX2NpdHkiLCJnZXRXb3JrTGlzdCIsImFsZXJ0Iiwib3B0aW9ucyIsIl90aGlzIiwic2NlbmUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzZXRTdG9yYWdlIiwib25maXJlIiwib24iLCJhcmdzIiwiaW5wdXRWYWwiLCJnZXRMb2NhdGlvbiIsInR5cGUiLCJmYWlsIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIndlcHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FB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SDtBQWxCUyxhQUFkO0FBcUJIOzs7NENBQ29CO0FBQ2ZXLGVBQUdrRCxtQkFBSDtBQUNIOzs7d0NBQ2M7QUFDWCxnQkFBSVgsUUFBUSxJQUFaO0FBQ0EsZ0JBQUdBLE1BQU1oRCxTQUFOLENBQWdCQyxRQUFoQixJQUE0QitDLE1BQU1oRCxTQUFOLENBQWdCSSxXQUEvQyxFQUEyRDtBQUN2REssbUJBQUcwQixTQUFILENBQWEsRUFBRTtBQUNYQywyQkFBTyxTQURFO0FBRVRDLDBCQUFNLFNBRkc7QUFHVEMsOEJBQVU7QUFIRCxpQkFBYjtBQUtILGFBTkQsTUFNSztBQUNEN0IsbUJBQUdDLFVBQUgsQ0FBYztBQUNWQyx5QkFBSyxVQURLO0FBRVZDLDZCQUFTLGlCQUFTQyxHQUFULEVBQWE7QUFDbEJtQyw4QkFBTUgsV0FBTixDQUFrQmhDLElBQUluQixJQUF0QixFQUEyQnNELE1BQU0zQyxXQUFOLENBQWtCYyxNQUE3QztBQUNIO0FBSlMsaUJBQWQ7QUFNSDtBQUNKOzs7O0VBNUxtQ3lDLGVBQUtoQyxJOztrQkFBeEI1QyxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9hcGkvYXBpJztcclxuICBpbXBvcnQgdGlwIGZyb20gJy4uLy4uL3V0aWxzL3RpcCc7XHJcbiAgaW1wb3J0IGluZm8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vaW5mbyc7XHJcbiAgaW1wb3J0IG5hdiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9uYXYnO1xyXG4gIGltcG9ydCBvbmZpcmUgZnJvbSAnb25maXJlLmpzJztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpppbpobUnLFxyXG4gICAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDp0cnVlXHJcbiAgICB9XHJcbiAgICRyZXBlYXQgPSB7XCJuYXZfbGlzdFwiOntcImNvbVwiOlwibmF2XCIsXCJwcm9wc1wiOlwibGlzdC5zeW5jXCJ9LFwid29ya19saXN0XCI6e1wiY29tXCI6XCJpbmZvXCIsXCJwcm9wc1wiOlwibGlzdC5zeW5jXCJ9fTtcclxuJHByb3BzID0ge1wibmF2XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJuYXZfbGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmxpc3Quc3luY1wiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcIm5hdl9saXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19LFwiaW5mb1wiOntcInYtYmluZDpsaXN0LnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJ3b3JrX2xpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInhtbG5zOnYtb25cIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcIndvcmtfbGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7XCJpbmZvXCI6e1widi1vbjppbmZvVGFwXCI6XCJkZXRhaWxUYXBcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgaW5mbzogaW5mbyxcclxuICAgICAgbmF2OiBuYXZcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIG5hdl9saXN0OltcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOifng63pl6jmi5vogZgnLFxyXG4gICAgICAgICAgc3JjOidpY29uX3JtenAnLFxyXG4gICAgICAgICAgdXJsOicvcGFnZXMvd29yay9pbmRleCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6J+S8r+S5kOaOkuihjCcsXHJcbiAgICAgICAgICBzcmM6J2ljb25fYmxwaCcsXHJcbiAgICAgICAgICB1cmw6Jy9wYWdlcy9pbmRleC9ib2xlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTon5oqA6IO95Z+56K6tJyxcclxuICAgICAgICAgIHNyYzonaWNvbl9qbnB4JyxcclxuICAgICAgICAgIHVybDonL3BhZ2VzL3NraWxsL2luZGV4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTon5ZyI5a2QJyxcclxuICAgICAgICAgIHNyYzonaWNvbl9xeicsXHJcbiAgICAgICAgICB1cmw6Jy9wYWdlcy9pbmRleC9jaXJjbGUnXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICB3b3JrX2xpc3Q6W10sXHJcbiAgICAgICAgcGFnZV9pbmZvOntjdXJfcGFnZTowLCBwYWdlX3NpemU6IDgsIHRvdGFsX2l0ZW1zOiAyLCB0b3RhbF9wYWdlczogMX0sXHJcbiAgICAgICAgc2VsZWN0X2NpdHk6IHtcclxuICAgICAgICAgICAgXCJhcmVhX25hbWVcIjogXCLmna3lt57luIJcIixcclxuICAgICAgICAgICAgXCJhcmVhbm9cIjogMzMwMTAwXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuICAgIGFzeW5jIGdldFdvcmtMaXN0KHNlc3Nfa2V5LGFyZWFubykge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgIHRpcC5sb2FkaW5nKCk7XHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5yZWNXb3JrTGlzdCh7bWV0aG9kOidQT1NUJyxxdWVyeTp7XHJcbiAgICAgICAgICAgICAgICBzZXNzX2tleTogc2Vzc19rZXksXHJcbiAgICAgICAgICAgICAgICBpc19yZWM6MSxcclxuICAgICAgICAgICAgICAgIGFyZWFubzphcmVhbm8gfHwgXCJcIixcclxuICAgICAgICAgICAgICAgIHBhZ2U6TnVtYmVyKHRoYXQucGFnZV9pbmZvLmN1cl9wYWdlKSArMSB8fCAxLFxyXG4gICAgICAgICAgICAgICAgcGFnZV9zaXplOnRoYXQucGFnZV9pbmZvLnBhZ2Vfc2l6ZVxyXG4gICAgICAgICAgICB9fSk7XHJcbiAgICAgICAgaWYocmVzLmRhdGEuZXJyb3JfY29kZSA9PSAwICl7XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLmJpem9iai5kYXRhID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgdGhhdC53b3JrX2xpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoYXQucGFnZV9pbmZvID0ge2N1cl9wYWdlOjAsIHBhZ2Vfc2l6ZTogOCwgdG90YWxfaXRlbXM6IDIsIHRvdGFsX3BhZ2VzOiAxfTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvLmN1cl9wYWdlICE9IDEgJiYgcmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mby5jdXJfcGFnZSA8PSByZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvLnRvdGFsX3BhZ2VzICl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC53b3JrX2xpc3QgPXRoYXQud29ya19saXN0LmNvbmNhdChyZXMuZGF0YS5iaXpvYmouZGF0YSkgO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC53b3JrX2xpc3QgPSByZXMuZGF0YS5iaXpvYmouZGF0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoYXQucGFnZV9pbmZvID0gcmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICB0aXAubG9hZGVkKCk7XHJcbiAgICAgICAgfWVsc2UgaWYocmVzLmRhdGEuZXJyb3JfY29kZSA9PSA0KXtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHsgLy/lpoLmnpzlhajpg6jliqDovb3lrozmiJDkuobkuZ/lvLnkuIDkuKrmoYZcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn55m75b2V5bey5aSx5pWI77yM6K+36YeN5paw55m75b2VJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDonL3BhZ2VzL3BlcnNvbmFsL2xvZ2luP3BhZ2U9aW5kZXgnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5lcnJvcl9tc2cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIGdldExvY2F0aW9uKHNlc3Nfa2V5LGxhdGl0dWRlLGxvbmdpdHVkZSkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aXAubG9hZGluZygpO1xyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZGlzdHRyaWN0TGlzdCh7bWV0aG9kOidQT1NUJyxxdWVyeTp7XHJcbiAgICAgICAgICAgICAgICBzZXNzX2tleTogc2Vzc19rZXksXHJcbiAgICAgICAgICAgICAgICBsYXRpdHVkZTpsYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgIGxvbmdpdHVkZTpsb25naXR1ZGVcclxuICAgICAgICAgICAgfX0pO1xyXG4gICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoYXQuc2VsZWN0X2NpdHkgPSByZXMuZGF0YS5iaXpvYmouZGF0YS5sb2NhdGlvbl9jaXR5O1xyXG4gICAgICAgICAgICB0aGF0LmdldFdvcmtMaXN0KHNlc3Nfa2V5LHRoYXQuc2VsZWN0X2NpdHkuYXJlYW5vKTtcclxuICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgdGlwLmxvYWRlZCgpO1xyXG4gICAgICAgIH1lbHNlIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gNCl7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7IC8v5aaC5p6c5YWo6YOo5Yqg6L295a6M5oiQ5LqG5Lmf5by55LiA5Liq5qGGXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+eZu+W9leW3suWkseaViO+8jOivt+mHjeaWsOeZu+W9lScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6Jy9wYWdlcy9wZXJzb25hbC9sb2dpbj9wYWdlPWluZGV4J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aXAuZXJyb3IocmVzLmRhdGEuZXJyb3JfbXNnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgIGFzeW5jIGdldGVyKHNlc3Nfa2V5LGxhdGl0dWRlLGxvbmdpdHVkZSkge1xyXG4gICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgdGlwLmxvYWRpbmcoKTtcclxuICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZGlzdHRyaWN0TGlzdCh7bWV0aG9kOidQT1NUJyxxdWVyeTp7XHJcbiAgICAgICAgICAgICAgICAgIHNlc3Nfa2V5OnNlc3Nfa2V5LFxyXG4gICAgICAgICAgICAgICAgICBsYXRpdHVkZTpsYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgIH19KTtcclxuICAgICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gMCl7XHJcbiAgICAgICAgICAgICAgdGhhdC5zZWxlY3RfY2l0eSA9IHJlcy5kYXRhLmJpem9iai5kYXRhLmxvY2F0aW9uX2NpdHk7XHJcbiAgICAgICAgICAgICAgdGhhdC5nZXRXb3JrTGlzdChzZXNzX2tleSx0aGF0LnNlbGVjdF9jaXR5LmFyZWFubyk7XHJcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICB0aXAubG9hZGVkKCk7XHJcbiAgICAgICAgICB9ZWxzZSBpZihyZXMuZGF0YS5lcnJvcl9jb2RlID09IDQpe1xyXG4gICAgICAgICAgICAgIHRpcC5hbGVydCgn55m75b2V5bey5aSx5pWI77yM6K+36YeN5paw55m75b2VJyk7XHJcbiAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgIHVybDonL3BhZ2VzL3BlcnNvbmFsL2xvZ2luP3BhZ2U9aW5kZXgnXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5lcnJvcl9tc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBvbkxvYWQob3B0aW9ucyl7XHJcblxyXG4gICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgIGlmKG9wdGlvbnMgJiYgb3B0aW9ucy5zY2VuZSl7XHJcbiAgICAgICAgICAgdmFyIHNjZW5lID0gZGVjb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuc2NlbmUpO1xyXG4gICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICBrZXk6J3NjZW5lJyxcclxuICAgICAgICAgICAgICAgZGF0YTpzY2VuZVxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICB9XHJcbiAgICAgICAgb25maXJlLm9uKCdzZWFyY2gnLCBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgICAgICBfdGhpcy5zZWxlY3RfY2l0eSA9ICBhcmdzLmlucHV0VmFsIDtcclxuICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdzZXNzX2tleScsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBhZ2VfaW5mbyA9IHtjdXJfcGFnZTowLCBwYWdlX3NpemU6IDgsIHRvdGFsX2l0ZW1zOiAyLCB0b3RhbF9wYWdlczogMX07XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0V29ya0xpc3QocmVzLmRhdGEsX3RoaXMuc2VsZWN0X2NpdHkuYXJlYW5vLF90aGlzLnBhZ2VfaW5mby5jdXJfcGFnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6ICdzZXNzX2tleScsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICB3eC5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdldExvY2F0aW9uKHJlcy5kYXRhLGRhdGEubGF0aXR1ZGUsZGF0YS5sb25naXR1ZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sZmFpbDpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3QoeyAvL+WmguaenOWFqOmDqOWKoOi9veWujOaIkOS6huS5n+W8ueS4gOS4quahhlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35YWI55m75b2VJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOicvcGFnZXMvcGVyc29uYWwvbG9naW4/cGFnZT1pbmRleCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICAgIG9uUHVsbERvd25SZWZyZXNoKCl7XHJcbiAgICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IFxyXG4gICAgICB9XHJcbiAgICAgIG9uUmVhY2hCb3R0b20oKXtcclxuICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICBpZihfdGhpcy5wYWdlX2luZm8uY3VyX3BhZ2UgPT0gX3RoaXMucGFnZV9pbmZvLnRvdGFsX3BhZ2VzKXtcclxuICAgICAgICAgICAgICB3eC5zaG93VG9hc3QoeyAvL+WmguaenOWFqOmDqOWKoOi9veWujOaIkOS6huS5n+W8ueS4gOS4quahhlxyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkeS5n+aYr+acieW6lee6v+eahCcsXHJcbiAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgIGtleTogJ3Nlc3Nfa2V5JyxcclxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdldFdvcmtMaXN0KHJlcy5kYXRhLF90aGlzLnNlbGVjdF9jaXR5LmFyZWFubyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgZGV0YWlsVGFwKHYpe1xyXG4gICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAga2V5OiAnc2Vzc19rZXknLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3dvcmsvd29ya0RldGFpbHM/c2Vzc19rZXk9JyArIHJlcy5kYXRhICsgJyZpZD0nICsgdi5pZFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgaW5wdXRUYXAoKXtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy9wYWdlcy9pbmRleC9zZWFyY2gnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGxvY2F0aW9uVGFwKCl7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvbG9jYXRpb24nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==