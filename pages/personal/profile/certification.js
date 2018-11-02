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

var certification = function (_wepy$page) {
    _inherits(certification, _wepy$page);

    function certification() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, certification);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = certification.__proto__ || Object.getPrototypeOf(certification)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '实名认证'
        }, _this2.data = {
            sess_key: '',
            userData: null,
            road: null
            // 更新个人资料
        }, _this2.methods = {
            formSubmit: function formSubmit(e) {
                if (!this.userData) {
                    _tip2.default.error('请上传身份证');
                    return;
                }
                var json = this.userData;
                json.sess_key = this.sess_key;
                this.postresumeFill(json);
            },
            goUrl: function goUrl() {
                wx.navigateTo({
                    url: '/pages/personal/salary/salaryDetail'
                });
            },
            bindChooiceProduct: function bindChooiceProduct() {
                var that = this;
                wx.chooseImage({
                    count: 1, //最多可以选择的图片总数  
                    sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有  
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
                    success: function success(res) {
                        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
                        var tempFilePaths = res.tempFilePaths;
                        //启动上传等待中...  
                        wx.showToast({
                            title: '正在上传...',
                            icon: 'loading',
                            mask: true,
                            duration: 10000
                        });
                        var uploadImgCount = 0;
                        for (var i = 0, h = tempFilePaths.length; i < h; i++) {
                            wx.uploadFile({
                                url: 'https://recruit.czucw.com/api/User/pic2UserInfo.html',
                                filePath: tempFilePaths[i], //临时地址路径
                                name: 'pic_info',
                                formData: {
                                    'sess_key': that.sess_key
                                },
                                header: {
                                    "Content-Type": "multipart/form-data"
                                },
                                success: function success(res) {
                                    uploadImgCount++;
                                    var data = JSON.parse(res.data);
                                    if (data.error_code == 0) {
                                        data.bizobj.data.name = decodeURI(data.bizobj.data.name);
                                        data.bizobj.data.user_address = decodeURI(data.bizobj.data.user_address);
                                        data.bizobj.data.nationality = decodeURI(data.bizobj.data.nationality);
                                        that.userData = data.bizobj.data;
                                    } else {
                                        _tip2.default.error(data.msg);
                                    }
                                    that.$apply();

                                    //如果是最后一张,则隐藏等待中  
                                    if (uploadImgCount == tempFilePaths.length) {
                                        wx.hideToast();
                                    }
                                },
                                fail: function fail(res) {
                                    wx.hideToast();
                                    wx.showModal({
                                        title: '错误提示',
                                        content: '上传图片失败',
                                        showCancel: false,
                                        success: function success(res) {}
                                    });
                                }
                            });
                        }
                    }
                });
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(certification, [{
        key: 'postresumeFill',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context.next = 4;
                                return _api2.default.resumeFill({ method: 'POST', query: data });

                            case 4:
                                res = _context.sent;

                                if (res.data.error_code == '0') {
                                    _tip2.default.error('认证成功');
                                    wx.navigateBack({
                                        delta: 1
                                    });
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

            function postresumeFill(_x) {
                return _ref2.apply(this, arguments);
            }

            return postresumeFill;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(o) {
            var _this = this;
            _this.road = o.road;
            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                    _this.sess_key = res.data;
                }
            });
        }
    }, {
        key: 'onUnload',
        value: function onUnload() {
            if (this.road == 'search') {
                if (this.userData) {
                    _onfire2.default.fire('toSearch');
                }
            } else {
                _onfire2.default.fire('loadUserInfo');
            }
        }
    }]);

    return certification;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(certification , 'pages/personal/profile/certification'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlcnRpZmljYXRpb24uanMiXSwibmFtZXMiOlsiY2VydGlmaWNhdGlvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2Vzc19rZXkiLCJ1c2VyRGF0YSIsInJvYWQiLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsImUiLCJ0aXAiLCJlcnJvciIsImpzb24iLCJwb3N0cmVzdW1lRmlsbCIsImdvVXJsIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiYmluZENob29pY2VQcm9kdWN0IiwidGhhdCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwidGVtcEZpbGVQYXRocyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsIm1hc2siLCJkdXJhdGlvbiIsInVwbG9hZEltZ0NvdW50IiwiaSIsImgiLCJsZW5ndGgiLCJ1cGxvYWRGaWxlIiwiZmlsZVBhdGgiLCJuYW1lIiwiZm9ybURhdGEiLCJoZWFkZXIiLCJKU09OIiwicGFyc2UiLCJlcnJvcl9jb2RlIiwiYml6b2JqIiwiZGVjb2RlVVJJIiwidXNlcl9hZGRyZXNzIiwibmF0aW9uYWxpdHkiLCJtc2ciLCIkYXBwbHkiLCJoaWRlVG9hc3QiLCJmYWlsIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJsb2FkaW5nIiwiYXBpIiwicmVzdW1lRmlsbCIsIm1ldGhvZCIsInF1ZXJ5IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJvIiwiX3RoaXMiLCJnZXRTdG9yYWdlIiwia2V5Iiwib25maXJlIiwiZmlyZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLGE7Ozs7Ozs7Ozs7Ozs7OzJNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFNBR1RDLEksR0FBTztBQUNIQyxzQkFBVSxFQURQ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Uyw2QkFBZDtBQXNDSDtBQUNKO0FBdkRVLGlCQUFmO0FBeURIO0FBMUVLLFM7Ozs7OztpR0FqQ1d0QixJOzs7Ozs7QUFDYmdCLG9DLEdBQU8sSTs7QUFDWFQsOENBQUk2QyxPQUFKOzt1Q0FDb0JDLGNBQUlDLFVBQUosQ0FBZSxFQUFDQyxRQUFPLE1BQVIsRUFBZUMsT0FBTXhELElBQXJCLEVBQWYsQzs7O0FBQVpzQixtQzs7QUFDSixvQ0FBR0EsSUFBSXRCLElBQUosQ0FBU3dDLFVBQVQsSUFBdUIsR0FBMUIsRUFBOEI7QUFDMUJqQyxrREFBSUMsS0FBSixDQUFVLE1BQVY7QUFDQUksdUNBQUc2QyxZQUFILENBQWdCO0FBQ1pDLCtDQUFPO0FBREsscUNBQWhCO0FBR0gsaUNBTEQsTUFLSztBQUNEbkQsa0RBQUlDLEtBQUosQ0FBVWMsSUFBSXRCLElBQUosQ0FBUzZDLEdBQW5CO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFHRmMsQyxFQUFFO0FBQ0wsZ0JBQUlDLFFBQVEsSUFBWjtBQUNBQSxrQkFBTXpELElBQU4sR0FBYXdELEVBQUV4RCxJQUFmO0FBQ0FTLGVBQUdpRCxVQUFILENBQWM7QUFDVkMscUJBQUssVUFESztBQUVWekMseUJBQVMsaUJBQVNDLEdBQVQsRUFBYTtBQUNsQnNDLDBCQUFNM0QsUUFBTixHQUFpQnFCLElBQUl0QixJQUFyQjtBQUNIO0FBSlMsYUFBZDtBQU1IOzs7bUNBQ1M7QUFDTixnQkFBRyxLQUFLRyxJQUFMLElBQWEsUUFBaEIsRUFBeUI7QUFDckIsb0JBQUcsS0FBS0QsUUFBUixFQUFpQjtBQUNiNkQscUNBQU9DLElBQVAsQ0FBWSxVQUFaO0FBQ0g7QUFDSixhQUpELE1BSUs7QUFDREQsaUNBQU9DLElBQVAsQ0FBWSxjQUFaO0FBQ0g7QUFDSjs7OztFQTFDc0NDLGVBQUtDLEk7O2tCQUEzQnJFLGEiLCJmaWxlIjoiY2VydGlmaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQgdGlwIGZyb20gJy4uLy4uLy4uL3V0aWxzL3RpcCc7XHJcbiAgICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xyXG4gICAgaW1wb3J0IG9uZmlyZSBmcm9tICdvbmZpcmUuanMnO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2VydGlmaWNhdGlvbiBleHRlbmRzIHdlcHkucGFnZXtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflrp7lkI3orqTor4EnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHNlc3Nfa2V5OiAnJyxcclxuICAgICAgICAgICAgdXNlckRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgIHJvYWQ6IG51bGwsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOabtOaWsOS4quS6uui1hOaWmVxyXG4gICAgICAgIGFzeW5jIHBvc3RyZXN1bWVGaWxsKGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aXAubG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5yZXN1bWVGaWxsKHttZXRob2Q6J1BPU1QnLHF1ZXJ5OmRhdGF9KVxyXG4gICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuZXJyb3JfY29kZSA9PSAnMCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcign6K6k6K+B5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLmVycm9yKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbkxvYWQobyl7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIF90aGlzLnJvYWQgPSBvLnJvYWQ7XHJcbiAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiAnc2Vzc19rZXknLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXNzX2tleSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb25VbmxvYWQoKXtcclxuICAgICAgICAgICAgaWYodGhpcy5yb2FkID09ICdzZWFyY2gnKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudXNlckRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgIG9uZmlyZS5maXJlKCd0b1NlYXJjaCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgb25maXJlLmZpcmUoJ2xvYWRVc2VySW5mbycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgZm9ybVN1Ym1pdDogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMudXNlckRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcign6K+35LiK5Lyg6Lqr5Lu96K+BJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGpzb24gPSB0aGlzLnVzZXJEYXRhO1xyXG4gICAgICAgICAgICAgICAganNvbi5zZXNzX2tleSA9IHRoaXMuc2Vzc19rZXk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RyZXN1bWVGaWxsKGpzb24pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnb1VybCgpe1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3BlcnNvbmFsL3NhbGFyeS9zYWxhcnlEZXRhaWwnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiaW5kQ2hvb2ljZVByb2R1Y3QoKXsgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgd3guY2hvb3NlSW1hZ2UoeyAgXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsICAvL+acgOWkmuWPr+S7pemAieaLqeeahOWbvueJh+aAu+aVsCAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZVR5cGU6IFsnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIkgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciSAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykgeyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi/lOWbnumAieWumueFp+eJh+eahOacrOWcsOaWh+S7tui3r+W+hOWIl+ihqO+8jHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJhyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5ZCv5Yqo5LiK5Lyg562J5b6F5LitLi4uICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmraPlnKjkuIrkvKAuLi4nLCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbG9hZGluZycsICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwMCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVwbG9hZEltZ0NvdW50ID0gMDsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaCA9IHRlbXBGaWxlUGF0aHMubGVuZ3RoOyBpIDwgaDsgaSsrKSB7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnVwbG9hZEZpbGUoeyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9yZWNydWl0LmN6dWN3LmNvbS9hcGkvVXNlci9waWMyVXNlckluZm8uaHRtbCcsICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlUGF0aDogdGVtcEZpbGVQYXRoc1tpXSwvL+S4tOaXtuWcsOWdgOi3r+W+hFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwaWNfaW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGE6IHsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2Vzc19rZXknOiB0aGF0LnNlc3Nfa2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykgeyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwbG9hZEltZ0NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEuZXJyb3JfY29kZSA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYml6b2JqLmRhdGEubmFtZSA9IGRlY29kZVVSSShkYXRhLmJpem9iai5kYXRhLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5iaXpvYmouZGF0YS51c2VyX2FkZHJlc3MgPSBkZWNvZGVVUkkoZGF0YS5iaXpvYmouZGF0YS51c2VyX2FkZHJlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5iaXpvYmouZGF0YS5uYXRpb25hbGl0eSA9IGRlY29kZVVSSShkYXRhLmJpem9iai5kYXRhLm5hdGlvbmFsaXR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudXNlckRhdGEgPSBkYXRhLmJpem9iai5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcihkYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c5piv5pyA5ZCO5LiA5bygLOWImemakOiXj+etieW+heS4rSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cGxvYWRJbWdDb3VudCA9PSB0ZW1wRmlsZVBhdGhzLmxlbmd0aCkgeyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykgeyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfplJnor6/mj5DnpLonLCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfkuIrkvKDlm77niYflpLHotKUnLCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHsgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgIH0pOyAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==