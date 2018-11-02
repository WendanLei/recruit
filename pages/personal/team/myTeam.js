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

var _noData = require('./../../../components/common/noData.js');

var _noData2 = _interopRequireDefault(_noData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyTeam = function (_wepy$page) {
    _inherits(MyTeam, _wepy$page);

    function MyTeam() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, MyTeam);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = MyTeam.__proto__ || Object.getPrototypeOf(MyTeam)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '我的团队',
            enablePullDownRefresh: true
        }, _this2.data = {
            index: 0,
            sess_key: '',
            list0: [],
            
            page_info: { cur_page: 0, page_size: 15, total_items: 0, total_pages: 1 },
          myList: [{ nickname: 'xxxx', avater: 'https://mini3.pinecc.cn/webinfo/lj/kefu1.png', project: '', company: '一道网络科技有限公司', amount: 100, date:'2018.10.15'},
            { nickname: 'xxxx', avater: 'https://mini3.pinecc.cn/webinfo/lj/kefu1.png', project: '', company: '一道网络科技有限公司', amount: 100, date: '2018.10.15' },
            { nickname: 'xxxx', avater: 'https://mini3.pinecc.cn/webinfo/lj/kefu1.png', project: '', company: '一道网络科技有限公司', amount: 100, date: '2018.10.15' },
            { nickname: 'xxxx', avater: 'https://mini3.pinecc.cn/webinfo/lj/kefu1.png', project: '', company: '一道网络科技有限公司', amount: 100, date: '2018.10.15' }
          ],//我的奖励
            //滑动切换
          navList: ["昵称", "项目", "金额", "日期"],
          
        }, _this2.$repeat = {}, _this2.$props = { "NoData": {} }, _this2.$events = {}, _this2.components = {
            NoData: _noData2.default

            // 获取我的邀请
        }, _this2.methods = {
            tab: function tab(index) {
                if (index == 0) {
                    this.list0 = [];
                    this.page_info = { cur_page: 0, page_size: 15, total_items: 0, total_pages: 1 };
                    this.getteamUserList(this.sess_key);
                } else {
                  this.myList = [];
                    this.page_info = { cur_page: 0, page_size: 15, total_items: 0, total_pages: 1 };
                    this.getUserTeamPrizeList(this.sess_key);
                }
                this.index = index;
            },
         
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(MyTeam, [{
        key: 'getteamUserList',
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
                                return _api2.default.teamUserList({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        page: Number(that.page_info.cur_page) + 1 || 1,
                                        page_size: that.page_info.page_size
                                    } });

                            case 4:
                                res = _context.sent;

                                if (res.data.error_code == '0') {
                                    if (res.data.bizobj.data == null) {
                                        that.list0 = [];
                                        that.page_info = { cur_page: 0, page_size: 15, total_items: 0, total_pages: 1 };
                                    } else {
                                        if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                                            that.list0 = that.list0.concat(res.data.bizobj.data);
                                        } else {
                                            that.list0 = res.data.bizobj.data;
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

            function getteamUserList(_x) {
                return _ref2.apply(this, arguments);
            }

            return getteamUserList;
        }()
        // 获取我的奖励

    }, {
        key: 'getUserTeamPrizeList',
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
                                return _api2.default.UserTeamPrizeList({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        page: Number(that.page_info.cur_page) + 1 || 1,
                                        page_size: that.page_info.page_size
                                    } });

                            case 4:
                                res = _context2.sent;

                                if (res.data.error_code == '0') {
                                    if (res.data.bizobj.data == null) {
                                      that.myList = [];
                                        that.page_info = { cur_page: 0, page_size: 15, total_items: 0, total_pages: 1 };
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
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getUserTeamPrizeList(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getUserTeamPrizeList;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var _this = this;
            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                    _this.sess_key = res.data;
                    _this.getteamUserList(res.data);
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
                    duration: 300
                });
            } else {
                wx.getStorage({
                    key: 'sess_key',
                    success: function success(res) {
                        if (_this.index == 0) {
                            _this.getteamUserList(res.data);
                        } else {
                            _this.getUserTeamPrizeList(res.data);
                        }
                    }
                });
            }
        }
    }]);

    return MyTeam;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(MyTeam , 'pages/personal/team/myTeam'));

