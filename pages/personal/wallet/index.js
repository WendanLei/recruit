'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./../../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _api = require('./../../../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _cashRecord = require('./../../../components/wallet/cashRecord.js');

var _cashRecord2 = _interopRequireDefault(_cashRecord);

var _noData = require('./../../../components/common/noData.js');

var _noData2 = _interopRequireDefault(_noData);

var _onfire = require('./../../../npm/onfire.js/dist/onfire.min.js');

var _onfire2 = _interopRequireDefault(_onfire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wallet = function (_wepy$page) {
    _inherits(wallet, _wepy$page);

    function wallet() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, wallet);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = wallet.__proto__ || Object.getPrototypeOf(wallet)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '我的钱包'
        }, _this2.data = {
            userData: {},
            sess_key: '',
            // list: [],
          //tab切换
          tabList: ["全部", "新进款项", "代金款项"],
          navListTitle: ['ALL', 'new', 'wait'],
          currentTab: 0, //预设当前项的值
          winHeight: "",//窗口高度
          myList: [],
          navList: ["用户", "项目", "金额", "进度"],
          index: 0,
          sess_key: '',

          purseInfo:null,
          page_info: { cur_page: 0, page_size: 15, total_items: 2, total_pages:0 }
        }, _this2.$repeat = { "list": { "com": "CashRecord", "props": "item" } }, _this2.$props = { "CashRecord": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "index" } }, "NoData": {} }, _this2.$events = {}, _this2.components = {
            CashRecord: _cashRecord2.default,
            NoData: _noData2.default
            // 获取资金明细
        }, _this2.methods = {
            goUrl: function goUrl(url) {
                if (url == 'cash') {
                  if (parseFloat(this.purseInfo.available_balance) < 10) {
                        _tip2.default.error('可提现金额少于10元，不能提现');
                        return;
                    }
                    if (this.userData.resume_fill) {
                        wx.navigateTo({
                            url: '/pages/personal/wallet/' + url + '?amount=' + this.userData.amount
                        });
                        return;
                    } else {
                        wx.navigateTo({
                            url: '/pages/personal/profile/certification?road=cash'
                        });
                        return;
                    }
                } else {
                    wx.navigateTo({
                        url: '/pages/personal/wallet/' + url
                    });
                }
            },

          scroll: function (event) {
            let _this = this;
            
            _this.scrollTop = event.detail.scrollTop;
            _this.$apply();
          },
          // 滚动切换标签样式
          switchTab: function (e) {
            var _this = this;
            var i = e.detail.current;
            _this.currentTab = i;
            
            if (i == 0) {
              this.myList = [];
              this.page_info = { cur_page: 0, page_size: 15, total_items: 2, total_pages: 0 };
              this.getCashdetail(this.sess_key);
            } else if (i == 1) {
              this.myList = [];
              this.page_info = { cur_page: 0, page_size: 15, total_items: 2, total_pages: 0};
              this.getCashnewIn(this.sess_key);
            } else if (i == 2) {
              this.myList = [];
              this.page_info = { cur_page: 0, page_size: 15, total_items: 2, total_pages: 0 };
              this.getCashWillIn(this.sess_key);
            }
            
            
            _this.$apply();
          },
          // 点击标题切换当前页时改变样式
          swichNav: function (e) {
            var _this = this;
            var _status = e.currentTarget.dataset.title;
            var cur = e.target.dataset.current;
            if (_this.currentTaB == cur) { return false; }
            else {
              _this.currentTab = cur;
              _this.$apply();

            }
          },
          bindDownLoad: function (){
            console.log(",,,,,")
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
                  if (_this.currentTab == 0) {
                    _this.myList = [];
                    _this.getCashdetail(_this.sess_key);
                  } else if (_this.currentTab == 1) {
                    _this.myList = [];
                    _this.getCashnewIn(_this.sess_key);
                  } else if (_this.currentTab == 2) {
                    _this.myList = [];
                    _this.getCashWillIn(_this.sess_key);
                  }
                  _this.$apply();
                }
              });
            }

          },
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(wallet, [{
        key: 'getuserInfo',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sess_key) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                that = this;

                                 //_tip2.default.loading();
                                _context2.next = 4;
                                return _api2.default.userInfo({ method: 'POST', query: {
                                        sess_key: sess_key
                                    } });

                            case 4:
                                res = _context2.sent;

                                if (res.data.error_code == '0') {
                                    that.userData = res.data.bizobj.data;
                                    that.$apply();
                                    _tip2.default.loaded();
                                } else {
                                    _tip2.default.error(res.data.msg);
                                }

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getuserInfo(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getuserInfo;
        }()
      }, {
        key: 'getCashdetail',
        value: function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key) {
            var that, res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    that = this;

                     //_tip2.default.loading();
                    _context.next = 4;
                    return _api2.default.Cashdetail({
                      method: 'POST', query: {
                        sess_key: sess_key,
                        page: Number(that.page_info.cur_page) + 1 || 1,
                        page_size: that.page_info.page_size
                      }
                    });

                  case 4:
                    res = _context.sent;

                    if (res.data.error_code == '0') {
                      if (res.data.bizobj.data == null) {
                        that.myList = [];
                        that.page_info = { cur_page: 0, page_size: 15, total_items: 2, total_pages: 0 };
                      } else {
                        
                        if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                          that.myList = that.myList.concat(res.data.bizobj.data);
                        } else {
                          that.myList = res.data.bizobj.data;
                        }
                        that.page_info = res.data.bizobj.page_info;
                      }
                      that.$apply();
                      _tip2.default.loaded();
                    } else {
                      _tip2.default.error(res.data.msg);
                    }

                  case 6:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function getCashdetail(_x) {
            return _ref2.apply(this, arguments);
          }

          return getCashdetail;
        }()
        // 获取新进款项

      }, {
        key: 'getCashnewIn',
        value: function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sess_key) {
            var that, res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    that = this;

                     //_tip2.default.loading();
                    _context2.next = 4;
                    return _api2.default.CashnewIn({
                      method: 'POST', query: {
                        sess_key: sess_key,
                        page: Number(that.page_info.cur_page) + 1 || 1,
                        page_size: that.page_info.page_size
                      }
                    });

                  case 4:
                    res = _context2.sent;

                    if (res.data.error_code == '0') {
                      if (res.data.bizobj.data == null) {
                        that.myList = [];
                        that.page_info = { cur_page: 0, page_size: 15, total_items: 2, total_pages: 0 };
                      } else {
                        if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                          that.myList = that.myList.concat(res.data.bizobj.data);
                        } else { }
                        that.myList = res.data.bizobj.data;
                      }
                      that.page_info = res.data.bizobj.page_info;
                      that.$apply();
                      _tip2.default.loaded();
                    } else {
                      _tip2.default.error(res.data.msg);
                    }

                  case 6:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function getCashnewIn(_x2) {
            return _ref3.apply(this, arguments);
          }

          return getCashnewIn;
        }()
        // 获取待入款项

      }, {
        key: 'getCashWillIn',
        value: function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(sess_key) {
            var that, res;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    that = this;

                     //_tip2.default.loading();
                    _context3.next = 4;
                    return _api2.default.CashWillIn({
                      method: 'POST', query: {
                        sess_key: sess_key,
                        page: Number(that.page_info.cur_page) + 1 || 1,
                        page_size: that.page_info.page_size
                      }
                    });

                  case 4:
                    res = _context3.sent;

                    if (res.data.error_code == '0') {
                      if (res.data.bizobj.data == null) {
                        that.myList = [];
                        that.page_info = { cur_page: 0, page_size: 15, total_items: 2, total_pages: 0 };
                      } else {
                        if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                          that.myList = that.myList.concat(res.data.bizobj.data);
                        } else {
                          that.myList = res.data.bizobj.data;
                        }
                        that.page_info = res.data.bizobj.page_info;
                      }
                      that.$apply();
                      _tip2.default.loaded();
                    } else {
                      _tip2.default.error(res.data.msg);
                    }

                  case 6:
                  case 'end':
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function getCashWillIn(_x3) {
            return _ref4.apply(this, arguments);
          }

          return getCashWillIn;
        }()
      }, {
        key: 'getpurseInfo',
        value: function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(sess_key) {
            var that, res;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    that = this;

                     //_tip2.default.loading();
                    _context3.next = 4;
                    return _api2.default.purseInfo({
                      method: 'POST', query: {
                        sess_key: sess_key,
                        
                      }
                    });

                  case 4:
                    res = _context3.sent;

                    if (res.data.error_code == '0') {
                    
                      that.purseInfo=res.data.bizobj.data;
                      that.$apply();
                      _tip2.default.loaded();
                    } else {
                      _tip2.default.error(res.data.msg);
                    }

                  case 6:
                  case 'end':
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function getpurseInfo(_x3) {
            return _ref4.apply(this, arguments);
          }

          return getpurseInfo;
        }()
      }, {
        key: 'onLoad',
        value: function onLoad() {
            var _this = this;
            _onfire2.default.on('loadUserInfo', function () {
                wx.getStorage({
                    key: 'sess_key',
                    success: function success(res) {
                        _this.getuserInfo(res.data);
                       
                      
                    }
                });
            });
            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                    _this.getuserInfo(res.data);
                    _this.getCashdetail(res.data);
                    _this.getpurseInfo(res.data);
                    _this.sess_key = res.data;
                }
            });
          //  高度自适应
          wx.getSystemInfo({
            success: function (res) {
              var clientHeight = res.windowHeight;
              var calc = clientHeight-277;
              _this.winHeight = calc;
              _this.$apply();
            }
          });
        },
        
      },
      
      ]);

    return wallet;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(wallet , 'pages/personal/wallet/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIndhbGxldCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXNlckRhdGEiLCJzZXNzX2tleSIsImxpc3QiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJDYXNoUmVjb3JkIiwiTm9EYXRhIiwibWV0aG9kcyIsImdvVXJsIiwidXJsIiwicGFyc2VGbG9hdCIsImFtb3VudCIsInRpcCIsImVycm9yIiwicmVzdW1lX2ZpbGwiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ0aGF0IiwibG9hZGluZyIsImFwaSIsIkNhc2hkZXRhaWwiLCJtZXRob2QiLCJxdWVyeSIsInBhZ2UiLCJwYWdlX3NpemUiLCJyZXMiLCJlcnJvcl9jb2RlIiwiYml6b2JqIiwiJGFwcGx5IiwibG9hZGVkIiwibXNnIiwidXNlckluZm8iLCJfdGhpcyIsIm9uZmlyZSIsIm9uIiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJnZXR1c2VySW5mbyIsImdldENhc2hkZXRhaWwiLCJ3ZXB5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7Ozs2TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxTQUdUQyxJLEdBQU87QUFDSEMsc0JBQVUsRUFEUDtBQUVIQyxzQkFBUyxFQUZOO0FBR0hDLGtCQUFNO0FBSEgsUyxTQUtSQyxPLEdBQVUsRUFBQyxRQUFPLEVBQUMsT0FBTSxZQUFQLEVBQW9CLFNBQVEsTUFBNUIsRUFBUixFLFNBQ2pCQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLE1BQWxCLEVBQXlCLFFBQU8sTUFBaEMsRUFBdUMsU0FBUSxPQUEvQyxFQUF1RCxPQUFNLE9BQTdELEVBQWhCLEVBQXNGLG9C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QWtCLGVBQUdvQixVQUFILENBQWM7QUFDVkMscUJBQUssVUFESztBQUVWQyx5QkFBUyxpQkFBU1osR0FBVCxFQUFhO0FBQ2xCTywwQkFBTU0sV0FBTixDQUFrQmIsSUFBSTVCLElBQXRCO0FBQ0FtQywwQkFBTU8sYUFBTixDQUFvQmQsSUFBSTVCLElBQXhCO0FBQ0FtQywwQkFBTWpDLFFBQU4sR0FBaUIwQixJQUFJNUIsSUFBckI7QUFDSDtBQU5TLGFBQWQ7QUFRSDs7OztFQXBFK0IyQyxlQUFLakIsSTs7a0JBQXBCN0IsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQgdGlwIGZyb20gJy4uLy4uLy4uL3V0aWxzL3RpcCc7XHJcbiAgICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xyXG4gICAgaW1wb3J0IENhc2hSZWNvcmQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy93YWxsZXQvY2FzaFJlY29yZCdcclxuICAgIGltcG9ydCBOb0RhdGEgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vbm9EYXRhJ1xyXG4gICAgaW1wb3J0IG9uZmlyZSBmcm9tICdvbmZpcmUuanMnO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgd2FsbGV0IGV4dGVuZHMgd2VweS5wYWdle1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOmSseWMhSdcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlckRhdGE6IHt9LFxyXG4gICAgICAgICAgICBzZXNzX2tleTonJyxcclxuICAgICAgICAgICAgbGlzdDogW11cclxuICAgICAgICB9XHJcbiAgICAgICAkcmVwZWF0ID0ge1wibGlzdFwiOntcImNvbVwiOlwiQ2FzaFJlY29yZFwiLFwicHJvcHNcIjpcIml0ZW1cIn19O1xyXG4kcHJvcHMgPSB7XCJDYXNoUmVjb3JkXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aXRlbS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fSxcIk5vRGF0YVwiOnt9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgQ2FzaFJlY29yZDogQ2FzaFJlY29yZCxcclxuICAgICAgICAgICAgTm9EYXRhOiBOb0RhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6I635Y+W6LWE6YeR5piO57uGXHJcbiAgICAgICAgYXN5bmMgZ2V0Q2FzaGRldGFpbChzZXNzX2tleSkge1xyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRpcC5sb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLkNhc2hkZXRhaWwoe21ldGhvZDonUE9TVCcsIHF1ZXJ5OntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc19rZXk6c2Vzc19rZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2Vfc2l6ZTo4XHJcbiAgICAgICAgICAgICAgICAgICAgfX0pXHJcbiAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5lcnJvcl9jb2RlID09ICcwJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHJlcy5kYXRhLmJpem9iai5kYXRhICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubGlzdCA9IHJlcy5kYXRhLmJpem9iai5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLmxvYWRlZCgpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aXAuZXJyb3IocmVzLmRhdGEubXNnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDojrflj5bkuKrkurrotYTmlplcclxuICAgICAgICBhc3luYyBnZXR1c2VySW5mbyhzZXNzX2tleSkge1xyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRpcC5sb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLnVzZXJJbmZvKHttZXRob2Q6J1BPU1QnLCBxdWVyeTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Nfa2V5OnNlc3Nfa2V5XHJcbiAgICAgICAgICAgICAgICAgICAgfX0pXHJcbiAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5lcnJvcl9jb2RlID09ICcwJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VyRGF0YSA9IHJlcy5kYXRhLmJpem9iai5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgICAgICB0aXAubG9hZGVkKClcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5tc2cpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZCgpe1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBvbmZpcmUub24oJ2xvYWRVc2VySW5mbycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3Nlc3Nfa2V5JyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5nZXR1c2VySW5mbyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3Nlc3Nfa2V5JyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0dXNlckluZm8ocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmdldENhc2hkZXRhaWwocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNlc3Nfa2V5ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBnb1VybCh1cmwpe1xyXG4gICAgICAgICAgICAgICAgaWYodXJsID09ICdjYXNoJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGFyc2VGbG9hdCh0aGlzLnVzZXJEYXRhLmFtb3VudCk8MTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXAuZXJyb3IoJ+WPr+aPkOeOsOmHkemineWwkeS6jjEw5YWD77yM5LiN6IO95o+Q546wJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy51c2VyRGF0YS5yZXN1bWVfZmlsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3BlcnNvbmFsL3dhbGxldC8nK3VybCsnP2Ftb3VudD0nK3RoaXMudXNlckRhdGEuYW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb25hbC9wcm9maWxlL2NlcnRpZmljYXRpb24/cm9hZD1jYXNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3BlcnNvbmFsL3dhbGxldC8nK3VybFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiJdfQ==