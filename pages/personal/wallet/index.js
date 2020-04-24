'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var regeneratorRuntime = require('../../../npm/regenerator-runtime/runtime.js');

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
          tabList: ["全部", "新进款项", "待进款项"],
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
            goUrl: function goUrl() {
                
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
                
            },

          scroll: function (event) {
            var _this = this;
            
            _this.scrollTop = event.detail.scrollTop;
            _this.$apply();
          },
          // 滚动切换标签样式
          switchTab: function (e) {
            var _this = this;
            var i = e.detail.current;
            _this.currentTab = i;
            console.log(e,"aaaa")
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
            console.log(e, "qqq")
            var _status = e.currentTarget.dataset.title;
            var cur = e.target.dataset.current;
            if (_this.currentTaB == cur) { return false; }
            else {
              _this.currentTab = cur;
              _this.$apply();

            }
          },
          bindDownLoad: function (){
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
          _this.page_info.cur_page=0;
            _onfire2.default.on('loadUserInfo', function () {
                wx.getStorage({
                    key: 'sess_key',
                    success: function success(res) {
                        _this.getuserInfo(res.data);
                      wx.hideTabBar({
                        success: function (res) { console.log(res) },
                        fail: function (res) { console.log(res, "..") }
                      })
                      
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
              var calc = clientHeight-285;
              _this.winHeight = calc;
              _this.$apply();
            }
          });
        },
        
      },
      {
        key: 'onShow',
        value: function onShow() {
          var _this = this;
          wx.hideTabBar();
        },

      },
      
      ]);

    return wallet;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(wallet , 'pages/personal/wallet/index'));

