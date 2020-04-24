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

var _noData = require('./../../../components/common/noData.js');

var _noData2 = _interopRequireDefault(_noData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var date = new Date();
var years = [];
var months = [];
for (var i = date.getFullYear(); i > 1990; i--) {
    years.push(i);
}

for (var _i = 1; _i <= 12; _i++) {
    months.push(_i);
}

var wallet = function (_wepy$page) {
    _inherits(wallet, _wepy$page);

    function wallet() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, wallet);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = wallet.__proto__ || Object.getPrototypeOf(wallet)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '薪资明细'
        }, _this2.$repeat = {}, _this2.$props = { "NoData": {} }, _this2.$events = {}, _this2.components = {
            NoData: _noData2.default
        }, _this2.data = {
            id_num: '',
            sess_key: '',
            years: years,
            year: date.getFullYear(),
            months: months,
            month: date.getMonth(),
            value: [0, date.getMonth()],
            val: [],
            isShowPicker: false,
            list: {},
            dataLength: 0,
            total: 0
        }, _this2.components = {}, _this2.methods = {
            showPicker: function showPicker() {
                this.isShowPicker = true;
            },
            hidePicker: function hidePicker() {
                this.isShowPicker = false;
            },
            comfirm: function comfirm() {
                this.isShowPicker = false;
                this.year = this.data.years[this.val[0]];
                this.month = this.data.months[this.val[1]];
                this.getsalaryDetailByMonth();
            },
            bindChange: function bindChange(e) {
                this.val = e.detail.value;
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(wallet, [{
        key: 'getsalaryDetailByMonth',

        // 获取每月薪资
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var that, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context.next = 4;
                                return _api2.default.salaryDetailByMonth({ method: 'POST', query: {
                                        sess_key: that.sess_key,
                                        id_num: that.id_num,
                                        month: that.year + '-' + that.month + '-1'
                                    } });

                            case 4:
                                res = _context.sent;

                                if (res.data.error_code == '0') {
                                    if (res.data.bizobj.data == null) {
                                        that.list = {};
                                        this.dataLength = 0;
                                    } else {
                                        that.list = res.data.bizobj.data.detail;
                                        this.dataLength = Object.keys(this.list).length;
                                        that.total = res.data.bizobj.data.info.total;
                                    }
                                    that.$apply();
                                    _tip2.default.loaded();
                                } else {
                                    that.list = {};
                                    this.dataLength = 0;
                                    _tip2.default.error(res.data.msg);
                                }

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getsalaryDetailByMonth() {
                return _ref2.apply(this, arguments);
            }

            return getsalaryDetailByMonth;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(e) {
            this.year = e.date.split('-')[0];
            this.month = e.date.split('-')[1];
            this.id_num = e.id;
            var _this = this;
            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                    _this.sess_key = res.data;
                    _this.getsalaryDetailByMonth();
                }
            });
        }
    }]);

    return wallet;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(wallet , 'pages/personal/salary/salaryDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGFyeURldGFpbC5qcyJdLCJuYW1lcyI6WyJkYXRlIiwiRGF0ZSIsInllYXJzIiwibW9udGhzIiwiaSIsImdldEZ1bGxZZWFyIiwicHVzaCIsIndhbGxldCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJOb0RhdGEiLCJkYXRhIiwiaWRfbnVtIiwic2Vzc19rZXkiLCJ5ZWFyIiwibW9udGgiLCJnZXRNb250aCIsInZhbHVlIiwidmFsIiwiaXNTaG93UGlja2VyIiwibGlzdCIsImRhdGFMZW5ndGgiLCJ0b3RhbCIsIm1ldGhvZHMiLCJzaG93UGlja2VyIiwiaGlkZVBpY2tlciIsImNvbWZpcm0iLCJnZXRzYWxhcnlEZXRhaWxCeU1vbnRoIiwiYmluZENoYW5nZSIsImUiLCJkZXRhaWwiLCJ0aGF0IiwidGlwIiwibG9hZGluZyIsImFwaSIsInNhbGFyeURldGFpbEJ5TW9udGgiLCJtZXRob2QiLCJxdWVyeSIsInJlcyIsImVycm9yX2NvZGUiLCJiaXpvYmoiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiaW5mbyIsIiRhcHBseSIsImxvYWRlZCIsImVycm9yIiwibXNnIiwic3BsaXQiLCJpZCIsIl90aGlzIiwid3giLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxPQUFPLElBQUlDLElBQUosRUFBYjtBQUNBLElBQU1DLFFBQVEsRUFBZDtBQUNBLElBQU1DLFNBQVMsRUFBZjtBQUNBLEtBQUssSUFBSUMsSUFBSUosS0FBS0ssV0FBTCxFQUFiLEVBQWlDRCxJQUFJLElBQXJDLEVBQTRDQSxHQUE1QyxFQUFpRDtBQUM3Q0YsVUFBTUksSUFBTixDQUFXRixDQUFYO0FBQ0g7O0FBRUQsS0FBSyxJQUFJ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O0FBQ0FXLGtEQUFJZSxLQUFKLENBQVVULElBQUkzQixJQUFKLENBQVNxQyxHQUFuQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBRUZuQixDLEVBQUU7QUFDTCxpQkFBS2YsSUFBTCxHQUFZZSxFQUFFakMsSUFBRixDQUFPcUQsS0FBUCxDQUFhLEdBQWIsRUFBa0IsQ0FBbEIsQ0FBWjtBQUNBLGlCQUFLbEMsS0FBTCxHQUFhYyxFQUFFakMsSUFBRixDQUFPcUQsS0FBUCxDQUFhLEdBQWIsRUFBa0IsQ0FBbEIsQ0FBYjtBQUNBLGlCQUFLckMsTUFBTCxHQUFjaUIsRUFBRXFCLEVBQWhCO0FBQ0EsZ0JBQUlDLFFBQVEsSUFBWjtBQUNBQyxlQUFHQyxVQUFILENBQWM7QUFDVkMscUJBQUssVUFESztBQUVWQyx5QkFBUyxpQkFBU2pCLEdBQVQsRUFBYTtBQUNsQmEsMEJBQU10QyxRQUFOLEdBQWlCeUIsSUFBSTNCLElBQXJCO0FBQ0F3QywwQkFBTXhCLHNCQUFOO0FBQ0g7QUFMUyxhQUFkO0FBT0g7Ozs7RUFqRStCNkIsZUFBS0MsSTs7a0JBQXBCdEQsTSIsImZpbGUiOiJzYWxhcnlEZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IHRpcCBmcm9tICcuLi8uLi8uLi91dGlscy90aXAnO1xyXG4gICAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpJztcclxuICAgIGltcG9ydCBOb0RhdGEgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vbm9EYXRhJztcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICBjb25zdCB5ZWFycyA9IFtdXHJcbiAgICBjb25zdCBtb250aHMgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IGRhdGUuZ2V0RnVsbFllYXIoKTsgaSA+IDE5OTAgOyBpLS0pIHtcclxuICAgICAgICB5ZWFycy5wdXNoKGkpXHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDEgOyBpIDw9IDEyOyBpKyspIHtcclxuICAgICAgICBtb250aHMucHVzaChpKVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgd2FsbGV0IGV4dGVuZHMgd2VweS5wYWdle1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iWqui1hOaYjue7hidcclxuICAgICAgICB9XHJcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIk5vRGF0YVwiOnt9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgTm9EYXRhOiBOb0RhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgaWRfbnVtOiAnJyxcclxuICAgICAgICAgICAgc2Vzc19rZXk6ICcnLFxyXG4gICAgICAgICAgICB5ZWFyczogeWVhcnMsXHJcbiAgICAgICAgICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgICAgbW9udGhzOiBtb250aHMsXHJcbiAgICAgICAgICAgIG1vbnRoOiBkYXRlLmdldE1vbnRoKCksXHJcbiAgICAgICAgICAgIHZhbHVlOiBbMCxkYXRlLmdldE1vbnRoKCldLFxyXG4gICAgICAgICAgICB2YWw6IFtdLFxyXG4gICAgICAgICAgICBpc1Nob3dQaWNrZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBsaXN0OiB7fSxcclxuICAgICAgICAgICAgZGF0YUxlbmd0aDogMCxcclxuICAgICAgICAgICAgdG90YWw6IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOiOt+WPluavj+aciOiWqui1hFxyXG4gICAgICAgIGFzeW5jIGdldHNhbGFyeURldGFpbEJ5TW9udGgoKSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgdGlwLmxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuc2FsYXJ5RGV0YWlsQnlNb250aCh7bWV0aG9kOidQT1NUJywgcXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzX2tleTp0aGF0LnNlc3Nfa2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZF9udW06IHRoYXQuaWRfbnVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aDogdGhhdC55ZWFyKyctJyt0aGF0Lm1vbnRoKyctMSdcclxuICAgICAgICAgICAgICAgICAgICB9fSlcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gJzAnKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5iaXpvYmouZGF0YSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5saXN0ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YUxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubGlzdCA9IHJlcy5kYXRhLmJpem9iai5kYXRhLmRldGFpbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhTGVuZ3RoID0gT2JqZWN0LmtleXModGhpcy5saXN0KS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudG90YWwgPSByZXMuZGF0YS5iaXpvYmouZGF0YS5pbmZvLnRvdGFsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLmxvYWRlZCgpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lmxpc3QgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFMZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5tc2cpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZChlKXtcclxuICAgICAgICAgICAgdGhpcy55ZWFyID0gZS5kYXRlLnNwbGl0KCctJylbMF07XHJcbiAgICAgICAgICAgIHRoaXMubW9udGggPSBlLmRhdGUuc3BsaXQoJy0nKVsxXTtcclxuICAgICAgICAgICAgdGhpcy5pZF9udW0gPSBlLmlkO1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3Nlc3Nfa2V5JyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2Vzc19rZXkgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5nZXRzYWxhcnlEZXRhaWxCeU1vbnRoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBzaG93UGlja2VyKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd1BpY2tlciA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhpZGVQaWNrZXIoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93UGlja2VyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbWZpcm0oKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93UGlja2VyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnllYXIgPSB0aGlzLmRhdGEueWVhcnNbdGhpcy52YWxbMF1dO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb250aCA9IHRoaXMuZGF0YS5tb250aHNbdGhpcy52YWxbMV1dXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldHNhbGFyeURldGFpbEJ5TW9udGgoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmluZENoYW5nZShlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4iXX0=