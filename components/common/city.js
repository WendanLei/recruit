'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var City = function (_wepy$page) {
    _inherits(City, _wepy$page);

    function City() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, City);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = City.__proto__ || Object.getPrototypeOf(City)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: ''
        }, _this.props = {
            item: {
                type: Object,
                default: null
            },
            select: {
                type: Object,
                default: null
            },
            type: {
                type: String,
                default: null
            }
        }, _this.data = {}, _this.methods = {
            selectTap: function selectTap(type, item) {
                this.$emit('selectChange', type, item);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return City;
}(_wepy2.default.page);

exports.default = City;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdHkuanMiXSwibmFtZXMiOlsiQ2l0eSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJwcm9wcyIsIml0ZW0iLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsInNlbGVjdCIsIlN0cmluZyIsImRhdGEiLCJtZXRob2RzIiwic2VsZWN0VGFwIiwiJGVtaXQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBR1RDLEssR0FBUTtBQUNKQyxrQkFBSztBQUNEQyxzQkFBS0MsTUFESjtBQUVEQyx5QkFBUTtBQUZQLGFBREQ7QUFLSkMsb0JBQU87QUFDSEgsc0JBQUtDLE1BREY7QUFFSEMseUJBQVE7QUFGTCxhQUxIO0FBU0pGLGtCQUFLO0FBQ0RBLHNCQUFNSSxNQURMO0FBRURGLHlCQUFTO0FBRlI7QUFURCxTLFFBY1JHLEksR0FBTyxFLFFBQ1BDLE8sR0FBVTtBQUNOQyxxQkFETSxxQkFDSVAsSUFESixFQUNTRCxJQURULEVBQ2M7QUFDaEIscUJBQUtTLEtBQUwsQ0FBVyxjQUFYLEVBQTBCUixJQUExQixFQUErQkQsSUFBL0I7QUFDSDtBQUhLLFM7Ozs7RUFuQm9CVSxlQUFLQyxJOztrQkFBbEJmLEkiLCJmaWxlIjoiY2l0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2l0eSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wcyA9IHtcclxuICAgICAgICAgICAgaXRlbTp7XHJcbiAgICAgICAgICAgICAgICB0eXBlOk9iamVjdCxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWxlY3Q6e1xyXG4gICAgICAgICAgICAgICAgdHlwZTpPYmplY3QsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Om51bGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHlwZTp7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHt9XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgc2VsZWN0VGFwKHR5cGUsaXRlbSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzZWxlY3RDaGFuZ2UnLHR5cGUsaXRlbSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19