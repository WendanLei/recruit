'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var regeneratorRuntime = require('../../npm/regenerator-runtime/runtime.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxParse = require('./../../wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HTMLParser = function (_wepy$component) {
    _inherits(HTMLParser, _wepy$component);

    function HTMLParser() {
        var _ref;

        var _temp, _this, _ret;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _classCallCheck(this, HTMLParser);

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HTMLParser.__proto__ || Object.getPrototypeOf(HTMLParser)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            parserName: {
                type: String,
                default: "htmlParserName"
            },
            parserContent: {
                type: String,
                default: "<p style='font-size: 32rpx; padding: 30rpx 0; text-align: center;'>没有任何内容</p>"
            },
            parserType: {
                type: String,
                default: "html"
            },
            parserPadding: {
                type: Number,
                default: 0
            }
        }, _this.data = {
            htmlParserTpl: {}
        }, _this.events = {
            'htmlParser-broadcast': function htmlParserBroadcast($event) {}
        }, _this.methods = {
            htmlParserNotice: function htmlParserNotice() {
                this.htmlParse();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(HTMLParser, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.htmlParse();

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }, {
        key: 'wxParseImgLoad',
        value: function wxParseImgLoad(image) {
            var imgInfo = image.detail;
        }
    }, {
        key: 'htmlParse',
        value: function htmlParse() {
            /**
             * WxParse.wxParse(bindName , type, data, target,imagePadding)
             * 1.bindName绑定的数据名(必填)
             * 2.type可以为html或者md(必填)
             * 3.data为传入的具体数据(必填)
             * 4.target为Page对象,一般为this(必填)
             * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
             */
            try {
                _wxParse2.default.wxParse(this.parserName, this.parserType, this.parserContent || this.props.parserContent.default, this, this.parserPadding);
                this.htmlParserTpl = this[this.parserName];
            } catch (e) {
                console.warn("kinerHtmlParser:", "没有任何内容需要转换", e);
            }
        }
    }]);

    return HTMLParser;
}(_wepy2.default.component);

exports.default = HTMLParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0bWxQYXJzZXIuanMiXSwibmFtZXMiOlsiSFRNTFBhcnNlciIsInByb3BzIiwicGFyc2VyTmFtZSIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwicGFyc2VyQ29udGVudCIsInBhcnNlclR5cGUiLCJwYXJzZXJQYWRkaW5nIiwiTnVtYmVyIiwiZGF0YSIsImh0bWxQYXJzZXJUcGwiLCJldmVudHMiLCIkZXZlbnQiLCJtZXRob2RzIiwiaHRtbFBhcnNlck5vdGljZSIsImh0bWxQYXJzZSIsImltYWdlIiwiaW1nSW5mbyIsImRldGFpbCIsIld4UGFyc2UiLCJ3eFBhcnNlIiwiZSIsImNvbnNvbGUiLCJ3YXJuIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFU7Ozs7Ozs7Ozs7Ozs7O2tNQUNqQkMsSyxHQUFRO0FBQ0pDLHdCQUFZO0FBQ1JDLHNCQUFLQyxNQURHO0FBRVJDLHlCQUFTO0FBRkQsYUFEUjtBQUtKQywyQkFBYztBQUNWSCxzQkFBTUMsTUFESTtBQUVWQyx5QkFBUztBQUZDLGFBTFY7QUFTSkUsd0JBQVc7QUFDUEosc0JBQUtDLE1BREU7QUFFUEMseUJBQVM7QUFGRixhQVRQO0FBYUpHLDJCQUFjO0FBQ1ZMLHNCQUFNTSxNQURJO0FBRVZKLHlCQUFTO0FBRkM7QUFiVixTLFFBa0JSSyxJLEdBQU87QUFDSEMsMkJBQWU7QUFEWixTLFFBR1BDLE0sR0FBUztBQUNMLG9DQUF3Qiw2QkFBQ0MsTUFBRCxFQUFxQixDQUM1QztBQUZJLFMsUUFJVEMsTyxHQUFVO0FBQ05DLDRCQURNLDhCQUNZO0FBQ2QscUJBQUtDLFNBQUw7QUFDSDtBQUhLLFM7Ozs7Ozs7Ozs7O0FBTU4scUNBQUtBLFNBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FFV0MsSyxFQUFNO0FBQ2pCLGdCQUFJQyxVQUFVRCxNQUFNRSxNQUFwQjtBQUNIOzs7b0NBQ1U7QUFDUDs7Ozs7Ozs7QUFRQSxnQkFBRztBQUNDQyxrQ0FBUUMsT0FBUixDQUFnQixLQUFLbkIsVUFBckIsRUFBa0MsS0FBS0ssVUFBdkMsRUFBbUQsS0FBS0QsYUFBTCxJQUFzQixLQUFLTCxLQUFMLENBQVdLLGFBQVgsQ0FBeUJELE9BQWxHLEVBQTJHLElBQTNHLEVBQWdILEtBQUtHLGFBQXJIO0FBQ0EscUJBQUtHLGFBQUwsR0FBcUIsS0FBSyxLQUFLVCxVQUFWLENBQXJCO0FBQ0gsYUFIRCxDQUdDLE9BQU9vQixDQUFQLEVBQVM7QUFDTkMsd0JBQVFDLElBQVIsQ0FBYSxrQkFBYixFQUFnQyxZQUFoQyxFQUE2Q0YsQ0FBN0M7QUFDSDtBQUNKOzs7O0VBcERtQ0csZUFBS0MsUzs7a0JBQXhCMUIsVSIsImZpbGUiOiJodG1sUGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuXHJcbiAgICBpbXBvcnQgV3hQYXJzZSBmcm9tICcuLi8uLi93eFBhcnNlL3d4UGFyc2UuanMnO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFRNTFBhcnNlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgICAgICBwcm9wcyA9IHtcclxuICAgICAgICAgICAgcGFyc2VyTmFtZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBcImh0bWxQYXJzZXJOYW1lXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFyc2VyQ29udGVudDp7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBcIjxwIHN0eWxlPSdmb250LXNpemU6IDMycnB4OyBwYWRkaW5nOiAzMHJweCAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7Jz7msqHmnInku7vkvZXlhoXlrrk8L3A+XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFyc2VyVHlwZTp7XHJcbiAgICAgICAgICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFwiaHRtbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhcnNlclBhZGRpbmc6e1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBodG1sUGFyc2VyVHBsOiB7fVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZXZlbnRzID0ge1xyXG4gICAgICAgICAgICAnaHRtbFBhcnNlci1icm9hZGNhc3QnOiAoJGV2ZW50LCAuLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBodG1sUGFyc2VyTm90aWNlKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWxQYXJzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhc3luYyBvbkxvYWQoKXtcclxuICAgICAgICAgICAgdGhpcy5odG1sUGFyc2UoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHd4UGFyc2VJbWdMb2FkKGltYWdlKXtcclxuICAgICAgICAgICAgbGV0IGltZ0luZm8gPSBpbWFnZS5kZXRhaWw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBodG1sUGFyc2UoKXtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFd4UGFyc2Uud3hQYXJzZShiaW5kTmFtZSAsIHR5cGUsIGRhdGEsIHRhcmdldCxpbWFnZVBhZGRpbmcpXHJcbiAgICAgICAgICAgICAqIDEuYmluZE5hbWXnu5HlrprnmoTmlbDmja7lkI0o5b+F5aGrKVxyXG4gICAgICAgICAgICAgKiAyLnR5cGXlj6/ku6XkuLpodG1s5oiW6ICFbWQo5b+F5aGrKVxyXG4gICAgICAgICAgICAgKiAzLmRhdGHkuLrkvKDlhaXnmoTlhbfkvZPmlbDmja4o5b+F5aGrKVxyXG4gICAgICAgICAgICAgKiA0LnRhcmdldOS4ulBhZ2Xlr7nosaEs5LiA6Iis5Li6dGhpcyjlv4XloaspXHJcbiAgICAgICAgICAgICAqIDUuaW1hZ2VQYWRkaW5n5Li65b2T5Zu+54mH6Ieq6YCC5bqU5piv5bem5Y+z55qE5Y2V5LiAcGFkZGluZyjpu5jorqTkuLowLOWPr+mAiSlcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIFd4UGFyc2Uud3hQYXJzZSh0aGlzLnBhcnNlck5hbWUgLCB0aGlzLnBhcnNlclR5cGUsIHRoaXMucGFyc2VyQ29udGVudCB8fCB0aGlzLnByb3BzLnBhcnNlckNvbnRlbnQuZGVmYXVsdCwgdGhpcyx0aGlzLnBhcnNlclBhZGRpbmcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5odG1sUGFyc2VyVHBsID0gdGhpc1t0aGlzLnBhcnNlck5hbWVdO1xyXG4gICAgICAgICAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwia2luZXJIdG1sUGFyc2VyOlwiLFwi5rKh5pyJ5Lu75L2V5YaF5a656ZyA6KaB6L2s5o2iXCIsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==