'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _api = require('./../../api/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_wepy$page) {
    _inherits(Nav, _wepy$page);

    function Nav() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Nav);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Nav.__proto__ || Object.getPrototypeOf(Nav)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            list: {
                type: Object,
                default: null
            }
        }, _this.data = {}, _this.methods = {
            bindTap: function bindTap(list) {
                if (list.name == '热门招聘') {
                    wx.switchTab({
                        url: list.url
                    });
                } else if (list.name == '圈子') {
                    console.log(list);
                    // wx.navigateToMiniProgram({
                    //     appId: '',
                    //     path: list.url,
                    //     extraData: {
                    //         foo: 'bar'
                    //     },
                    //     envVersion: 'develop',
                    //     success(res) {
                    //         // 打开成功
                    //     }
                    // })
                    wx.navigateTo({
                        url: list.url
                    });
                } else {
                    wx.navigateTo({
                        url: list.url
                    });
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Nav, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Nav;
}(_wepy2.default.page);

exports.default = Nav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5qcyJdLCJuYW1lcyI6WyJOYXYiLCJwcm9wcyIsImxpc3QiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsImRhdGEiLCJtZXRob2RzIiwiYmluZFRhcCIsIm5hbWUiLCJ3eCIsInN3aXRjaFRhYiIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxHOzs7Ozs7Ozs7Ozs7OztvTEFDakJDLEssR0FBUTtBQUNKQyxrQkFBTTtBQUNGQyxzQkFBTUMsTUFESjtBQUVGQyx5QkFBUztBQUZQO0FBREYsUyxRQU1SQyxJLEdBQU8sRSxRQU1QQyxPLEdBQVU7QUFDTkMsbUJBRE0sbUJBQ0VOLElBREYsRUFDTztBQUNULG9CQUFHQSxLQUFLTyxJQUFMLElBQWEsTUFBaEIsRUFBdUI7QUFDbkJDLHVCQUFHQyxTQUFILENBQWE7QUFDVEMsNkJBQUtWLEtBQUtVO0FBREQscUJBQWI7QUFHSCxpQkFKRCxNQUlNLElBQUdWLEtBQUtPLElBQUwsSUFBYSxJQUFoQixFQUFzQjtBQUN4QkksNEJBQVFDLEdBQVIsQ0FBWVosSUFBWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQVEsdUJBQUdLLFVBQUgsQ0FBYztBQUNWSCw2QkFBS1YsS0FBS1U7QUFEQSxxQkFBZDtBQUdILGlCQWhCSyxNQWdCRDtBQUNERix1QkFBR0ssVUFBSCxDQUFjO0FBQ1ZILDZCQUFLVixLQUFLVTtBQURBLHFCQUFkO0FBR0g7QUFDSjtBQTNCSyxTOzs7OztpQ0FIRixDQUVQOzs7O0VBWjRCSSxlQUFLQyxJOztrQkFBakJqQixHIiwiZmlsZSI6Im5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQgdGlwIGZyb20gJy4uLy4uL3V0aWxzL3RpcCc7XHJcbiAgICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uL2FwaS9hcGknO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2IGV4dGVuZHMgd2VweS5wYWdle1xyXG4gICAgICAgIHByb3BzID0ge1xyXG4gICAgICAgICAgICBsaXN0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBvbkxvYWQoKXtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIGJpbmRUYXAobGlzdCl7XHJcbiAgICAgICAgICAgICAgICBpZihsaXN0Lm5hbWUgPT0gJ+eDremXqOaLm+iBmCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogbGlzdC51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGxpc3QubmFtZSA9PSAn5ZyI5a2QJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd3gubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYXBwSWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBwYXRoOiBsaXN0LnVybCxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZXh0cmFEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBmb286ICdiYXInXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGVudlZlcnNpb246ICdkZXZlbG9wJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIOaJk+W8gOaIkOWKn1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBsaXN0LnVybFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBsaXN0LnVybFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4iXX0=