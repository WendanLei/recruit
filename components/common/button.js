'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_wepy$page) {
    _inherits(Button, _wepy$page);

    function Button() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Button);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            info: {
                type: Object,
                default: null
            },
            index: {
                type: Number,
                default: 0
            },
            select: {
                type: Object,
                default: null
            },
            name: 'area'
        }, _this.data = {}, _this.methods = {
            btnTap: function btnTap(v) {
                this.$emit('btnTap', v);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Button, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Button;
}(_wepy2.default.page);

exports.default = Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJwcm9wcyIsImluZm8iLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsImluZGV4IiwiTnVtYmVyIiwic2VsZWN0IiwibmFtZSIsImRhdGEiLCJtZXRob2RzIiwiYnRuVGFwIiwidiIsIiRlbWl0Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7OzBMQUNqQkMsSyxHQUFRO0FBQ0pDLGtCQUFLO0FBQ0RDLHNCQUFLQyxNQURKO0FBRURDLHlCQUFRO0FBRlAsYUFERDtBQUtKQyxtQkFBTTtBQUNGSCxzQkFBS0ksTUFESDtBQUVGRix5QkFBUTtBQUZOLGFBTEY7QUFTSkcsb0JBQU87QUFDSEwsc0JBQUtDLE1BREY7QUFFSEMseUJBQVE7QUFGTCxhQVRIO0FBYUpJLGtCQUFLO0FBYkQsUyxRQWVSQyxJLEdBQU8sRSxRQU1QQyxPLEdBQVU7QUFDTkMsa0JBRE0sa0JBQ0NDLENBREQsRUFDRztBQUNMLHFCQUFLQyxLQUFMLENBQVcsUUFBWCxFQUFvQkQsQ0FBcEI7QUFDSDtBQUhLLFM7Ozs7O2lDQUpELENBRVI7Ozs7RUFwQitCRSxlQUFLQyxJOztrQkFBcEJoQixNIiwiZmlsZSI6ImJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgIHByb3BzID0ge1xyXG4gICAgICAgICAgICBpbmZvOntcclxuICAgICAgICAgICAgICAgIHR5cGU6T2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpudWxsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluZGV4OntcclxuICAgICAgICAgICAgICAgIHR5cGU6TnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDowXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDp7XHJcbiAgICAgICAgICAgICAgICB0eXBlOk9iamVjdCxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBuYW1lOidhcmVhJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge31cclxuXHJcbiAgICAgICAgb25Mb2FkKCkge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIGJ0blRhcCh2KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2J0blRhcCcsdilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiJdfQ==