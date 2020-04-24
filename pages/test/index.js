'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var regeneratorRuntime = require('../../npm/regenerator-runtime/runtime.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _api = require('./../../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _navigator = require('./../../components/common/navigator.js');

var _navigator2 = _interopRequireDefault(_navigator);

var _info = require('./../../components/common/info.js');

var _info2 = _interopRequireDefault(_info);

var _button = require('./../../components/common/button.js');

var _button2 = _interopRequireDefault(_button);

var _onfire = require('./../../npm/onfire.js/dist/onfire.min.js');

var _onfire2 = _interopRequireDefault(_onfire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var workIndex = function (_wepy$page) {
    _inherits(workIndex, _wepy$page);

    function workIndex() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, workIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = workIndex.__proto__ || Object.getPrototypeOf(workIndex)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '工作',
            navigationBarBackgroundColor: '#fff',
            navigationBarTextStyle: 'black',
            enablePullDownRefresh: true
        }, _this2.$repeat = { "nav_list": { "com": "nav", "props": "list.sync" }, "work_list": { "com": "info", "props": "list.sync" }, "data_list": { "com": "btn", "props": "info.sync" }, "all_list": { "com": "info", "props": "list.sync" } }, _this2.$props = { "nav": { "xmlns:v-bind": { "value": "", "for": "nav_list", "item": "item", "index": "index", "key": "index" }, "v-bind:list.sync": { "value": "item", "type": "item", "for": "nav_list", "item": "item", "index": "index", "key": "index" }, "v-bind:index.sync": { "value": "index", "type": "index", "for": "nav_list", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "nav_list", "item": "item", "index": "index", "key": "index" } }, "info": { "v-bind:list.sync": { "value": "item", "type": "item", "for": "all_list", "item": "item", "index": "index", "key": "index" } }, "btn": { "v-bind:info.sync": { "value": "item", "type": "item", "for": "data_list.sort_data", "item": "item", "index": "index", "key": "index" }, "v-bind:select.once": { "value": "select_list.sort_data", "for": "data_list.sort_data", "item": "item", "index": "index", "key": "index" }, "v-bind:index.sync": { "value": "index", "type": "index", "for": "data_list.sort_data", "item": "item", "index": "index", "key": "index" } } }, _this2.$events = { "nav": { "v-on:navTap": "navTap" }, "info": { "v-on:infoTap": "detailTap" }, "btn": { "v-on:btnTap": "btnTap" } }, _this2.components = {
            nav: _navigator2.default,
            info: _info2.default,
            btn: _button2.default
        }, _this2.data = {
            nav_list: [{
                name: '地区',
                up: false,
                data: 'area_data'
            }, {
                name: '职位',
                up: false,
                data: 'job_data'
            }, {
                name: '排序',
                up: false,
                data: 'sort_data'
            }],
            data_list: {
                area_data: [],
                job_data: [],
                sort_data: [{
                    sort_way: 1,
                    name: '最新排序'
                }, {
                    sort_way: 2,
                    name: '工资最高'
                }, {
                    sort_way: 3,
                    name: '奖励金最高'
                }]
            },
            work_list: [],
            select_list: {
                area_data: {},
                job_data: {},
                sort_data: {}
            },
            page_info: { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 },
            all_list: []
        }, _this2.methods = {
            navTap: function navTap(v) {
                for (var i = 0; i < this.nav_list.length; i++) {
                    i == v ? this.nav_list[v].up = !this.nav_list[v].up : this.nav_list[i].up = false;
                }
                this.$apply();
            },
            btnTap: function btnTap(v) {
                if (v.areano) {
                    this.select_list.area_data = v;
                } else if (v.id) {
                    this.select_list.job_data = v;
                } else {
                    this.select_list.sort_data = v;
                }
                var _this = this;
                _this.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 };
                wx.getStorage({
                    key: 'sess_key',
                    success: function success(res) {
                        _this.getWorkList(res.data);
                    }
                });
                this.$apply();
            },
            detailTap: function detailTap(v) {
                wx.getStorage({
                    key: 'sess_key',
                    success: function success(res) {
                        wx.navigateTo({
                            url: '/pages/work/workDetails?sess_key=' + res.data + '&id=' + v.id
                        });
                    }
                });
            },
            coverTap: function coverTap(v) {
                this.nav_list[v].up = false;
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(workIndex, [{
        key: 'getWorkList',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context.next = 4;
                                return _api2.default.workList({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        is_rec: 2,
                                        areano: that.select_list.area_data.areano || '',
                                        job_type: that.select_list.job_data.id || '',
                                        sort_way: that.select_list.sort_data.sort_way || '',
                                        page: Number(that.page_info.cur_page) + 1 || 1,
                                        page_size: that.page_info.page_size
                                    } });

                            case 4:
                                res = _context.sent;

                                if (res.data.error_code == 0) {
                                    if (res.data.bizobj.data == null) {
                                        that.all_list = [];
                                        that.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 };
                                    } else if (res.data.bizobj.page_info.cur_page != 1) {
                                        that.all_list = that.all_list.concat(res.data.bizobj.data);
                                        that.page_info = res.data.bizobj.page_info;
                                    } else {
                                        that.all_list = res.data.bizobj.data;
                                        that.page_info = res.data.bizobj.page_info;
                                    }
                                    that.$apply();
                                    _tip2.default.loaded();
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

            function getWorkList(_x) {
                return _ref2.apply(this, arguments);
            }

            return getWorkList;
        }()
    }, {
        key: 'cityList',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sess_key) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context2.next = 4;
                                return _api2.default.cityList({ method: 'POST', query: {
                                        sess_key: sess_key
                                    } });

                            case 4:
                                res = _context2.sent;

                                if (res.data.error_code == 0) {
                                    that.data_list.area_data = res.data.bizobj.data.recruit_citys;
                                    that.$apply();
                                    _tip2.default.loaded();
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

            function cityList(_x2) {
                return _ref3.apply(this, arguments);
            }

            return cityList;
        }()
    }, {
        key: 'workTypeList',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(sess_key) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context3.next = 4;
                                return _api2.default.workTypeList({ method: 'POST', query: {
                                        sess_key: sess_key
                                    } });

                            case 4:
                                res = _context3.sent;

                                if (res.data.error_code == 0) {
                                    that.data_list.job_data = res.data.bizobj.data;
                                    that.$apply();
                                    _tip2.default.loaded();
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

            function workTypeList(_x3) {
                return _ref4.apply(this, arguments);
            }

            return workTypeList;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var _this = this;
            _onfire2.default.on('work', function (args) {
                _this.select_list.area_data = {};
                _this.select_list.job_data = {};
                _this.select_list.sort_data = {};
                for (var i = 0; i < _this.nav_list.length; i++) {
                    _this.nav_list[i].up = false;
                }
                wx.getStorage({
                    key: 'sess_key',
                    success: function success(res) {
                        _this.getWorkList(res.data);
                        _this.cityList(res.data);
                        _this.workTypeList(res.data);
                    }
                });
            });
            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                    _this.getWorkList(res.data);
                    _this.cityList(res.data);
                    _this.workTypeList(res.data);
                }
            });
        }
    }, {
        key: 'onPullDownRefresh',
        value: function onPullDownRefresh() {
            var _this = this;
            _this.all_list = [];
            _this.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 };
            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                    _this.getWorkList(res.data);
                }
            });
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
                    duration: 300
                });
            } else {
                wx.getStorage({
                    key: 'sess_key',
                    success: function success(res) {
                        _this.getWorkList(res.data);
                    }
                });
            }
        }
    }]);

    return workIndex;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(workIndex , 'pages/work/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIndvcmtJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm5hdiIsImluZm8iLCJidG4iLCJkYXRhIiwibmF2X2xpc3QiLCJuYW1lIiwidXAiLCJkYXRhX2xpc3QiLCJhcmVhX2RhdGEiLCJqb2JfZGF0YSIsInNvcnRfZGF0YSIsInNvcnRfd2F5Iiwid29ya19saXN0Iiwic2VsZWN0X2xpc3QiLCJwYWdlX2luZm8iLCJjdXJfcGFnZSIsInBhZ2Vfc2l6ZSIsInRvdGFsX2l0ZW1zIiwidG90YWxfcGFnZXMiLCJhbGxfbGlzdCIsIm1ldGhvZHMiLCJuYXZUYXAiLCJ2IiwiaSIsImxlbmd0aCIsIiRhcHBseSIsImJ0blRhcCIsImFyZWFubyIsImlkIiwiX3RoaXMiLCJ3eCIsImdldFN0b3JhZ2UiLCJrZXkiLCJzdWNjZXNzIiwicmVzIiwiZ2V0V29ya0xpc3QiLCJkZXRhaWxUYXAiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY292ZXJUYXAiLCJzZXNzX2tleSIsInRoYXQiLCJ0aXAiLCJsb2FkaW5nIiwiYXBpIiwid29ya0xpc3QiLCJtZXRob2QiLCJxdWVyeSIsImlzX3JlYyIsImpvYl90eXBlIiwicGFnZSIsIk51bWJlciIsImVycm9yX2NvZGUiLCJiaXpvYmoiLCJjb25jYXQiLCJsb2FkZWQiLCJlcnJvciIsImVycm9yX21zZyIsImNpdHlMaXN0IiwicmVjcnVpdF9jaXR5cyIsIndvcmtUeXBlTGlzdCIsIm9uZmlyZSIsIm9uIiwiYXJncyIsInN0b3BQdWxsRG93blJlZnJlc2giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIndlcHkiXSwibWFwcGluZ3MiOiI7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QUFrQixFQUFDQyxVQUFTLENBQVYsRUFBYUMsV0FBVyxDQUF4QixFQUEyQkMsYUFBYSxDQUF4QyxFQUEyQ0MsYUFBYSxDQUF4RCxFQUFsQjtBQUNBWSxlQUFHQyxVQUFILENBQWM7QUFDVkMscUJBQUssVUFESztBQUVWQyx5QkFBUyxpQkFBU0MsR0FBVCxFQUFhO0FBQ2xCTCwwQkFBTU0sV0FBTixDQUFrQkQsSUFBSS9CLElBQXRCO0FBQ0g7QUFKUyxhQUFkO0FBTUEyQixlQUFHa0MsbUJBQUg7QUFDSDs7O3dDQUNjO0FBQ1gsZ0JBQUluQyxRQUFRLElBQVo7QUFDQSxnQkFBR0EsTUFBTWYsU0FBTixDQUFnQkMsUUFBaEIsSUFBNEJjLE1BQU1mLFNBQU4sQ0FBZ0JJLFdBQS9DLEVBQTJEO0FBQ3ZEWSxtQkFBR21DLFNBQUgsQ0FBYSxFQUFFO0FBQ1hDLDJCQUFPLFNBREU7QUFFVEMsMEJBQU0sU0FGRztBQUdUQyw4QkFBVTtBQUhELGlCQUFiO0FBS0gsYUFORCxNQU1LO0FBQ0R0QyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLLFVBREs7QUFFVkMsNkJBQVMsaUJBQVNDLEdBQVQsRUFBYTtBQUNsQkwsOEJBQU1NLFdBQU4sQ0FBa0JELElBQUkvQixJQUF0QjtBQUNIO0FBSlMsaUJBQWQ7QUFNSDtBQUNKOzs7O0VBektrQ2tFLGVBQUtuQixJOztrQkFBdkI1RCxTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCB0aXAgZnJvbSAnLi4vLi4vdXRpbHMvdGlwJztcclxuICAgIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vYXBpL2FwaSc7XHJcbiAgICBpbXBvcnQgbmF2IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL25hdmlnYXRvcic7XHJcbiAgICBpbXBvcnQgaW5mbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9pbmZvJztcclxuICAgIGltcG9ydCBidG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vYnV0dG9uJztcclxuICAgIGltcG9ydCBvbmZpcmUgZnJvbSAnb25maXJlLmpzJztcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHdvcmtJbmRleCBleHRlbmRzIHdlcHkucGFnZXtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflt6XkvZwnLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXHJcbiAgICAgICAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDp0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgJHJlcGVhdCA9IHtcIm5hdl9saXN0XCI6e1wiY29tXCI6XCJuYXZcIixcInByb3BzXCI6XCJsaXN0LnN5bmNcIn0sXCJ3b3JrX2xpc3RcIjp7XCJjb21cIjpcImluZm9cIixcInByb3BzXCI6XCJsaXN0LnN5bmNcIn0sXCJkYXRhX2xpc3RcIjp7XCJjb21cIjpcImJ0blwiLFwicHJvcHNcIjpcImluZm8uc3luY1wifSxcImFsbF9saXN0XCI6e1wiY29tXCI6XCJpbmZvXCIsXCJwcm9wc1wiOlwibGlzdC5zeW5jXCJ9fTtcclxuJHByb3BzID0ge1wibmF2XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJuYXZfbGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmxpc3Quc3luY1wiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcIm5hdl9saXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aW5kZXguc3luY1wiOntcInZhbHVlXCI6XCJpbmRleFwiLFwidHlwZVwiOlwiaW5kZXhcIixcImZvclwiOlwibmF2X2xpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInhtbG5zOnYtb25cIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcIm5hdl9saXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19LFwiaW5mb1wiOntcInYtYmluZDpsaXN0LnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJhbGxfbGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fSxcImJ0blwiOntcInYtYmluZDppbmZvLnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJkYXRhX2xpc3Quc29ydF9kYXRhXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6c2VsZWN0Lm9uY2VcIjp7XCJ2YWx1ZVwiOlwic2VsZWN0X2xpc3Quc29ydF9kYXRhXCIsXCJmb3JcIjpcImRhdGFfbGlzdC5zb3J0X2RhdGFcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDppbmRleC5zeW5jXCI6e1widmFsdWVcIjpcImluZGV4XCIsXCJ0eXBlXCI6XCJpbmRleFwiLFwiZm9yXCI6XCJkYXRhX2xpc3Quc29ydF9kYXRhXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHtcIm5hdlwiOntcInYtb246bmF2VGFwXCI6XCJuYXZUYXBcIn0sXCJpbmZvXCI6e1widi1vbjppbmZvVGFwXCI6XCJkZXRhaWxUYXBcIn0sXCJidG5cIjp7XCJ2LW9uOmJ0blRhcFwiOlwiYnRuVGFwXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIG5hdjogbmF2LFxyXG4gICAgICAgICAgICBpbmZvOmluZm8sXHJcbiAgICAgICAgICAgIGJ0bjpidG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgbmF2X2xpc3Q6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6J+WcsOWMuicsXHJcbiAgICAgICAgICAgICAgICAgICAgdXA6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTonYXJlYV9kYXRhJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOifogYzkvY0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHVwOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6J2pvYl9kYXRhJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOifmjpLluo8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHVwOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6J3NvcnRfZGF0YSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGF0YV9saXN0OntcclxuICAgICAgICAgICAgICAgIGFyZWFfZGF0YTpbXSxcclxuICAgICAgICAgICAgICAgIGpvYl9kYXRhOltdLFxyXG4gICAgICAgICAgICAgICAgc29ydF9kYXRhOlt7XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydF93YXk6MSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOifmnIDmlrDmjpLluo8nXHJcbiAgICAgICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICAgICBzb3J0X3dheToyLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6J+W3pei1hOacgOmrmCdcclxuICAgICAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRfd2F5OjMsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTon5aWW5Yqx6YeR5pyA6auYJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3b3JrX2xpc3Q6W10sXHJcbiAgICAgICAgICAgIHNlbGVjdF9saXN0OntcclxuICAgICAgICAgICAgICAgIGFyZWFfZGF0YTp7fSxcclxuICAgICAgICAgICAgICAgIGpvYl9kYXRhOnt9LFxyXG4gICAgICAgICAgICAgICAgc29ydF9kYXRhOnt9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhZ2VfaW5mbzp7Y3VyX3BhZ2U6MCwgcGFnZV9zaXplOiA4LCB0b3RhbF9pdGVtczogMiwgdG90YWxfcGFnZXM6IDF9LFxyXG4gICAgICAgICAgICBhbGxfbGlzdDpbXVxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBnZXRXb3JrTGlzdChzZXNzX2tleSkge1xyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRpcC5sb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkud29ya0xpc3Qoe21ldGhvZDonUE9TVCcscXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgc2Vzc19rZXk6IHNlc3Nfa2V5LFxyXG4gICAgICAgICAgICAgICAgaXNfcmVjOjIsXHJcbiAgICAgICAgICAgICAgICBhcmVhbm86dGhhdC5zZWxlY3RfbGlzdC5hcmVhX2RhdGEuYXJlYW5vIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgam9iX3R5cGU6dGhhdC5zZWxlY3RfbGlzdC5qb2JfZGF0YS5pZCB8fCAnJyxcclxuICAgICAgICAgICAgICAgIHNvcnRfd2F5OnRoYXQuc2VsZWN0X2xpc3Quc29ydF9kYXRhLnNvcnRfd2F5IHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgcGFnZTpOdW1iZXIodGhhdC5wYWdlX2luZm8uY3VyX3BhZ2UpICsxIHx8IDEsXHJcbiAgICAgICAgICAgICAgICBwYWdlX3NpemU6dGhhdC5wYWdlX2luZm8ucGFnZV9zaXplXHJcbiAgICAgICAgICAgIH19KTtcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEuZXJyb3JfY29kZSA9PSAwICl7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5iaXpvYmouZGF0YSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmFsbF9saXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5wYWdlX2luZm8gPSB7Y3VyX3BhZ2U6MCwgcGFnZV9zaXplOiA4LCB0b3RhbF9pdGVtczogMiwgdG90YWxfcGFnZXM6IDF9O1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mby5jdXJfcGFnZSAhPSAxKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmFsbF9saXN0ID10aGF0LmFsbF9saXN0LmNvbmNhdChyZXMuZGF0YS5iaXpvYmouZGF0YSkgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucGFnZV9pbmZvID0gcmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mbztcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYWxsX2xpc3QgPXJlcy5kYXRhLmJpem9iai5kYXRhIDtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfaW5mbyA9IHJlcy5kYXRhLmJpem9iai5wYWdlX2luZm87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgdGlwLmxvYWRlZCgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5lcnJvcl9tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIGNpdHlMaXN0KHNlc3Nfa2V5KSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgdGlwLmxvYWRpbmcoKTtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5jaXR5TGlzdCh7bWV0aG9kOidQT1NUJyxxdWVyeTp7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc19rZXk6IHNlc3Nfa2V5XHJcbiAgICAgICAgICAgICAgICB9fSk7XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gMCApe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5kYXRhX2xpc3QuYXJlYV9kYXRhID1yZXMuZGF0YS5iaXpvYmouZGF0YS5yZWNydWl0X2NpdHlzO1xyXG4gICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIHRpcC5sb2FkZWQoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aXAuZXJyb3IocmVzLmRhdGEuZXJyb3JfbXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyB3b3JrVHlwZUxpc3Qoc2Vzc19rZXkpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aXAubG9hZGluZygpO1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLndvcmtUeXBlTGlzdCh7bWV0aG9kOidQT1NUJyxxdWVyeTp7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc19rZXk6IHNlc3Nfa2V5XHJcbiAgICAgICAgICAgICAgICB9fSk7XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gMCApe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5kYXRhX2xpc3Quam9iX2RhdGEgPXJlcy5kYXRhLmJpem9iai5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIHRpcC5sb2FkZWQoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aXAuZXJyb3IocmVzLmRhdGEuZXJyb3JfbXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvbkxvYWQoKXtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgb25maXJlLm9uKCd3b3JrJywgZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNlbGVjdF9saXN0LmFyZWFfZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2VsZWN0X2xpc3Quam9iX2RhdGEgPSB7fTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNlbGVjdF9saXN0LnNvcnRfZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDtpPF90aGlzLm5hdl9saXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm5hdl9saXN0W2ldLnVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZXNzX2tleScsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0V29ya0xpc3QocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaXR5TGlzdChyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLndvcmtUeXBlTGlzdChyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3Nlc3Nfa2V5JyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0V29ya0xpc3QocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNpdHlMaXN0KHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy53b3JrVHlwZUxpc3QocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb25QdWxsRG93blJlZnJlc2goKXtcclxuICAgICAgICAgICAgbGV0IF90aGlzPXRoaXM7XHJcbiAgICAgICAgICAgIF90aGlzLmFsbF9saXN0ID0gW107XHJcbiAgICAgICAgICAgIF90aGlzLnBhZ2VfaW5mbyA9IHtjdXJfcGFnZTowLCBwYWdlX3NpemU6IDgsIHRvdGFsX2l0ZW1zOiAyLCB0b3RhbF9wYWdlczogMX07XHJcbiAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiAnc2Vzc19rZXknLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5nZXRXb3JrTGlzdChyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uUmVhY2hCb3R0b20oKXtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgaWYoX3RoaXMucGFnZV9pbmZvLmN1cl9wYWdlID09IF90aGlzLnBhZ2VfaW5mby50b3RhbF9wYWdlcyl7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3QoeyAvL+WmguaenOWFqOmDqOWKoOi9veWujOaIkOS6huS5n+W8ueS4gOS4quahhlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oiR5Lmf5piv5pyJ5bqV57q/55qEJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnc2Vzc19rZXknLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdldFdvcmtMaXN0KHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBuYXZUYXAodil7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwO2k8dGhpcy5uYXZfbGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAoaSA9PSB2KSA/dGhpcy5uYXZfbGlzdFt2XS51cCA9ICF0aGlzLm5hdl9saXN0W3ZdLnVwIDogdGhpcy5uYXZfbGlzdFtpXS51cCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnRuVGFwKHYpe1xyXG4gICAgICAgICAgICAgICAgaWYodi5hcmVhbm8pe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0X2xpc3QuYXJlYV9kYXRhID0gdjtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHYuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0X2xpc3Quam9iX2RhdGEgPSB2O1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RfbGlzdC5zb3J0X2RhdGEgPSB2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIF90aGlzLnBhZ2VfaW5mbyA9IHtjdXJfcGFnZTowLCBwYWdlX3NpemU6IDgsIHRvdGFsX2l0ZW1zOiAyLCB0b3RhbF9wYWdlczogMX07XHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZXNzX2tleScsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0V29ya0xpc3QocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGV0YWlsVGFwKHYpe1xyXG4gICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnc2Vzc19rZXknLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3dvcmsvd29ya0RldGFpbHM/c2Vzc19rZXk9JyArIHJlcy5kYXRhICsgJyZpZD0nICsgdi5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY292ZXJUYXAodil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdl9saXN0W3ZdLnVwID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiJdfQ==