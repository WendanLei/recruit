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

var _cashRecord = require('./../../../components/wallet/cashRecord.js');

var _cashRecord2 = _interopRequireDefault(_cashRecord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CashRecordContent = function (_wepy$page) {
    _inherits(CashRecordContent, _wepy$page);

    function CashRecordContent() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, CashRecordContent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = CashRecordContent.__proto__ || Object.getPrototypeOf(CashRecordContent)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '提现记录',
            enablePullDownRefresh: true
        }, _this2.data = {
            list: [],
            sess_key: '',
            page_info: { cur_page: 0, page_size: 10, total_items: 2, total_pages: 1 }
        }, _this2.$repeat = { "list": { "com": "CashRecord", "props": "item" } }, _this2.$props = { "CashRecord": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "index" } } }, _this2.$events = {}, _this2.components = {
            CashRecord: _cashRecord2.default
        }, _this2.methods = {
            formSubmit: function formSubmit(e) {
                console.log('form发生了submit事件，携带数据为：', e.detail.value);
                wx.navigateTo({
                    url: '/pages/personal/wallet/cashSuccess'
                });
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(CashRecordContent, [{
        key: 'onLoad',
        value: function onLoad() {
            var _this = this;
            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                    _this.sess_key = res.data;
                    _this.getwithdrawList(res.data);
                }
            });
        }
        // 获取提现记录

    }, {
        key: 'getwithdrawList',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key) {
                var that, res, arr, _arr;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context.next = 4;
                                return _api2.default.withdrawList({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        page: Number(that.page_info.cur_page) + 1 || 1,
                                        page_size: that.page_info.page_size
                                    } });

                            case 4:
                                res = _context.sent;

                                if (res.data.error_code == '0') {
                                    if (res.data.bizobj.data == null) {
                                        that.list = [];
                                        that.page_info = { cur_page: 0, page_size: 10, total_items: 2, total_pages: 1 };
                                    } else {
                                        if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                                            arr = [];

                                            res.data.bizobj.data.map(function (val, ind) {
                                                arr.push({ cash: val.cash, update_at: val.create_at, id: val.id, method: '提现' });
                                            });
                                            that.list = that.list.concat(arr);
                                        } else {
                                            _arr = [];

                                            res.data.bizobj.data.map(function (val, ind) {
                                                _arr.push({ cash: val.cash, update_at: val.create_at, id: val.id, method: '提现' });
                                            });;
                                            that.list = _arr;
                                        }
                                        that.page_info = res.data.bizobj.page_info;
                                    }
                                    that.$apply();
                                    _tip2.default.loaded();
                                } else {
                                    _tip2.default.error(res.data.msg);
                                }

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getwithdrawList(_x) {
                return _ref2.apply(this, arguments);
            }

            return getwithdrawList;
        }()
    }, {
        key: 'onPullDownRefresh',
        value: function onPullDownRefresh() {
            wx.stopPullDownRefresh();
        }
    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            var _this = this;
            if (_this.page_info.cur_page == _this.page_info.total_pages) {
                wx.showToast({ //如果全部加载完成了也弹一个框
                    title: '我也是有底线的',
                    icon: 'success',
                    duration: 2000
                });
            } else {
                wx.getStorage({
                    key: 'sess_key',
                    success: function success(res) {
                        _this.getwithdrawList(res.data);
                    }
                });
            }
        }
    }]);

    return CashRecordContent;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(CashRecordContent , 'pages/personal/wallet/cashRecord'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2hSZWNvcmQuanMiXSwibmFtZXMiOlsiQ2FzaFJlY29yZENvbnRlbnQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsImxpc3QiLCJzZXNzX2tleSIsInBhZ2VfaW5mbyIsImN1cl9wYWdlIiwicGFnZV9zaXplIiwidG90YWxfaXRlbXMiLCJ0b3RhbF9wYWdlcyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkNhc2hSZWNvcmQiLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwidmFsdWUiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJfdGhpcyIsImdldFN0b3JhZ2UiLCJrZXkiLCJzdWNjZXNzIiwicmVzIiwiZ2V0d2l0aGRyYXdMaXN0IiwidGhhdCIsInRpcCIsImxvYWRpbmciLCJhcGkiLCJ3aXRoZHJhd0xpc3QiLCJtZXRob2QiLCJxdWVyeSIsInBhZ2UiLCJOdW1iZXIiLCJlcnJvcl9jb2RlIiwiYml6b2JqIiwiYXJyIiwibWFwIiwidmFsIiwiaW5kIiwicHVzaCIsImNhc2giLCJ1cGRhdGVfYXQiLCJjcmVhdGVfYXQiLCJpZCIsImNvbmNhdCIsIiRhcHBseSIsImxvYWRlZCIsImVycm9yIiwibXNnIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwid2VweSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxpQjs7Ozs7Ozs7Ozs7Ozs7bU5BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLG1DQUFzQjtBQUZqQixTLFNBSVRDLEksR0FBTztBQUNIQyxrQkFBTSxFQURIO0FBRUhDLHNCQUFVLEVBRlA7QUFHSEMsdUJBQVUsRUFBQ0MsVUFB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QUExQjtBQUNIO0FBSlMsaUJBQWQ7QUFNSDtBQUNKOzs7O0VBakYwQzJELGVBQUt2QixJOztrQkFBL0J4QyxpQiIsImZpbGUiOiJjYXNoUmVjb3JkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCB0aXAgZnJvbSAnLi4vLi4vLi4vdXRpbHMvdGlwJztcclxuICAgIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vLi4vYXBpL2FwaSc7XHJcbiAgICBpbXBvcnQgQ2FzaFJlY29yZCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3dhbGxldC9jYXNoUmVjb3JkJztcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhc2hSZWNvcmRDb250ZW50IGV4dGVuZHMgd2VweS5wYWdle1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aPkOeOsOiusOW9lScsXHJcbiAgICAgICAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDp0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGxpc3Q6IFtdLFxyXG4gICAgICAgICAgICBzZXNzX2tleTogJycsXHJcbiAgICAgICAgICAgIHBhZ2VfaW5mbzp7Y3VyX3BhZ2U6MCwgcGFnZV9zaXplOiAxMCwgdG90YWxfaXRlbXM6IDIsIHRvdGFsX3BhZ2VzOiAxfSwgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICRyZXBlYXQgPSB7XCJsaXN0XCI6e1wiY29tXCI6XCJDYXNoUmVjb3JkXCIsXCJwcm9wc1wiOlwiaXRlbVwifX07XHJcbiRwcm9wcyA9IHtcIkNhc2hSZWNvcmRcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDppdGVtLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgQ2FzaFJlY29yZDogQ2FzaFJlY29yZFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Mb2FkKCl7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiAnc2Vzc19rZXknLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXNzX2tleSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmdldHdpdGhkcmF3TGlzdChyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDojrflj5bmj5DnjrDorrDlvZVcclxuICAgICAgICBhc3luYyBnZXR3aXRoZHJhd0xpc3Qoc2Vzc19rZXkpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aXAubG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS53aXRoZHJhd0xpc3Qoe21ldGhvZDonUE9TVCcsIHF1ZXJ5OntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc19rZXk6c2Vzc19rZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6TnVtYmVyKHRoYXQucGFnZV9pbmZvLmN1cl9wYWdlKSArMSB8fCAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlX3NpemU6dGhhdC5wYWdlX2luZm8ucGFnZV9zaXplXHJcbiAgICAgICAgICAgICAgICAgICAgfX0pXHJcbiAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5lcnJvcl9jb2RlID09ICcwJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuYml6b2JqLmRhdGEgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfaW5mbyA9IHtjdXJfcGFnZTowLCBwYWdlX3NpemU6IDEwLCB0b3RhbF9pdGVtczogMiwgdG90YWxfcGFnZXM6IDF9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvLmN1cl9wYWdlICE9IDEgJiYgcmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mby5jdXJfcGFnZSA8PSByZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvLnRvdGFsX3BhZ2VzICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZGF0YS5iaXpvYmouZGF0YS5tYXAoKHZhbCxpbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7Y2FzaDp2YWwuY2FzaCwgdXBkYXRlX2F0OnZhbC5jcmVhdGVfYXQsaWQ6dmFsLmlkLCBtZXRob2Q6J+aPkOeOsCd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxpc3QgPXRoYXQubGlzdC5jb25jYXQoYXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZGF0YS5iaXpvYmouZGF0YS5tYXAoKHZhbCxpbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7Y2FzaDp2YWwuY2FzaCwgdXBkYXRlX2F0OnZhbC5jcmVhdGVfYXQsaWQ6dmFsLmlkLCBtZXRob2Q6J+aPkOeOsCd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5saXN0ID0gYXJyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucGFnZV9pbmZvID0gcmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mbztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5sb2FkZWQoKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLmVycm9yKHJlcy5kYXRhLm1zZylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb25QdWxsRG93blJlZnJlc2goKXtcclxuICAgICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uUmVhY2hCb3R0b20oKXtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgaWYoX3RoaXMucGFnZV9pbmZvLmN1cl9wYWdlID09IF90aGlzLnBhZ2VfaW5mby50b3RhbF9wYWdlcyl7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3QoeyAvL+WmguaenOWFqOmDqOWKoOi9veWujOaIkOS6huS5n+W8ueS4gOS4quahhlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oiR5Lmf5piv5pyJ5bqV57q/55qEJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnc2Vzc19rZXknLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdldHdpdGhkcmF3TGlzdChyZXMuZGF0YSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIGZvcm1TdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGc3VibWl05LqL5Lu277yM5pC65bim5pWw5o2u5Li677yaJywgZS5kZXRhaWwudmFsdWUpXHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvcGVyc29uYWwvd2FsbGV0L2Nhc2hTdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4iXX0=