'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var regeneratorRuntime = require('../../npm/regenerator-runtime/runtime.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_wepy$page) {
    _inherits(Login, _wepy$page);

    function Login() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Login);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '登录'
        }, _this.data = {
            webInfo: {},
            page: '',
          optScence:null,
          compId:null,
          ukey:null,
          detailId:'',
        }, _this.methods = {
            onGotUserInfo: function onGotUserInfo(e) {
                var that = this;
                wx.getSetting({
                    success: function success(res) {
                        if (!res.authSetting['scope.userInfo']) {
                            wx.authorize({
                                scope: 'scope.userInfo',
                                success: function success(res_info) {
                                    wx.login({
                                        success: function success(resLogin) {
                                            var code = resLogin.code;
                                            that.getLogin({ method: 'POST', query: { code: code } }, that.page);
                                            
                                        }
                                    });
                                }, fail: function fail(res_info) {
                                    console.log(res_info);
                                }
                            });
                        } else {
                            wx.login({
                                success: function success(resLogin) {
                                    var code = resLogin.code;
                                    that.getLogin({ method: 'POST', query: { code: code } }, that.page);
                                }
                            });
                        }
                    },
                    fail: function fail(res) {
                        console.log(res);
                    }
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

  _createClass(Login, [{
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
                return _api2.default.userInfo({
                  method: 'POST', query: {
                    sess_key: sess_key
                  }
                });

              case 4:
                res = _context.sent;
                console.log(res)
                if (res.data.error_code == '0') {
                  console.log(res)
                  that.userData = res.data.bizobj.data;
                  
                  if (res.data.bizobj.data.mobile && that.userData.birthday && res.data.bizobj.data.username) {
                    // wx.reLaunch({
                    //   url: '/pages/personal/index',
                    // })
                    // if(that.flag==1){
                    //   wx.reLaunch({
                    //     url: wx.getStorageSync("gourl"),
                    //   })
                    // }else{
                    //   wx.redirectTo({
                    //     url: wx.getStorageSync("gourl"),
                    //   })
                    // }
                    wx.navigateBack({
                      delta:1
                    })
                    
                  } else {
                    wx.redirectTo({
                      url: '/pages/personal/profile/index?page=apply',
                    })
                    return;
                  }
                  that.$apply();
                  _tip2.default.loaded();
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
        key: 'getLogin',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params, page) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;
                                _context.next = 3;
                                
                                return _api2.default.login(params);

                            case 3:
                                res = _context.sent;
                                console.log(res,"??????");
                                if (res.data.error_code == 0) {
                                    wx.setStorage({
                                        'key': 'sess_key',
                                        'data': res.data.bizobj.data.sess_key
                                    });
                                 
                                    wx.getUserInfo({
                                        success: function success(_res) {
                                          console.log(_res)
                                            wx.getStorage({
                                                key: 'scene',
                                                success: function success(resScene) {
                                                  console.log(resScene,"////")
                                                    that.getSess(res.data.bizobj.data.sess_key, _res.encryptedData, _res.iv, resScene.data, page);
                                                 
                                                }, fail: function fail(resScene) {
                                                  console.log(resScene, "/?????///")
                                                    that.getSess(res.data.bizobj.data.sess_key, _res.encryptedData, _res.iv, resScene.data, page);
                                                }
                                            });
                                        },
                                        fail: function fail(res) {
                                          console.log(_res)
                                            wx.showModal({
                                                title: '警告',
                                                cancelText: '不授权',
                                                confirmText: '授权',
                                                confirmColor: '#37C31A',
                                                content: '若不授权微信登录，则无法使用该程序；点击重新获取授权，则可重新使用；' + '若点击不授权，将无法使用便捷服务。',
                                                success: function success(res) {
                                                    if (res.confirm) {
                                                        wx.openSetting({
                                                            success: function success(res) {
                                                                if (res.authSetting['scope.userInfo']) {
                                                                    wx.login({
                                                                        success: function success(resLogin) {
                                                                            var code = resLogin.code;
                                                                            that.getLogin({ method: 'POST', query: { code: code } }, page);
                                                                        }
                                                                    });
                                                                } else {
                                                                    console.info("再次不允许");
                                                                }
                                                            }
                                                        });
                                                    } else if (res.cancel) {}
                                                }
                                            });
                                        }
                                    });
                                } else {
                                    // _tip2.default.error(res.data.msg);
                                    // wx.switchTab({
                                    //     url: '/pages/index/index'
                                    // });
                                }

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getLogin(_x, _x2) {
                return _ref2.apply(this, arguments);
            }

            return getLogin;
        }()
    }, {
        key: 'getSess',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sess_key, encryptedData, iv, scene, page) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                that = this;
                            console.log(scene, "!!!!!!!!!!!!!!!!!!!!")
                                _context2.next = 3;
                           
                                return _api2.default.getUserInfo({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        encrypteData: encryptedData,
                                        iv: iv,
                                        // rec_user_id: scene || '',
                                        ukey: wx.getStorageSync("ukey") || ''
                                    } });

                            case 3:
                                res = _context2.sent;
                                if (res.data.error_code == 0) {
                                    wx.setStorage({
                                        'key': 'user_img',
                                        'data': res.data.bizobj.data.avatar
                                    });
                                    wx.setStorage({
                                        'key': 'ukey',
                                        'data': res.data.bizobj.data.ukey
                                    });
                                  that.getuserInfo(sess_key);
                                } else {
                                    _tip2.default.error(res.data.msg);
                                }

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getSess(_x3, _x4, _x5, _x6, _x7) {
                return _ref3.apply(this, arguments);
            }

            return getSess;
        }()
    }, {
        key: 'getWebInfo',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var that, res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                that = this;
                                _context3.next = 3;
                                return _api2.default.webInfo({ method: 'POST', query: {} });

                            case 3:
                                res = _context3.sent;
                              
                                if (res.data.error_code == 0) {
                                    that.webInfo = res.data.bizobj.data;
                                    that.$apply();
                                } 

                            case 5:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getWebInfo() {
                return _ref4.apply(this, arguments);
            }

            return getWebInfo;
        }()
    },
     {
        key: 'onLoad',
        value: function onLoad(options) {
         
          var that=this;
          if (options.page == 'index') {
            that.flag=1;
            that.$apply();
          }
          this.getWebInfo();
          
        }
    }]);

    return Login;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/personal/login'));
