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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Circle = function (_wepy$page) {
        _inherits(Circle, _wepy$page);

        function Circle() {
                var _ref;

                var _temp, _this, _ret;

                _classCallCheck(this, Circle);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                }

                return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Circle.__proto__ || Object.getPrototypeOf(Circle)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
                        navigationBarTitleText: '圈子',
                        navigationBarBackgroundColor: '#fff',
                        navigationBarTextStyle: 'black'
                }, _this.data = {}, _this.computed = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(Circle, [{
                key: 'onLoad',
                value: function onLoad() {}
        }]);

        return Circle;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Circle , 'pages/index/circle'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmNsZS5qcyJdLCJuYW1lcyI6WyJDaXJjbGUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJkYXRhIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztrTUFDakJDLE0sR0FBUztBQUNMQyxnREFBd0IsSUFEbkI7QUFFTEMsc0RBQThCLE1BRnpCO0FBR0xDLGdEQUF3QjtBQUhuQixpQixRQUtUQyxJLEdBQU8sRSxRQUVQQyxRLEdBQVcsRSxRQU1YQyxPLEdBQVUsRTs7Ozs7eUNBSkQsQ0FFUjs7OztFQVorQkMsZUFBS0MsSTs7a0JBQXBCVCxNIiwiZmlsZSI6ImNpcmNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uL2FwaS9hcGknO1xyXG4gICAgaW1wb3J0IHRpcCBmcm9tICcuLi8uLi91dGlscy90aXAnO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflnIjlrZAnLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHt9XHJcblxyXG4gICAgICAgIGNvbXB1dGVkID0ge31cclxuXHJcbiAgICAgICAgb25Mb2FkKCkge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1ldGhvZHMgPSB7fVxyXG4gICAgfVxyXG4iXX0=