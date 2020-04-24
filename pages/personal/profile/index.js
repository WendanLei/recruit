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

var _onfire = require('./../../../npm/onfire.js/dist/onfire.min.js');

var _onfire2 = _interopRequireDefault(_onfire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var profile = function (_wepy$page) {
    _inherits(profile, _wepy$page);

    function profile() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, profile);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = profile.__proto__ || Object.getPrototypeOf(profile)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '完善信息'
        }, _this2.data = {
            isOperate: false,
            date: '',
            tel: '',
            userData: {},
            html: '获取验证码',
            wait: 0,
            timer: null,
            sess_key: '',
            code: '123456',
            endDate: new Date(),
            page: ''
            // 获取个人资料
        }, _this2.methods = {
            formSubmit: function formSubmit(e) {
                if (!e.detail.value.sms_code) {
                    _tip2.default.error('请输入验证码');
                    return;
                }
                var json = e.detail.value;
                json['id'] = this.userData.id;
                json['sess_key'] = this.sess_key;
                json['birthday'] = this.date;
                this.isOperate = true;
                this.postuserInfo(json);
            },
            bindDateChange: function bindDateChange(e) {
                this.date = e.detail.value;
            },
            getTel: function getTel(e) {
                this.tel = e.detail.value;
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(profile, [{
        key: 'getuserInfo',
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
                                return _api2.default.userInfo({ method: 'POST', query: {
                                        sess_key: sess_key
                                    } });

                            case 4:
                                res = _context.sent;

                                if (res.data.error_code == '0') {
                                    that.userData = res.data.bizobj.data;
                                    this.tel = res.data.bizobj.data.mobile;
                                    this.date = this.userData.birthday ? this.userData.birthday : '';
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

            function getuserInfo(_x) {
                return _ref2.apply(this, arguments);
            }

            return getuserInfo;
        }()
        // 短信验证码

    }, {
        key: 'getCode',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var myreg, that, res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (!(this.wait > 0)) {
                                    _context2.next = 2;
                                    break;
                                }

                                return _context2.abrupt('return');

                            case 2:
                                //myreg = /^[1][3,4,5,7,8][0-9]{9}$/; //手机号正则
                                //  myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/; //手机号正则
                                if (this.tel == null || this.tel == "" ) {
                                  _tip2.default.error('请输入手机号');
                                    
                                }else{
                                  _context2.next = 6;
                                  break;
                                }
                                
                                return _context2.abrupt('return');

                            case 6:
                                that = this;
                                _context2.next = 9;
                                return _api2.default.sendProfileSms({ method: 'POST', query: {
                                        sess_key: that.sess_key,
                                        mobile: that.tel
                                    } });

                            case 9:
                                res = _context2.sent;

                                if (res.data.error_code == '0') {
                                    _tip2.default.success('验证码发送成功，请注意查收');
                                    this.wait = 60;
                                    clearTimeout(this.timer);
                                    this.downTime(this.wait, this.timer);
                                } else {
                                  _tip2.default.error(res.data.msg);
                                }

                            case 11:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getCode() {
                return _ref3.apply(this, arguments);
            }

            return getCode;
        }()
    }, {
        key: 'downTime',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(wait, timer) {
                var _this;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                //验证码倒计时
                                _this = this;

                                if (wait == 0) {
                                    _this.html = '获取验证码';
                                    this.$apply();
                                    wait = 60;
                                } else {
                                    _this.html = "重新发送" + "(" + wait + ")";
                                    this.$apply();
                                    wait--;
                                    timer = setTimeout(function () {
                                        _this.downTime(wait, timer);
                                    }, 1000);
                                }

                            case 2:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function downTime(_x2, _x3) {
                return _ref4.apply(this, arguments);
            }

            return downTime;
        }()
        // 更新个人资料

    }, {
        key: 'postuserInfo',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context4.next = 4;
                                return _api2.default.updateUserInfo({ method: 'POST', query: data });

                            case 4:
                                res = _context4.sent;

                                if (res.data.error_code == '0') {
                                  _tip2.default.success('修改成功');
                                  // if (wx.getStorageSync("gourl").indexOf("index")!=-1) {
                                  //   wx.reLaunch({
                                  //     url: wx.getStorageSync("gourl"),
                                  //   })
                                  // } else {
                                  //   wx.redirectTo({
                                  //     url: wx.getStorageSync("gourl"),
                                  //   })
                                  // }
                                  wx.navigateBack({
                                    delta:1
                                  })
                                } else {
                                    _tip2.default.error(res.data.msg);
                                }

                            case 6:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function postuserInfo(_x4) {
                return _ref5.apply(this, arguments);
            }

            return postuserInfo;
        }()
      },{
        key: 'onLoad',
        value: function onLoad(o) {
            var _this = this;
            _this.page = o.page;
            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                    _this.getuserInfo(res.data);
                    _this.sess_key = res.data;
                }
            });
          var scene = wx.getStorageSync("scene");
          _this.optScence = scene
        }
    }, {
        key: 'onUnload',
        value: function onUnload() {
            if (this.page == 'apply' && this.isOperate) {
                _onfire2.default.fire('apply');
            } else if (this.page != 'apply') {
                _onfire2.default.fire('loadUserInfo');
            }
        }
    }]);

    return profile;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(profile , 'pages/personal/profile/index'));

