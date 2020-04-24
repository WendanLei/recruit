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

var Need = function (_wepy$page) {
    _inherits(Need, _wepy$page);

    function Need() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, Need);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Need.__proto__ || Object.getPrototypeOf(Need)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '培训需求'
        }, _this2.data = {
            sess_key: ''
        }, _this2.methods = {
            formSubmit: function formSubmit(e) {
                if (!e.detail.value.content) {
                    _tip2.default.error('请输入培训需求');
                    return;
                }
                var json = e.detail.value;
                json['sess_key'] = this.sess_key;
                this.postaddTrainWill(json);
            },
            goUrl: function goUrl(url) {
                wx.navigateTo({
                    url: '/pages/' + url
                });
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(Need, [{
        key: 'postaddTrainWill',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;
                                _context.next = 3;
                                return _api2.default.addTrainWill({ method: 'POST', query: data });

                            case 3:
                                res = _context.sent;

                                if (res.data.error_code == '0') {
                                    _tip2.default.success('提交成功');
                                } else {
                                    _tip2.default.error(res.data.msg);
                                }

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function postaddTrainWill(_x) {
                return _ref2.apply(this, arguments);
            }

            return postaddTrainWill;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var _this = this;
            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                    _this.sess_key = res.data;
                }
            });
        }
    }]);

    return Need;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Need , 'pages/personal/need/need'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5lZWQuanMiXSwibmFtZXMiOlsiTmVlZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2Vzc19rZXkiLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNvbnRlbnQiLCJ0aXAiLCJlcnJvciIsImpzb24iLCJwb3N0YWRkVHJhaW5XaWxsIiwiZ29VcmwiLCJ1cmwiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ0aGF0IiwiYXBpIiwiYWRkVHJhaW5XaWxsIiwibWV0aG9kIiwicXVlcnkiLCJyZXMiLCJlcnJvcl9jb2RlIiwic3VjY2VzcyIsIm1zZyIsIl90aGlzIiwiZ2V0U3RvcmFnZSIsImtleSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7Ozt5TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxTQUdUQyxJLEdBQU87QUFDSEMsc0JBQVM7QUFETixTLFNBcUJQQyxPLEdBQVU7QUFDTkMsd0JBQVksb0JBQVNDLENBQVQsRUFBWTtBQUNwQixvQkFBRyxDQUFDQSxFQUFFQyxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsT0FBbkIsRUFBMkI7QUFDdkJDLGtDQUFJQyxLQUFKLENBQVUsU0FBVjtBQUNBO0FBQ0g7QUFDRCxvQkFBSUMsT0FBT04sRUFBRUMsTUFBRixDQUFTQyxLQUFwQjtBQUNBSSxxQkFBSyxVQUFMLElBQW1CLEtBQUtULFFBQXhCO0FBQ0EscUJBQUtVLGdCQUFMLENBQXNCRCxJQUF0QjtBQUNILGFBVEs7QUFVTkUsaUJBVk0saUJBVUFDLEdBVkEsRUFVSTtBQUNOQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZGLHlCQUFLLFlBQVVBO0FBREwsaUJBQWQ7QUFHSDtBQWRLLFM7Ozs7OztpR0FsQmFiLEk7Ozs7OztBQUNmZ0Isb0MsR0FBTyxJOzt1Q0FDS0MsY0FBSUMsWUFBSixDQUFpQixFQUFDQyxRQUFPLE1BQVIsRUFBZUMsT0FBTXBCLElBQXJCLEVBQWpCLEM7OztBQUFacUIsbUM7O0FBQ0osb0NBQUdBLElBQUlyQixJQUFKLENBQVNzQixVQUFULElBQXVCLEdBQTFCLEVBQThCO0FBQzFCZCxrREFBSWUsT0FBSixDQUFZLE1BQVo7QUFDSCxpQ0FGRCxNQUVLO0FBQ0RmLGtEQUFJQyxLQUFKLENBQVVZLElBQUlyQixJQUFKLENBQVN3QixHQUFuQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBRUc7QUFDSixnQkFBSUMsUUFBUSxJQUFaO0FBQ0FYLGVBQUdZLFVBQUgsQ0FBYztBQUNWQyxxQkFBSyxVQURLO0FBRVZKLHlCQUFTLGlCQUFTRixHQUFULEVBQWE7QUFDbEJJLDBCQUFNeEIsUUFBTixHQUFpQm9CLElBQUlyQixJQUFyQjtBQUNIO0FBSlMsYUFBZDtBQU1IOzs7O0VBeEI2QjRCLGVBQUtDLEk7O2tCQUFsQmhDLEkiLCJmaWxlIjoibmVlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQgdGlwIGZyb20gJy4uLy4uLy4uL3V0aWxzL3RpcCc7XHJcbiAgICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmVlZCBleHRlbmRzIHdlcHkucGFnZXtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfln7norq3pnIDmsYInXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHNlc3Nfa2V5OicnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIHBvc3RhZGRUcmFpbldpbGwoZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuYWRkVHJhaW5XaWxsKHttZXRob2Q6J1BPU1QnLHF1ZXJ5OmRhdGF9KVxyXG4gICAgICAgICAgICBpZihyZXMuZGF0YS5lcnJvcl9jb2RlID09ICcwJyl7XHJcbiAgICAgICAgICAgICAgICB0aXAuc3VjY2Vzcygn5o+Q5Lqk5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGlwLmVycm9yKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb25Mb2FkKCl7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiAnc2Vzc19rZXknLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXNzX2tleSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgZm9ybVN1Ym1pdDogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgaWYoIWUuZGV0YWlsLnZhbHVlLmNvbnRlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcign6K+36L6T5YWl5Z+56K6t6ZyA5rGCJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGpzb24gPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGpzb25bJ3Nlc3Nfa2V5J10gPSB0aGlzLnNlc3Nfa2V5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0YWRkVHJhaW5XaWxsKGpzb24pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnb1VybCh1cmwpe1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzLycrdXJsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuIl19