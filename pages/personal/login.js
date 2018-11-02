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
            page: ''
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

                                if (res.data.error_code == 0) {
                                    wx.setStorage({
                                        'key': 'sess_key',
                                        'data': res.data.bizobj.data.sess_key
                                    });
                                    wx.getUserInfo({
                                        success: function success(_res) {
                                            wx.getStorage({
                                                key: 'scene',
                                                success: function success(resScene) {
                                                    that.getSess(res.data.bizobj.data.sess_key, _res.encryptedData, _res.iv, resScene.data, page);
                                                }, fail: function fail(resScene) {
                                                    that.getSess(res.data.bizobj.data.sess_key, _res.encryptedData, _res.iv, resScene.data, page);
                                                }
                                            });
                                        },
                                        fail: function fail(res) {
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
                                    _tip2.default.error(res.data.msg);
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
                                _context2.next = 3;
                                return _api2.default.getUserInfo({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        encrypteData: encryptedData,
                                        iv: iv,
                                        rec_user_id: scene || ''
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
                                    console.log(page);
                                    if (page == 'detail') {
                                        wx.navigateTo({
                                            url: '/pages/work/workDetails'
                                        });
                                    } else {
                                        wx.switchTab({
                                            url: '/pages/index/index'
                                        });
                                    }
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
                                } else {
                                    _tip2.default.error(res.data.msg);
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
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            console.log('第一次',options)
            if (options && options.scene && decodeURIComponent(options.scene).indexOf('ukey')!= -1) {
                console.log('第二次',options);
                console.log('第三次',options.scene);
                console.log('第四次',decodeURIComponent(options.scene));
                var scene = decodeURIComponent(options.scene); //'ukey=NQ==&work_id=32'
                wx.navigateTo({
                    url: '/pages/work/workDetails?ukey=' + encodeURIComponent(scene.split('&')[0].replace('=', '/').split('/')[1]) + '&id=' + scene.split('&')[1].split('=')[1]
                });
                return false;
            }
            if (options.page) {
                this.page = options.page;
            }
            this.getWebInfo();
            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                    // wx.switchTab({
                    //     url:'/pages/index/index'
                    // });
                    wx.login({
                        success: function success(resLogin) {
                            var code = resLogin.code;
                            if (options.page) {
                                that.getLogin({ method: 'POST', query: { code: code } }, options.page);
                            } else {
                                that.getLogin({ method: 'POST', query: { code: code } });
                            }
                        }
                    });
                }, fail: function fail() {
                    wx.getSetting({
                        success: function success(res) {
                            if (!res.authSetting['scope.userInfo']) {} else {
                                wx.login({
                                    success: function success(resLogin) {
                                        var code = resLogin.code;
                                        if (options.page) {
                                            that.getLogin({ method: 'POST', query: { code: code } }, options.page);
                                        } else {
                                            that.getLogin({ method: 'POST', query: { code: code } });
                                        }
                                    }
                                });
                            }
                        },
                        fail: function fail(res) {
                            console.log(res);
                        }
                    });
                }
            });
            var that = this;

            wx.getStorage({
                key: 'scene',
                success: function success(res) {}, fail: function fail(res) {
                    if (options && options.scene) {
                        var scene = decodeURIComponent(options.scene);
                        wx.setStorage({
                            key: 'scene',
                            data: scene
                        });
                    }
                }
            });
        }
    }]);

    return Login;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/personal/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ3ZWJJbmZvIiwicGFnZSIsIm1ldGhvZHMiLCJvbkdvdFVzZXJJbmZvIiwiZSIsInRoYXQiLCJ3eCIsImdldFNldHRpbmciLCJzdWNjZXNzIiwicmVzIiwiYXV0aFNldHRpbmciLCJhdXRob3JpemUiLCJzY29wZSIsInJlc19pbmZvIiwibG9naW4iLCJyZXNMb2dpbiIsImNvZGUiLCJnZXRMb2dpbiIsIm1ldGhvZCIsInF1ZXJ5IiwiZmFpbCIsImNvbnNvbGUiLCJsb2ciLCJwYXJhbXMiLCJhcGkiLCJlcnJvcl9jb2RlIiwic2V0U3RvcmFnZSIsImJpem9iaiIsInNlc3Nfa2V5IiwiZ2V0VXNlckluZm8iLCJfcmVzIiwiZ2V0U3RvcmFnZSIsImtleSIsInJlc1NjZW5lIiwiZ2V0U2VzcyIsImVuY3J5cHRlZERhdGEiLCJpdiIsInNob3dNb2RhbCIsInRpdGxlIiwiY2FuY2VsVGV4dCIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwiY29udGVudCIsImNvbmZpcm0iLCJvcGVuU2V0dGluZyIsImluZm8iLCJjYW5jZWwiLCJ0aXAiLCJlcnJvciIsIm1zZyIsInNjZW5lIiwiZW5jcnlwdGVEYXRhIiwicmVjX3VzZXJfaWQiLCJhdmF0YXIiLCJ1a2V5IiwibmF2aWdhdGVUbyIsInVybCIsInN3aXRjaFRhYiIsIiRhcHBseSIsIm9wdGlvbnMiLCJnZXRXZWJJbmZvIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwid2VweSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQXdCO0FBRGpCLFMsUUFHVEMsSSxHQUFPO0FBQ0hDLHFCQUFTLEVBRE47QUFFSEMsa0JBQUs7QUFGRixTLFFBd0tQQyxPLEdBQVU7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UUMsR0FBUixDQUFZYixHQUFaO0FBQ0g7QUFwQlMscUJBQWQ7QUFzQkg7QUF4Q1MsYUFBZDtBQTBDQSxnQkFBSUosT0FBTyxJQUFYOztBQUVGQyxlQUFHeUIsVUFBSCxDQUFjO0FBQ1ZDLHFCQUFJLE9BRE07QUFFVnhCLHlCQUFRLGlCQUFVQyxHQUFWLEVBQWUsQ0FDdEIsQ0FIUyxFQUdSVyxNQUFLLGNBQVVYLEdBQVYsRUFBZTtBQUNsQix3QkFBR2tELFdBQVdBLFFBQVFULEtBQXRCLEVBQTZCO0FBQ3pCLDRCQUFJQSxRQUFRVyxtQkFBbUJGLFFBQVFULEtBQTNCLENBQVo7QUFDQTVDLDJCQUFHb0IsVUFBSCxDQUFjO0FBQ1ZNLGlDQUFLLE9BREs7QUFFVmpDLGtDQUFNbUQ7QUFGSSx5QkFBZDtBQUlIO0FBQ0o7QUFYUyxhQUFkO0FBYUQ7Ozs7RUEzSzhCWSxlQUFLN0QsSTs7a0JBQW5CTCxLIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9hcGkvYXBpJ1xyXG4gIGltcG9ydCB0aXAgZnJvbSAnLi4vLi4vdXRpbHMvdGlwJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgd2VweS5wYWdle1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55m75b2VJ1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICB3ZWJJbmZvOiB7fSxcclxuICAgICAgICBwYWdlOicnXHJcbiAgICB9XHJcbiAgICAgIGFzeW5jIGdldExvZ2luKHBhcmFtcyxwYWdlKXtcclxuICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgIHZhciByZXMgPSBhd2FpdCBhcGkubG9naW4ocGFyYW1zKTtcclxuICAgICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gMCl7XHJcbiAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICdrZXknOidzZXNzX2tleScsXHJcbiAgICAgICAgICAgICAgICAgICdkYXRhJzpyZXMuZGF0YS5iaXpvYmouZGF0YS5zZXNzX2tleVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgc3VjY2VzczpmdW5jdGlvbihfcmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2NlbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24gKHJlc1NjZW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0U2VzcyhyZXMuZGF0YS5iaXpvYmouZGF0YS5zZXNzX2tleSxfcmVzLmVuY3J5cHRlZERhdGEsX3Jlcy5pdixyZXNTY2VuZS5kYXRhLHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sZmFpbDpmdW5jdGlvbiAocmVzU2NlbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5nZXRTZXNzKHJlcy5kYXRhLmJpem9iai5kYXRhLnNlc3Nfa2V5LF9yZXMuZW5jcnlwdGVkRGF0YSxfcmVzLml2LHJlc1NjZW5lLmRhdGEscGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBmYWlsOmZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICforablkYonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ6ICfkuI3mjojmnYMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn5o6I5p2DJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQ29sb3I6ICcjMzdDMzFBJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn6Iul5LiN5o6I5p2D5b6u5L+h55m75b2V77yM5YiZ5peg5rOV5L2/55So6K+l56iL5bqP77yb54K55Ye76YeN5paw6I635Y+W5o6I5p2D77yM5YiZ5Y+v6YeN5paw5L2/55So77ybJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ+iLpeeCueWHu+S4jeaOiOadg++8jOWwhuaXoOazleS9v+eUqOS+v+aNt+acjeWKoeOAgicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm9wZW5TZXR0aW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmxvZ2luKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOmZ1bmN0aW9uKHJlc0xvZ2luKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvZGUgPSByZXNMb2dpbi5jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmdldExvZ2luKHttZXRob2Q6J1BPU1QnLHF1ZXJ5Ontjb2RlOmNvZGV9fSxwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIuWGjeasoeS4jeWFgeiuuFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgdGlwLmVycm9yKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgLy8gd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICAvLyAgICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG4gICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICBhc3luYyBnZXRTZXNzKHNlc3Nfa2V5LGVuY3J5cHRlZERhdGEsaXYsc2NlbmUscGFnZSl7XHJcbiAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICB2YXIgcmVzID0gYXdhaXQgYXBpLmdldFVzZXJJbmZvKHttZXRob2Q6J1BPU1QnLHF1ZXJ5OntcclxuICAgICAgICAgICAgICAgICAgc2Vzc19rZXk6IHNlc3Nfa2V5LFxyXG4gICAgICAgICAgICAgICAgICBlbmNyeXB0ZURhdGE6ZW5jcnlwdGVkRGF0YSxcclxuICAgICAgICAgICAgICAgICAgaXY6aXYsXHJcbiAgICAgICAgICAgICAgICAgIHJlY191c2VyX2lkOnNjZW5lIHx8ICcnXHJcbiAgICAgICAgICAgICAgfX0pO1xyXG4gICAgICAgICAgaWYocmVzLmRhdGEuZXJyb3JfY29kZSA9PSAwKXtcclxuICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgJ2tleSc6J3VzZXJfaW1nJyxcclxuICAgICAgICAgICAgICAgICAgJ2RhdGEnOnJlcy5kYXRhLmJpem9iai5kYXRhLmF2YXRhclxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAna2V5JzondWtleScsXHJcbiAgICAgICAgICAgICAgICAgICdkYXRhJzpyZXMuZGF0YS5iaXpvYmouZGF0YS51a2V5XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZSk7XHJcbiAgICAgICAgICAgICAgaWYocGFnZSA9PSAnZGV0YWlsJyl7XHJcbiAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdXJsOicvcGFnZXMvd29yay93b3JrRGV0YWlscydcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7XHJcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6Jy9wYWdlcy9pbmRleC9pbmRleCdcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5tc2cpXHJcbiAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgfVxyXG4gICAgICBhc3luYyBnZXRXZWJJbmZvKCl7XHJcbiAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICB2YXIgcmVzID0gYXdhaXQgYXBpLndlYkluZm8oe21ldGhvZDonUE9TVCcscXVlcnk6e319KTtcclxuICAgICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gMCl7XHJcbiAgICAgICAgICAgICAgdGhhdC53ZWJJbmZvID0gcmVzLmRhdGEuYml6b2JqLmRhdGE7XHJcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5tc2cpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgb25Mb2FkKG9wdGlvbnMpe1xyXG4gICAgICAgIGlmKG9wdGlvbnMucGFnZSl7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IG9wdGlvbnMucGFnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRXZWJJbmZvKCk7XHJcbiAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICBrZXk6ICdzZXNzX2tleScsXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgLy8gd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIHVybDonL3BhZ2VzL2luZGV4L2luZGV4J1xyXG4gICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgICAgd3gubG9naW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczpmdW5jdGlvbihyZXNMb2dpbil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvZGUgPSByZXNMb2dpbi5jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMucGFnZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0TG9naW4oe21ldGhvZDonUE9TVCcscXVlcnk6e2NvZGU6Y29kZX19LG9wdGlvbnMucGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0TG9naW4oe21ldGhvZDonUE9TVCcscXVlcnk6e2NvZGU6Y29kZX19KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0sZmFpbDpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczpmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gubG9naW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczpmdW5jdGlvbihyZXNMb2dpbil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvZGUgPSByZXNMb2dpbi5jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMucGFnZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0TG9naW4oe21ldGhvZDonUE9TVCcscXVlcnk6e2NvZGU6Y29kZX19LG9wdGlvbnMucGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0TG9naW4oe21ldGhvZDonUE9TVCcscXVlcnk6e2NvZGU6Y29kZX19KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBmYWlsOmZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAga2V5OidzY2VuZScsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICB9LGZhaWw6ZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucyAmJiBvcHRpb25zLnNjZW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjZW5lID0gZGVjb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdzY2VuZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHNjZW5lXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBvbkdvdFVzZXJJbmZvOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczpmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5hdXRob3JpemUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6ICdzY29wZS51c2VySW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOmZ1bmN0aW9uIChyZXNfaW5mbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gubG9naW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOmZ1bmN0aW9uKHJlc0xvZ2luKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2RlID0gcmVzTG9naW4uY29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0TG9naW4oe21ldGhvZDonUE9TVCcscXVlcnk6e2NvZGU6Y29kZX19LHRoYXQucGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sZmFpbDpmdW5jdGlvbiAocmVzX2luZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNfaW5mbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3gubG9naW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczpmdW5jdGlvbihyZXNMb2dpbil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvZGUgPSByZXNMb2dpbi5jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0TG9naW4oe21ldGhvZDonUE9TVCcscXVlcnk6e2NvZGU6Y29kZX19LHRoYXQucGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOmZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICB9XHJcbiJdfQ==