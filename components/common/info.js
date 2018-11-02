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

var Info = function (_wepy$page) {
    _inherits(Info, _wepy$page);

    function Info() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Info);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Info.__proto__ || Object.getPrototypeOf(Info)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            list: {
                type: Object,
                default: null
            },
            isShowCancelCollect: {
                type: Boolean,
                default: false
            },
            page: String
        }, _this.data = {}, _this.methods = {
            tap: function tap(v) {
                this.$emit('infoTap', v);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Info, [{
        key: 'onLoad',
        value: function onLoad() {
            console.log(this.list);
        }
    }]);

    return Info;
}(_wepy2.default.page);

exports.default = Info;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiSW5mbyIsInByb3BzIiwibGlzdCIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwiaXNTaG93Q2FuY2VsQ29sbGVjdCIsIkJvb2xlYW4iLCJwYWdlIiwiU3RyaW5nIiwiZGF0YSIsIm1ldGhvZHMiLCJ0YXAiLCJ2IiwiJGVtaXQiLCJjb25zb2xlIiwibG9nIiwid2VweSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUNqQkMsSyxHQUFRO0FBQ0pDLGtCQUFLO0FBQ0RDLHNCQUFLQyxNQURKO0FBRURDLHlCQUFRO0FBRlAsYUFERDtBQUtKQyxpQ0FBcUI7QUFDakJILHNCQUFLSSxPQURZO0FBRWpCRix5QkFBUTtBQUZTLGFBTGpCO0FBU0pHLGtCQUFLQztBQVRELFMsUUFXUkMsSSxHQUFPLEUsUUFNUEMsTyxHQUFVO0FBQ05DLGVBRE0sZUFDRkMsQ0FERSxFQUNBO0FBQ0YscUJBQUtDLEtBQUwsQ0FBVyxTQUFYLEVBQXFCRCxDQUFyQjtBQUNIO0FBSEssUzs7Ozs7aUNBSEY7QUFDSkUsb0JBQVFDLEdBQVIsQ0FBWSxLQUFLZCxJQUFqQjtBQUNIOzs7O0VBakI2QmUsZUFBS1QsSTs7a0JBQWxCUixJIiwiZmlsZSI6ImluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IHRpcCBmcm9tICcuLi8uLi91dGlscy90aXAnO1xyXG4gICAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9hcGkvYXBpJztcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm8gZXh0ZW5kcyB3ZXB5LnBhZ2V7XHJcbiAgICAgICAgcHJvcHMgPSB7XHJcbiAgICAgICAgICAgIGxpc3Q6e1xyXG4gICAgICAgICAgICAgICAgdHlwZTpPYmplY3QsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Om51bGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXNTaG93Q2FuY2VsQ29sbGVjdDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTpCb29sZWFuLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYWdlOlN0cmluZyxcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZCgpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICB0YXAodil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbmZvVGFwJyx2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiJdfQ==