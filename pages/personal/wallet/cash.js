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

var Cash = function (_wepy$page) {
    _inherits(Cash, _wepy$page);

    function Cash() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, Cash);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Cash.__proto__ || Object.getPrototypeOf(Cash)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '提现申请'
        }, _this2.data = {
            canCash: 0,
            cash: 10,
            sess_key: ''
        }, _this2.components = {}, _this2.methods = {
            cashAll: function cashAll() {
                this.cash = this.canCash;
            },

            formSubmit: function formSubmit(e) {
                if (!e.detail.value.cash) {
                    _tip2.default.error('请输入金额');
                    return;
                }
                if (parseFloat(e.detail.value.cash) < 10) {
                    _tip2.default.error('提现金额需大于10元');
                    return;
                }
                if (!/^\d+(\.\d{1,2})?$/.test(e.detail.value.cash)) {
                    _tip2.default.error('只允许两位以内的小数');
                    return;
                }
                if (parseFloat(e.detail.value.cash) > parseFloat(this.canCash)) {
                    _tip2.default.error('提现金额不能大于可提现额度');
                    return;
                }
                var json = e.detail.value;
                json.cash = parseFloat(json.cash).toFixed(2);
                json['sess_key'] = this.sess_key;
                this.postwithdraw(json);
            },
            goUrl: function goUrl() {
                wx.navigateTo({
                    url: '/pages/personal/wallet/cashRecord'
                });
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(Cash, [{
        key: 'postwithdraw',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;
                                _context.next = 3;
                                return _api2.default.withdraw({ method: 'POST', query: data });

                            case 3:
                                res = _context.sent;

                                if (res.data.error_code == '0') {
                                    _tip2.default.success('提交成功');
                                    wx.navigateTo({
                                        url: '/pages/personal/wallet/cashSuccess'
                                    });
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

            function postwithdraw(_x) {
                return _ref2.apply(this, arguments);
            }

            return postwithdraw;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(o) {
            this.canCash = o.amount;
            var _this = this;
            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                    _this.sess_key = res.data;
                }
            });
        }
    }]);

    return Cash;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Cash , 'pages/personal/wallet/cash'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2guanMiXSwibmFtZXMiOlsiQ2FzaCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiY2FuQ2FzaCIsImNhc2giLCJzZXNzX2tleSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiY2FzaEFsbCIsImZvcm1TdWJtaXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJ0aXAiLCJlcnJvciIsInBhcnNlRmxvYXQiLCJ0ZXN0IiwianNvbiIsInRvRml4ZWQiLCJwb3N0d2l0aGRyYXciLCJnb1VybCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInRoYXQiLCJhcGkiLCJ3aXRoZHJhdyIsIm1ldGhvZCIsInF1ZXJ5IiwicmVzIiwiZXJyb3JfY29kZSIsInN1Y2Nlc3MiLCJtc2ciLCJvIiwiYW1vdW50IiwiX3RoaXMiLCJnZXRTdG9yYWdlIiwia2V5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3lMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFNBR1RDLEksR0FBTztBQUNIQyxxQkFBUyxDQUROO0FBRUhDLGtCQUFNLEVBRkg7QUFHSEMsc0JBQVU7QUFIUCxTLFNBS1BDLFUsR0FBYSxFLFNBeUJiQyxPLEdBQVU7QUFDTkMsbUJBRE0scUJBQ0c7QUFDTCxxQkFBS0osSUFBTCxHQUFZLEtBQUtELE9BQWpCO0FBQ0gsYUFISzs7QUFJTk0sd0JBQVksb0JBQVNDLENBQVQsRUFBWTtBQUNwQixvQkFBRyxDQUFDQSxFQUFFQyxNQUFGLENBQVNDLEtBQVQsQ0FBZVIsSUFBbkIsRUFBd0I7QUFDcEJTLGtDQUFJQyxLQUFKLENBQVUsT0FBVjtBQUNBO0FBQ0g7QUFDRCxvQkFBR0MsV0FBV0wsRUFBRUMsTUFBRixDQUFTQyxLQUFULENBQWVSLElBQTFCLElBQWtDLEVBQXJDLEVBQXdDO0FBQ3BDUyxrQ0FBSUMsS0FBSixDQUFVLFlBQVY7QUFDQTtBQUNIO0FBQ0Qsb0JBQUcsQ0FBQyxvQkFBb0JFLElBQXBCLENBQXlCTixFQUFFQyxNQUFGLENBQVNDLEtBQVQsQ0FBZVIsSUFBeEMsQ0FBSixFQUFrRDtBQUM5Q1Msa0NBQUlDLEtBQUosQ0FBVSxZQUFWO0FBQ0E7QUFDSDtBQUNELG9CQUFHQyxXQUFXTCxFQUFFQyxNQUFGLENBQVNDLEtBQVQsQ0FBZVIsSUFBMUIsSUFBa0NXLFdBQVcsS0FBS1osT0FBaEIsQ0FBckMsRUFBOEQ7QUFDMURVLGtDQUFJQyxLQUFKLENBQVUsZUFBVjtBQUNBO0FBQ0g7QUFDRCxvQkFBSUcsT0FBT1AsRUFBRUMsTUFBRixDQUFTQyxLQUFwQjtBQUNBSyxxQkFBS2IsSUFBTCxHQUFZVyxXQUFXRSxLQUFLYixJQUFoQixFQUFzQmMsT0FBdEIsQ0FBOEIsQ0FBOUIsQ0FBWjtBQUNBRCxxQkFBSyxVQUFMLElBQW1CLEtBQUtaLFFBQXhCO0FBQ0EscUJBQUtjLFlBQUwsQ0FBa0JGLElBQWxCO0FBQ0gsYUF6Qks7QUEwQk5HLGlCQTFCTSxtQkEwQkM7QUFDSEMsbUJBQUdDLFVBQUgsQ0FBYztBQUNWQyx5QkFBSztBQURLLGlCQUFkO0FBR0g7QUE5QkssUzs7Ozs7O2lHQXRCU3JCLEk7Ozs7OztBQUNYc0Isb0MsR0FBTyxJOzt1Q0FDS0MsY0FBSUMsUUFBSixDQUFhLEVBQUNDLFFBQU8sTUFBUixFQUFlQyxPQUFNMUIsSUFBckIsRUFBYixDOzs7QUFBWjJCLG1DOztBQUNKLG9DQUFHQSxJQUFJM0IsSUFBSixDQUFTNEIsVUFBVCxJQUF1QixHQUExQixFQUE4QjtBQUMxQmpCLGtEQUFJa0IsT0FBSixDQUFZLE1BQVo7QUFDQVYsdUNBQUdDLFVBQUgsQ0FBYztBQUNWQyw2Q0FBSztBQURLLHFDQUFkO0FBR0gsaUNBTEQsTUFLSztBQUNEVixrREFBSUMsS0FBSixDQUFVZSxJQUFJM0IsSUFBSixDQUFTOEIsR0FBbkI7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUVFQyxDLEVBQUU7QUFDTCxpQkFBSzlCLE9BQUwsR0FBZThCLEVBQUVDLE1BQWpCO0FBQ0EsZ0JBQUlDLFFBQVEsSUFBWjtBQUNBZCxlQUFHZSxVQUFILENBQWM7QUFDVkMscUJBQUssVUFESztBQUVWTix5QkFBUyxpQkFBU0YsR0FBVCxFQUFhO0FBQ2xCTSwwQkFBTTlCLFFBQU4sR0FBaUJ3QixJQUFJM0IsSUFBckI7QUFDSDtBQUpTLGFBQWQ7QUFNSDs7OztFQWpDNkJvQyxlQUFLQyxJOztrQkFBbEJ4QyxJIiwiZmlsZSI6ImNhc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IHRpcCBmcm9tICcuLi8uLi8uLi91dGlscy90aXAnO1xyXG4gICAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpJztcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhc2ggZXh0ZW5kcyB3ZXB5LnBhZ2V7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5o+Q546w55Sz6K+3J1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBjYW5DYXNoOiAwLFxyXG4gICAgICAgICAgICBjYXNoOiAxMCxcclxuICAgICAgICAgICAgc2Vzc19rZXk6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBwb3N0d2l0aGRyYXcoZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkud2l0aGRyYXcoe21ldGhvZDonUE9TVCcscXVlcnk6ZGF0YX0pXHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gJzAnKXtcclxuICAgICAgICAgICAgICAgIHRpcC5zdWNjZXNzKCfmj5DkuqTmiJDlip8nKTtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb25hbC93YWxsZXQvY2FzaFN1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZChvKXtcclxuICAgICAgICAgICAgdGhpcy5jYW5DYXNoID0gby5hbW91bnQ7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiAnc2Vzc19rZXknLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXNzX2tleSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgY2FzaEFsbCgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXNoID0gdGhpcy5jYW5DYXNoO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmb3JtU3VibWl0OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBpZighZS5kZXRhaWwudmFsdWUuY2FzaCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLmVycm9yKCfor7fovpPlhaXph5Hpop0nKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihwYXJzZUZsb2F0KGUuZGV0YWlsLnZhbHVlLmNhc2gpIDwgMTApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcign5o+Q546w6YeR6aKd6ZyA5aSn5LqOMTDlhYMnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZighL15cXGQrKFxcLlxcZHsxLDJ9KT8kLy50ZXN0KGUuZGV0YWlsLnZhbHVlLmNhc2gpKXtcclxuICAgICAgICAgICAgICAgICAgICB0aXAuZXJyb3IoJ+WPquWFgeiuuOS4pOS9jeS7peWGheeahOWwj+aVsCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHBhcnNlRmxvYXQoZS5kZXRhaWwudmFsdWUuY2FzaCkgPiBwYXJzZUZsb2F0KHRoaXMuY2FuQ2FzaCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcign5o+Q546w6YeR6aKd5LiN6IO95aSn5LqO5Y+v5o+Q546w6aKd5bqmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGpzb24gPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGpzb24uY2FzaCA9IHBhcnNlRmxvYXQoanNvbi5jYXNoKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAganNvblsnc2Vzc19rZXknXSA9IHRoaXMuc2Vzc19rZXk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3R3aXRoZHJhdyhqc29uKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ29VcmwoKXtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb25hbC93YWxsZXQvY2FzaFJlY29yZCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4iXX0=