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

var Navigator = function (_wepy$page) {
    _inherits(Navigator, _wepy$page);

    function Navigator() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Navigator);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navigator.__proto__ || Object.getPrototypeOf(Navigator)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            list: {
                type: Object,
                default: null
            },
            index: {
                type: Number,
                default: 0
            }
        }, _this.data = {}, _this.methods = {
            navTap: function navTap(index) {
                this.$emit('navTap', index);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Navigator, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Navigator;
}(_wepy2.default.page);

exports.default = Navigator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRvci5qcyJdLCJuYW1lcyI6WyJOYXZpZ2F0b3IiLCJwcm9wcyIsImxpc3QiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsImluZGV4IiwiTnVtYmVyIiwiZGF0YSIsIm1ldGhvZHMiLCJuYXZUYXAiLCIkZW1pdCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7OztnTUFDakJDLEssR0FBUTtBQUNKQyxrQkFBSztBQUNEQyxzQkFBS0MsTUFESjtBQUVEQyx5QkFBUTtBQUZQLGFBREQ7QUFLSkMsbUJBQU07QUFDRkgsc0JBQUtJLE1BREg7QUFFRkYseUJBQVE7QUFGTjtBQUxGLFMsUUFVUkcsSSxHQUFPLEUsUUFNUEMsTyxHQUFVO0FBQ05DLGtCQURNLGtCQUNDSixLQURELEVBQ087QUFDVCxxQkFBS0ssS0FBTCxDQUFXLFFBQVgsRUFBb0JMLEtBQXBCO0FBQ0g7QUFISyxTOzs7OztpQ0FKRCxDQUVSOzs7O0VBZmtDTSxlQUFLQyxJOztrQkFBdkJiLFMiLCJmaWxlIjoibmF2aWdhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRvciBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgcHJvcHMgPSB7XHJcbiAgICAgICAgICAgIGxpc3Q6e1xyXG4gICAgICAgICAgICAgICAgdHlwZTpPYmplY3QsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Om51bGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5kZXg6e1xyXG4gICAgICAgICAgICAgICAgdHlwZTpOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OjBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge31cclxuXHJcbiAgICAgICAgb25Mb2FkKCkge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIG5hdlRhcChpbmRleCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCduYXZUYXAnLGluZGV4KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuIl19