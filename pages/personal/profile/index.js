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
                                 myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/; //手机号正则

                                if (!(this.tel == null || this.tel == "" || !myreg.test(this.tel))) {
                                    _context2.next = 6;
                                    break;
                                }

                                _tip2.default.error('手机号格式有误');
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
                                    _tip2.default.error('验证码发送失败');
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
                                    wx.navigateBack({
                                        delta: 1
                                    });
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
    }, {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb2ZpbGUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImlzT3BlcmF0ZSIsImRhdGUiLCJ0ZWwiLCJ1c2VyRGF0YSIsImh0bWwiLCJ3YWl0IiwidGltZXIiLCJzZXNzX2tleSIsImNvZGUiLCJlbmREYXRlIiwiRGF0ZSIsInBhZ2UiLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInNtc19jb2RlIiwidGlwIiwiZXJyb3IiLCJqc29uIiwiaWQiLCJwb3N0dXNlckluZm8iLCJiaW5kRGF0ZUNoYW5nZSIsImdldFRlbCIsInRoYXQiLCJsb2FkaW5nIiwiYXBpIiwidXNlckluZm8iLCJtZXRob2QiLCJxdWVyeSIsInJlcyIsImVycm9yX2NvZGUiLCJiaXpvYmoiLCJtb2JpbGUiLCJiaXJ0aGRheSIsIiRhcHBseSIsImxvYWRlZCIsIm1zZyIsIm15cmVnIiwidGVzdCIsInNlbmRQcm9maWxlU21zIiwic3VjY2VzcyIsImNsZWFyVGltZW91dCIsImRvd25UaW1lIiwiX3RoaXMiLCJzZXRUaW1lb3V0IiwidXBkYXRlVXNlckluZm8iLCJ3eCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwibyIsImdldFN0b3JhZ2UiLCJrZXkiLCJnZXR1c2VySW5mbyIsIm9uZmlyZSIsImZpcmUiLCJ3ZXB5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7OytMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFNBR1RDLEksR0FBTztBQUNIQyx1QkFBVyxLQURSO0FBRUhDLGtCQUFNLEVBRkg7QUFHSEMsaUJBQUssRUFIRjtBQUlIQyxzQkFBVSxFQUpQO0FBS0hDLGtCQUFNLE9BTEg7QUFNSEMsa0JBQU0sQ0FOSDtBQU9IQyxtQkFBTyxJQVBKO0FBUUhDLHNCQUFV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aEMsSUFBdEI7QUFDQThDLDBCQUFNdEMsUUFBTixHQUFpQndCLElBQUloQyxJQUFyQjtBQUNIO0FBTFMsYUFBZDtBQU9IOzs7bUNBQ1M7QUFDTixnQkFBRyxLQUFLWSxJQUFMLElBQWEsT0FBYixJQUFzQixLQUFLWCxTQUE5QixFQUF3QztBQUNwQ3VELGlDQUFPQyxJQUFQLENBQVksT0FBWjtBQUNILGFBRkQsTUFFTSxJQUFHLEtBQUs3QyxJQUFMLElBQWEsT0FBaEIsRUFBd0I7QUFDMUI0QyxpQ0FBT0MsSUFBUCxDQUFZLGNBQVo7QUFDSDtBQUNKOzs7O0VBNUdnQ0MsZUFBSzlDLEk7O2tCQUFyQmYsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQgdGlwIGZyb20gJy4uLy4uLy4uL3V0aWxzL3RpcCc7XHJcbiAgICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xyXG4gICAgaW1wb3J0IG9uZmlyZSBmcm9tICdvbmZpcmUuanMnO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvZmlsZSBleHRlbmRzIHdlcHkucGFnZXtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflrozlloTkv6Hmga8nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGlzT3BlcmF0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGU6ICcnLFxyXG4gICAgICAgICAgICB0ZWw6ICcnLFxyXG4gICAgICAgICAgICB1c2VyRGF0YToge30sXHJcbiAgICAgICAgICAgIGh0bWw6ICfojrflj5bpqozor4HnoIEnLFxyXG4gICAgICAgICAgICB3YWl0OiAwLFxyXG4gICAgICAgICAgICB0aW1lcjogbnVsbCxcclxuICAgICAgICAgICAgc2Vzc19rZXk6ICcnLFxyXG4gICAgICAgICAgICBjb2RlOiAnMTIzNDU2JyxcclxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgcGFnZTogJydcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6I635Y+W5Liq5Lq66LWE5paZXHJcbiAgICAgICAgYXN5bmMgZ2V0dXNlckluZm8oc2Vzc19rZXkpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aXAubG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS51c2VySW5mbyh7bWV0aG9kOidQT1NUJywgcXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzX2tleTpzZXNzX2tleVxyXG4gICAgICAgICAgICAgICAgICAgIH19KVxyXG4gICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuZXJyb3JfY29kZSA9PSAnMCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQudXNlckRhdGEgPSByZXMuZGF0YS5iaXpvYmouZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbCA9IHJlcy5kYXRhLmJpem9iai5kYXRhLm1vYmlsZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGUgPSB0aGlzLnVzZXJEYXRhLmJpcnRoZGF5ID8gdGhpcy51c2VyRGF0YS5iaXJ0aGRheTonJztcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLmxvYWRlZCgpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aXAuZXJyb3IocmVzLmRhdGEubXNnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDnn63kv6Hpqozor4HnoIFcclxuICAgICAgICBhc3luYyBnZXRDb2RlKCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMud2FpdCA+IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG15cmVnID0gL15bMV1bMyw0LDUsNyw4XVswLTldezl9JC87IC8v5omL5py65Y+35q2j5YiZXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRlbCA9PSBudWxsIHx8IHRoaXMudGVsID09IFwiXCJ8fCFteXJlZy50ZXN0KHRoaXMudGVsKSkge1xyXG4gICAgICAgICAgICAgICAgdGlwLmVycm9yKCfmiYvmnLrlj7fmoLzlvI/mnInor68nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5zZW5kUHJvZmlsZVNtcyh7bWV0aG9kOidQT1NUJyxxdWVyeTp7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc19rZXk6dGhhdC5zZXNzX2tleSxcclxuICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IHRoYXQudGVsXHJcbiAgICAgICAgICAgICAgICB9fSlcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEuZXJyb3JfY29kZSA9PSAnMCcpe1xyXG4gICAgICAgICAgICAgICAgdGlwLnN1Y2Nlc3MoJ+mqjOivgeeggeWPkemAgeaIkOWKn++8jOivt+azqOaEj+afpeaUticpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YWl0ID0gNjA7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvd25UaW1lKFxyXG4gICAgICAgICAgICAgICAgdGhpcy53YWl0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lclxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aXAuZXJyb3IoJ+mqjOivgeeggeWPkemAgeWksei0pScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIGRvd25UaW1lKHdhaXQsIHRpbWVyKSB7XHJcbiAgICAgICAgICAgICAgICAvL+mqjOivgeeggeWAkuiuoeaXtlxyXG4gICAgICAgICAgICAgICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGlmICh3YWl0ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5odG1sID0gJ+iOt+WPlumqjOivgeeggSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB3YWl0ID0gNjA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmh0bWwgPSBcIumHjeaWsOWPkemAgVwiK1wiKFwiICsgd2FpdCArIFwiKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2FpdC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZG93blRpbWUod2FpdCwgdGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgLy8g5pu05paw5Liq5Lq66LWE5paZXHJcbiAgICAgICAgYXN5bmMgcG9zdHVzZXJJbmZvKGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aXAubG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS51cGRhdGVVc2VySW5mbyh7bWV0aG9kOidQT1NUJyxxdWVyeTpkYXRhfSlcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gJzAnKXtcclxuICAgICAgICAgICAgICAgICAgICB0aXAuc3VjY2Vzcygn5L+u5pS55oiQ5YqfJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLmVycm9yKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZChvKXtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgX3RoaXMucGFnZSA9IG8ucGFnZTtcclxuICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdzZXNzX2tleScsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmdldHVzZXJJbmZvKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXNzX2tleSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb25VbmxvYWQoKXtcclxuICAgICAgICAgICAgaWYodGhpcy5wYWdlID09ICdhcHBseScmJnRoaXMuaXNPcGVyYXRlKXtcclxuICAgICAgICAgICAgICAgIG9uZmlyZS5maXJlKCdhcHBseScpXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMucGFnZSAhPSAnYXBwbHknKXtcclxuICAgICAgICAgICAgICAgIG9uZmlyZS5maXJlKCdsb2FkVXNlckluZm8nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIGZvcm1TdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmKCFlLmRldGFpbC52YWx1ZS5zbXNfY29kZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLmVycm9yKCfor7fovpPlhaXpqozor4HnoIEnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQganNvbiA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAganNvblsnaWQnXSA9IHRoaXMudXNlckRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICBqc29uWydzZXNzX2tleSddID0gdGhpcy5zZXNzX2tleTtcclxuICAgICAgICAgICAgICAgIGpzb25bJ2JpcnRoZGF5J10gPSB0aGlzLmRhdGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzT3BlcmF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3R1c2VySW5mbyhqc29uKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiaW5kRGF0ZUNoYW5nZTogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0VGVsKGUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZWwgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiJdfQ==