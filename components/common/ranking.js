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

var Ranking = function (_wepy$page) {
    _inherits(Ranking, _wepy$page);

    function Ranking() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Ranking);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Ranking.__proto__ || Object.getPrototypeOf(Ranking)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            list: {
                type: Object,
                default: null
            },
            index: Number
        }, _this.data = {}, _this.methods = {
            bindTap: function bindTap(list) {
                wx.navigateTo({
                    url: list.url
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Ranking, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Ranking;
}(_wepy2.default.page);

exports.default = Ranking;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmtpbmcuanMiXSwibmFtZXMiOlsiUmFua2luZyIsInByb3BzIiwibGlzdCIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwiaW5kZXgiLCJOdW1iZXIiLCJkYXRhIiwibWV0aG9kcyIsImJpbmRUYXAiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7OzRMQUNqQkMsSyxHQUFRO0FBQ0pDLGtCQUFNO0FBQ0ZDLHNCQUFNQyxNQURKO0FBRUZDLHlCQUFTO0FBRlAsYUFERjtBQUtKQyxtQkFBTUM7QUFMRixTLFFBT1JDLEksR0FBTyxFLFFBTVBDLE8sR0FBVTtBQUNOQyxtQkFETSxtQkFDRVIsSUFERixFQUNPO0FBQ1RTLG1CQUFHQyxVQUFILENBQWM7QUFDVkMseUJBQUtYLEtBQUtXO0FBREEsaUJBQWQ7QUFHSDtBQUxLLFM7Ozs7O2lDQUhGLENBRVA7Ozs7RUFiZ0NDLGVBQUtDLEk7O2tCQUFyQmYsTyIsImZpbGUiOiJyYW5raW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCB0aXAgZnJvbSAnLi4vLi4vdXRpbHMvdGlwJztcclxuICAgIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vYXBpL2FwaSc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5raW5nIGV4dGVuZHMgd2VweS5wYWdle1xyXG4gICAgICAgIHByb3BzID0ge1xyXG4gICAgICAgICAgICBsaXN0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluZGV4Ok51bWJlclxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgb25Mb2FkKCl7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBiaW5kVGFwKGxpc3Qpe1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBsaXN0LnVybFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiJdfQ==