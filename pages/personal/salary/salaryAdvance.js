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

var salaryAdvance = function (_wepy$page) {
    _inherits(salaryAdvance, _wepy$page);

    function salaryAdvance() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, salaryAdvance);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = salaryAdvance.__proto__ || Object.getPrototypeOf(salaryAdvance)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '工资预支'
        }, _this2.data = {
            isStaff: true,
            sess_key: '',
            array: [],
            arrayId: [],
            select: '请选择',
            selectId: ''
        }, _this2.methods = {
            bindPickerChange: function bindPickerChange(e) {
                this.select = this.array[e.detail.value];
                this.selectId = this.arrayId[e.detail.value];
            },
            formSubmit: function formSubmit(e) {
                if (!e.detail.value.amount) {
                    _tip2.default.error('请输入金额');
                    return;
                }
                if (!/^\d+(\.\d{1,2})?$/.test(e.detail.value.amount)) {
                    _tip2.default.error('只允许两位以内的小数');
                    return;
                }
                if (!e.detail.value.reason) {
                    _tip2.default.error('请输入申请原因');
                    return;
                }
                if (!this.selectId) {
                    _tip2.default.error('请选择公司');
                    return;
                }
                var json = e.detail.value;
                json['sess_key'] = this.sess_key;
                json['company_id'] = this.selectId;
                this.postadvance(json);
            },
            goUrl: function goUrl() {
                wx.navigateTo({
                    url: '/pages/personal/salary/salaryDetail'
                });
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(salaryAdvance, [{
        key: 'postadvance',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;
                                _context.next = 3;
                                return _api2.default.advance({ method: 'POST', query: data });

                            case 3:
                                res = _context.sent;

                                if (res.data.error_code == '0') {
                                    _tip2.default.success('提交成功，等待审核');
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

            function postadvance(_x) {
                return _ref2.apply(this, arguments);
            }

            return postadvance;
        }()
    }, {
        key: 'postadvanceCompany',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sess_key) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                that = this;
                                _context2.next = 3;
                                return _api2.default.advanceCompany({ method: 'POST', query: {
                                        sess_key: sess_key
                                    } });

                            case 3:
                                res = _context2.sent;

                                if (res.data.error_code == '0') {
                                    res.data.bizobj.data.map(function (item, index) {
                                        that.array.push(item.name);
                                        that.arrayId.push(item.company_id);
                                    });
                                    that.$apply();
                                } else {
                                    _tip2.default.error(res.data.msg);
                                }

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function postadvanceCompany(_x2) {
                return _ref3.apply(this, arguments);
            }

            return postadvanceCompany;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var _this = this;
            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                    _this.sess_key = res.data;
                    _this.postadvanceCompany(res.data);
                }
            });
        }
    }]);

    return salaryAdvance;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(salaryAdvance , 'pages/personal/salary/salaryAdvance'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGFyeUFkdmFuY2UuanMiXSwibmFtZXMiOlsic2FsYXJ5QWR2YW5jZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaXNTdGFmZiIsInNlc3Nfa2V5IiwiYXJyYXkiLCJhcnJheUlkIiwic2VsZWN0Iiwic2VsZWN0SWQiLCJtZXRob2RzIiwiYmluZFBpY2tlckNoYW5nZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImZvcm1TdWJtaXQiLCJhbW91bnQiLCJ0aXAiLCJlcnJvciIsInRlc3QiLCJyZWFzb24iLCJqc29uIiwicG9zdGFkdmFuY2UiLCJnb1VybCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInRoYXQiLCJhcGkiLCJhZHZhbmNlIiwibWV0aG9kIiwicXVlcnkiLCJyZXMiLCJlcnJvcl9jb2RlIiwic3VjY2VzcyIsIm1zZyIsImFkdmFuY2VDb21wYW55IiwiYml6b2JqIiwibWFwIiwiaXRlbSIsImluZGV4IiwicHVzaCIsIm5hbWUiLCJjb21wYW55X2lkIiwiJGFwcGx5IiwiX3RoaXMiLCJnZXRTdG9yYWdlIiwia2V5IiwicG9zdGFkdmFuY2VDb21wYW55Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLGE7Ozs7Ozs7Ozs7Ozs7OzJNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFNBR1RDLEksR0FBTztBQUNIQyxxQkFBUyxJQUROO0FBRUhDLHNCQUFVLEVBRlA7QUFHSEMsbUJBQU8sRUFISjtBQUlIQyxxQkFBUyxFQUpOO0FBS0hDLG9CQUFRLEtBTEw7QUFNSEMsc0JBQVM7QUFOTixTLFNBMENQQyxPLEdBQVU7QUFDTkMsOEJBQWtCLDBCQUFTQyxDQUFULEVBQVk7QUFDMUIscUJBQUtKLE1BQUwsR0FBYyxLQUFLRixLQUFMLENBQVdNLEVBQUVDLE1BQUYsQ0FBU0MsS0FBcEIsQ0FBZDtBQUNBLHFCQUFLTCxR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d2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCB0aXAgZnJvbSAnLi4vLi4vLi4vdXRpbHMvdGlwJztcclxuICAgIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vLi4vYXBpL2FwaSc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBzYWxhcnlBZHZhbmNlIGV4dGVuZHMgd2VweS5wYWdle1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+W3pei1hOmihOaUrydcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgaXNTdGFmZjogdHJ1ZSxcclxuICAgICAgICAgICAgc2Vzc19rZXk6ICcnLFxyXG4gICAgICAgICAgICBhcnJheTogW10sXHJcbiAgICAgICAgICAgIGFycmF5SWQ6IFtdLFxyXG4gICAgICAgICAgICBzZWxlY3Q6ICfor7fpgInmi6knLFxyXG4gICAgICAgICAgICBzZWxlY3RJZDonJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBwb3N0YWR2YW5jZShkYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5hZHZhbmNlKHttZXRob2Q6J1BPU1QnLHF1ZXJ5OmRhdGF9KVxyXG4gICAgICAgICAgICBpZihyZXMuZGF0YS5lcnJvcl9jb2RlID09ICcwJyl7XHJcbiAgICAgICAgICAgICAgICB0aXAuc3VjY2Vzcygn5o+Q5Lqk5oiQ5Yqf77yM562J5b6F5a6h5qC4Jyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGlwLmVycm9yKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMgcG9zdGFkdmFuY2VDb21wYW55KHNlc3Nfa2V5KSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5hZHZhbmNlQ29tcGFueSh7bWV0aG9kOidQT1NUJyxxdWVyeTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Nfa2V5OnNlc3Nfa2V5XHJcbiAgICAgICAgICAgICAgICAgICAgfX0pXHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gJzAnKXtcclxuICAgICAgICAgICAgICAgIHJlcy5kYXRhLmJpem9iai5kYXRhLm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmFycmF5LnB1c2goaXRlbS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmFycmF5SWQucHVzaChpdGVtLmNvbXBhbnlfaWQpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aXAuZXJyb3IocmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvbkxvYWQoKXtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdzZXNzX2tleScsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNlc3Nfa2V5ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucG9zdGFkdmFuY2VDb21wYW55KHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIGJpbmRQaWNrZXJDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ID0gdGhpcy5hcnJheVtlLmRldGFpbC52YWx1ZV1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SWQgPSB0aGlzLmFycmF5SWRbZS5kZXRhaWwudmFsdWVdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvcm1TdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmKCFlLmRldGFpbC52YWx1ZS5hbW91bnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcign6K+36L6T5YWl6YeR6aKdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoIS9eXFxkKyhcXC5cXGR7MSwyfSk/JC8udGVzdChlLmRldGFpbC52YWx1ZS5hbW91bnQpKXtcclxuICAgICAgICAgICAgICAgICAgICB0aXAuZXJyb3IoJ+WPquWFgeiuuOS4pOS9jeS7peWGheeahOWwj+aVsCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKCFlLmRldGFpbC52YWx1ZS5yZWFzb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcign6K+36L6T5YWl55Sz6K+35Y6f5ZugJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc2VsZWN0SWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcign6K+36YCJ5oup5YWs5Y+4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGpzb24gPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGpzb25bJ3Nlc3Nfa2V5J10gPSB0aGlzLnNlc3Nfa2V5O1xyXG4gICAgICAgICAgICAgICAganNvblsnY29tcGFueV9pZCddID0gdGhpcy5zZWxlY3RJZDtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdGFkdmFuY2UoanNvbik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdvVXJsKCl7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvcGVyc29uYWwvc2FsYXJ5L3NhbGFyeURldGFpbCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4iXX0=