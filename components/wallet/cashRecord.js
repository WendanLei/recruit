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

var CashRecord = function (_wepy$page) {
    _inherits(CashRecord, _wepy$page);

    function CashRecord() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, CashRecord);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CashRecord.__proto__ || Object.getPrototypeOf(CashRecord)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            item: {
                type: Object,
                default: null
            },
            index: Number
        }, _this.data = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CashRecord, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return CashRecord;
}(_wepy2.default.page);

exports.default = CashRecord;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2hSZWNvcmQuanMiXSwibmFtZXMiOlsiQ2FzaFJlY29yZCIsInByb3BzIiwiaXRlbSIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwiaW5kZXgiLCJOdW1iZXIiLCJkYXRhIiwibWV0aG9kcyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7a01BQ2pCQyxLLEdBQVE7QUFDSkMsa0JBQU07QUFDRkMsc0JBQU1DLE1BREo7QUFFRkMseUJBQVM7QUFGUCxhQURGO0FBS0pDLG1CQUFNQztBQUxGLFMsUUFPUkMsSSxHQUFPLEUsUUFNUEMsTyxHQUFVLEU7Ozs7O2lDQUhGLENBRVA7Ozs7RUFibUNDLGVBQUtDLEk7O2tCQUF4QlgsVSIsImZpbGUiOiJjYXNoUmVjb3JkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCB0aXAgZnJvbSAnLi4vLi4vdXRpbHMvdGlwJztcclxuICAgIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vYXBpL2FwaSc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXNoUmVjb3JkIGV4dGVuZHMgd2VweS5wYWdle1xyXG4gICAgICAgIHByb3BzID0ge1xyXG4gICAgICAgICAgICBpdGVtOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluZGV4Ok51bWJlclxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgb25Mb2FkKCl7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4iXX0=