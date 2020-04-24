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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Code = function (_wepy$page) {
    _inherits(Code, _wepy$page);

    function Code() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Code);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Code.__proto__ || Object.getPrototypeOf(Code)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '我的推广二维码'
        }, _this.data = {
            pic: ''
        }, _this.methods = {
            imgLoad: function imgLoad() {
                _tip2.default.loaded();
            },
            imgError: function imgError() {
                _tip2.default.alert('请求二维码失败，请点击空白处重新加载');
            },
            loadImg: function loadImg() {
                var that = this;
                wx.getStorage({
                    key: 'sess_key',
                    success: function success(res) {
                        that.shareQrPic(res.data);
                    }
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Code, [{
        key: 'shareQrPic',
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
                                return _api2.default.shareQrPic({ method: 'POST', query: {
                                        sess_key: sess_key
                                    } });

                            case 4:
                                res = _context.sent;

                                if (res.data.error_code == 0) {
                                    that.pic = res.data.bizobj.data.pic_url;
                                    that.$apply();
                                    // tip.loaded();
                                }

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function shareQrPic(_x) {
                return _ref2.apply(this, arguments);
            }

            return shareQrPic;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var that = this;
            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                    that.shareQrPic(res.data);
                }
            });
        }
    }]);

    return Code;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Code , 'pages/personal/code/code'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUuanMiXSwibmFtZXMiOlsiQ29kZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicGljIiwibWV0aG9kcyIsImltZ0xvYWQiLCJ0aXAiLCJsb2FkZWQiLCJpbWdFcnJvciIsImFsZXJ0IiwibG9hZEltZyIsInRoYXQiLCJ3eCIsImdldFN0b3JhZ2UiLCJrZXkiLCJzdWNjZXNzIiwicmVzIiwic2hhcmVRclBpYyIsInNlc3Nfa2V5IiwibG9hZGluZyIsImFwaSIsIm1ldGhvZCIsInF1ZXJ5IiwiZXJyb3JfY29kZSIsImJpem9iaiIsInBpY191cmwiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7c0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFHVEMsSSxHQUFPO0FBQ0hDLGlCQUFJO0FBREQsUyxRQXlCUEMsTyxHQUFVO0FBQ05DLG1CQURNLHFCQUNHO0FBQ0xDLDhCQUFJQyxNQUFKO0FBQ0gsYUFISztBQUlOQyxvQkFKTSxzQkFJSTtBQUNORiw4QkFBSUcsS0FBSixDQUFVLG9CQUFWO0FBQ0gsYUFOSztBQU9OQyxtQkFQTSxxQkFPRztBQUNMLG9CQUFJQyxPQUFPLElBQVg7QUFDQUMsbUJBQUdDLFVBQUgsQ0FBYztBQUNWQyx5QkFBSyxVQURLO0FBRVZDLDZCQUFTLGlCQUFTQyxHQUFULEVBQWE7QUFDbEJMLDZCQUFLTSxVQUFMLENBQWdCRCxJQUFJZCxJQUFwQjtBQUNIO0FBSlMsaUJBQWQ7QUFNSDtBQWZLLFM7Ozs7OztpR0F0Qk9nQixROzs7Ozs7QUFDVFAsb0MsR0FBTyxJOztBQUNYTCw4Q0FBSWEsT0FBSjs7dUNBQ2dCQyxjQUFJSCxVQUFKLENBQWUsRUFBQ0ksUUFBTyxNQUFSLEVBQWVDLE9BQU07QUFDNUNKLGtEQUFVQTtBQURrQyxxQ0FBckIsRUFBZixDOzs7QUFBWkYsbUM7O0FBR0osb0NBQUdBLElBQUlkLElBQUosQ0FBU3FCLFVBQVQsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDeEJaLHlDQUFLUixHQUFMLEdBQVdhLElBQUlkLElBQUosQ0FBU3NCLE1BQVQsQ0FBZ0J0QixJQUFoQixDQUFxQnVCLE9BQWhDO0FBQ0FkLHlDQUFLZSxNQUFMO0FBQ0E7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUdHO0FBQ0osZ0JBQUlmLE9BQU8sSUFBWDtBQUNBQyxlQUFHQyxVQUFILENBQWM7QUFDVkMscUJBQUssVUFESztBQUVWQyx5QkFBUyxpQkFBU0MsR0FBVCxFQUFhO0FBQ2xCTCx5QkFBS00sVUFBTCxDQUFnQkQsSUFBSWQsSUFBcEI7QUFDSDtBQUpTLGFBQWQ7QUFNSDs7OztFQTVCNkJ5QixlQUFLQyxJOztrQkFBbEI3QixJIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IHRpcCBmcm9tICcuLi8uLi8uLi91dGlscy90aXAnO1xyXG4gICAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpJztcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvZGUgZXh0ZW5kcyB3ZXB5LnBhZ2V7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5o6o5bm/5LqM57u056CBJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBwaWM6JydcclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMgc2hhcmVRclBpYyhzZXNzX2tleSkge1xyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRpcC5sb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuc2hhcmVRclBpYyh7bWV0aG9kOidQT1NUJyxxdWVyeTp7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc19rZXk6IHNlc3Nfa2V5XHJcbiAgICAgICAgICAgICAgICB9fSk7XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnBpYyA9IHJlcy5kYXRhLmJpem9iai5kYXRhLnBpY191cmw7XHJcbiAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGlwLmxvYWRlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbkxvYWQoKXtcclxuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3Nlc3Nfa2V5JyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zaGFyZVFyUGljKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIGltZ0xvYWQoKXtcclxuICAgICAgICAgICAgICAgIHRpcC5sb2FkZWQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW1nRXJyb3IoKXtcclxuICAgICAgICAgICAgICAgIHRpcC5hbGVydCgn6K+35rGC5LqM57u056CB5aSx6LSl77yM6K+354K55Ye756m655m95aSE6YeN5paw5Yqg6L29Jyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvYWRJbWcoKXtcclxuICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3Nlc3Nfa2V5JyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNoYXJlUXJQaWMocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=