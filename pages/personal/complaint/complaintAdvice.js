'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

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

var complaintAdvice = function (_wepy$page) {
    _inherits(complaintAdvice, _wepy$page);

    function complaintAdvice() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, complaintAdvice);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = complaintAdvice.__proto__ || Object.getPrototypeOf(complaintAdvice)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '投诉建议'
        }, _this2.data = {
            city: ['浙江省', '杭州市', '西湖区'],
            customItem: '全部',
            sess_key: ''
        }, _this2.methods = {
            bindRegionChange: function bindRegionChange(e) {
                this.city = e.detail.value;
            },
            formSubmit: function formSubmit(e) {
                if (!e.detail.value.mobile) {
                    _tip2.default.error('请输入手机号');
                    return;
                }
                if (!e.detail.value.company_name) {
                    _tip2.default.error('请输入投诉单位');
                    return;
                }
                if (!e.detail.value.content) {
                    _tip2.default.error('请输入投诉内容');
                    return;
                }
                var json = e.detail.value;
                json['sess_key'] = this.sess_key;
                json['city'] = this.city.join('').replace(/全部/g, '');
                this.postcomplain(json);
            },
            goUrl: function goUrl() {
                wx.navigateTo({
                    url: '/pages/personal/salary/salaryDetail'
                });
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(complaintAdvice, [{
        key: 'postcomplain',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;
                                _context.next = 3;
                                return _api2.default.complain({ method: 'POST', query: data });

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

            function postcomplain(_x) {
                return _ref2.apply(this, arguments);
            }

            return postcomplain;
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

    return complaintAdvice;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(complaintAdvice , 'pages/personal/complaint/complaintAdvice'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsYWludEFkdmljZS5qcyJdLCJuYW1lcyI6WyJjb21wbGFpbnRBZHZpY2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNpdHkiLCJjdXN0b21JdGVtIiwic2Vzc19rZXkiLCJtZXRob2RzIiwiYmluZFJlZ2lvbkNoYW5nZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImZvcm1TdWJtaXQiLCJtb2JpbGUiLCJ0aXAiLCJlcnJvciIsImNvbXBhbnlfbmFtZSIsImNvbnRlbnQiLCJqc29uIiwiam9pbiIsInJlcGxhY2UiLCJwb3N0Y29tcGxhaW4iLCJnb1VybCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInRoYXQiLCJhcGkiLCJjb21wbGFpbiIsIm1ldGhvZCIsInF1ZXJ5IiwicmVzIiwiZXJyb3JfY29kZSIsInN1Y2Nlc3MiLCJtc2ciLCJfdGhpcyIsImdldFN0b3JhZ2UiLCJrZXkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsZTs7Ozs7Ozs7Ozs7Ozs7K01BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsU0FHVEMsSSxHQUFPO0FBQ0hDLGtCQUFNLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLENBREg7QUFFSEMsd0JBQVksSUFGVDtBQUdIQyxzQkFBUztBQUhOLFMsU0F1QlBDLE8sR0FBVTtBQUNOQyw4QkFBa0IsMEJBQVVDLENBQVYsRUFBYTtBQUMzQixxQkFBS0wsSUFBTCxHQUFZSyxFQUFFQyxNQUFGLENBQVNDLEtBQXJCO0FBQ0gsYUFISztBQUlOQyx3QkFBWSxvQkFBU0gsQ0FBVCxFQUFZO0FBQ3BCLG9CQUFHLENBQUNBLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlRSxNQUFuQixFQUEwQjtBQUN0QkMsa0NBQUlDLEtBQUosQ0FBVSxRQUFWO0FBQ0E7QUFDSDtBQUNELG9CQUFHLENBQUNOLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlSyxZQUFuQixFQUFnQztBQUM1QkYsa0NBQUlDLEtBQUosQ0FBVSxTQUFWO0FBQ0E7QUFDSDtBQUNELG9CQUFHLENBQUNOLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlTSxPQUFuQixFQUEyQjtBQUN2Qkgsa0NBQUlDLEtBQUosQ0FBVSxTQUFWO0FBQ0E7QUFDSDtBQUNELG9CQUFJRyxPQUFPVCxFQUFFQyxNQUFGLENBQVNDLEtBQXBCO0FBQ0FPLHFCQUFLLFVBQUwsSUFBbUIsS0FBS1osUUFBeEI7QUFDQVkscUJBQUssTUFBTCxJQUFlLEtBQUtkLElBQUwsQ0FBVWUsSUFBVixDQUFlLEVBQWYsRUFBbUJDLE9BQW5CLENBQTJCLEtBQTNCLEVBQWlDLEVBQWpDLENBQWY7QUFDQSxxQkFBS0MsWUFBTCxDQUFrQkgsSUFBbEI7QUFDSCxhQXJCSztBQXNCTkksaUJBdEJNLG1CQXNCQztBQUNIQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLO0FBREssaUJBQWQ7QUFHSDtBQTFCSyxTOzs7Ozs7aUdBbEJTdEIsSTs7Ozs7O0FBQ1h1QixvQyxHQUFPLEk7O3VDQUNLQyxjQUFJQyxRQUFKLENBQWEsRUFBQ0MsUUFBTyxNQUFSLEVBQWVDLE9BQU0zQixJQUFyQixFQUFiLEM7OztBQUFaNEIsbUM7O0FBQ0osb0NBQUdBLElBQUk1QixJQUFKLENBQVM2QixVQUFULElBQXVCLEdBQTFCLEVBQThCO0FBQzFCbEIsa0RBQUltQixPQUFKLENBQVksTUFBWjtBQUNILGlDQUZELE1BRUs7QUFDRG5CLGtEQUFJQyxLQUFKLENBQVVnQixJQUFJNUIsSUFBSixDQUFTK0IsR0FBbkI7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUVHO0FBQ0osZ0JBQUlDLFFBQVEsSUFBWjtBQUNBWixlQUFHYSxVQUFILENBQWM7QUFDVkMscUJBQUssVUFESztBQUVWSix5QkFBUyxpQkFBU0YsR0FBVCxFQUFhO0FBQ2xCSSwwQkFBTTdCLFFBQU4sR0FBaUJ5QixJQUFJNUIsSUFBckI7QUFDSDtBQUpTLGFBQWQ7QUFNSDs7OztFQTFCd0NtQyxlQUFLQyxJOztrQkFBN0J2QyxlIiwiZmlsZSI6ImNvbXBsYWludEFkdmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQgdGlwIGZyb20gJy4uLy4uLy4uL3V0aWxzL3RpcCc7XHJcbiAgICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY29tcGxhaW50QWR2aWNlIGV4dGVuZHMgd2VweS5wYWdle1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aKleivieW7uuiuridcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgY2l0eTogWyfmtZnmsZ/nnIEnLCAn5p2t5bee5biCJywgJ+ilv+a5luWMuiddLFxyXG4gICAgICAgICAgICBjdXN0b21JdGVtOiAn5YWo6YOoJyxcclxuICAgICAgICAgICAgc2Vzc19rZXk6JydcclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMgcG9zdGNvbXBsYWluKGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmNvbXBsYWluKHttZXRob2Q6J1BPU1QnLHF1ZXJ5OmRhdGF9KVxyXG4gICAgICAgICAgICBpZihyZXMuZGF0YS5lcnJvcl9jb2RlID09ICcwJyl7XHJcbiAgICAgICAgICAgICAgICB0aXAuc3VjY2Vzcygn5o+Q5Lqk5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGlwLmVycm9yKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb25Mb2FkKCl7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiAnc2Vzc19rZXknLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXNzX2tleSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgYmluZFJlZ2lvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2l0eSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvcm1TdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmKCFlLmRldGFpbC52YWx1ZS5tb2JpbGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcign6K+36L6T5YWl5omL5py65Y+3Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoIWUuZGV0YWlsLnZhbHVlLmNvbXBhbnlfbmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLmVycm9yKCfor7fovpPlhaXmipXor4nljZXkvY0nKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZighZS5kZXRhaWwudmFsdWUuY29udGVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLmVycm9yKCfor7fovpPlhaXmipXor4nlhoXlrrknKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQganNvbiA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAganNvblsnc2Vzc19rZXknXSA9IHRoaXMuc2Vzc19rZXk7XHJcbiAgICAgICAgICAgICAgICBqc29uWydjaXR5J10gPSB0aGlzLmNpdHkuam9pbignJykucmVwbGFjZSgv5YWo6YOoL2csJycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0Y29tcGxhaW4oanNvbik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdvVXJsKCl7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvcGVyc29uYWwvc2FsYXJ5L3NhbGFyeURldGFpbCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4iXX0=