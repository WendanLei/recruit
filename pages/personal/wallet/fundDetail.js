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

var _noData = require('./../../../components/common/noData.js');

var _noData2 = _interopRequireDefault(_noData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FundDetail = function (_wepy$page) {
    _inherits(FundDetail, _wepy$page);

    function FundDetail() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, FundDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = FundDetail.__proto__ || Object.getPrototypeOf(FundDetail)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '资金明细',
            enablePullDownRefresh: true
        }, _this2.data = {
            index: 0,
            sess_key: '',
            list0: [],
            list1: [],
            list2: [],
            page_info: { cur_page: 0, page_size: 15, total_items: 2, total_pages: 1 }
        }, _this2.$repeat = { "list0": { "com": "CashRecord", "props": "item" }, "list1": { "com": "CashRecord", "props": "item" }, "list2": { "com": "CashRecord", "props": "item" } }, _this2.$props = { "CashRecord": { "v-bind:item.once": { "value": "item", "type": "item", "for": "list2", "item": "item", "index": "index", "key": "index" } }, "NoData": {} }, _this2.$events = {}, _this2.components = {
            CashRecord: _cashRecord2.default,
            NoData: _noData2.default
            // 获取全部
        }, _this2.methods = {
            tab: function tab(index) {
                if (index == 0) {
                    this.list0 = [];
                    this.list1 = [];
                    this.list2 = []; 
                    this.page_info = { cur_page: 0, page_size: 15, total_items: 2, total_pages: 1 };
                    this.getCashdetail(this.sess_key);
                } else if (index == 1) {
                    this.list0 = [];
                    this.list1 = [];
                    this.list2 = [];
                    this.page_info = { cur_page: 0, page_size: 15, total_items: 2, total_pages: 1 };
                    this.getCashnewIn(this.sess_key);
                } else if (index == 2) {
                    this.list0 = [];
                    this.list1 = [];
                    this.list2 = [];
                    this.page_info = { cur_page: 0, page_size: 15, total_items: 2, total_pages: 1 };
                    this.getCashWillIn(this.sess_key);
                }
                this.index = index;
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(FundDetail, [{
        key: 'getCashdetail',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context.next = 4;
                                return _api2.default.Cashdetail({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        page: Number(that.page_info.cur_page) + 1 || 1,
                                        page_size: that.page_info.page_size
                                    } });

                            case 4:
                                res = _context.sent;

                                if (res.data.error_code == '0') {
                                    if (res.data.bizobj.data == null) {
                                        that.list0 = [];
                                        that.page_info = { cur_page: 0, page_size: 15, total_items: 2, total_pages: 1 };
                                    } else {
                                        if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                                            that.list0 = that.list0.concat(res.data.bizobj.data);
                                        } else {
                                            that.list0 = res.data.bizobj.data;
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

            function getCashdetail(_x) {
                return _ref2.apply(this, arguments);
            }

            return getCashdetail;
        }()
        // 获取新进款项

    }, {
        key: 'getCashnewIn',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sess_key) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context2.next = 4;
                                return _api2.default.CashnewIn({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        page: Number(that.page_info.cur_page) + 1 || 1,
                                        page_size: that.page_info.page_size
                                    } });

                            case 4:
                                res = _context2.sent;

                                if (res.data.error_code == '0') {
                                    if (res.data.bizobj.data == null) {
                                        that.list1 = [];
                                        that.page_info = { cur_page: 0, page_size: 15, total_items: 2, total_pages: 1 };
                                    } else {
                                        if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                                            that.list1 = that.list1.concat(res.data.bizobj.data);
                                        } else {}
                                        that.list1 = res.data.bizobj.data;
                                    }
                                    that.page_info = res.data.bizobj.page_info;
                                    that.$apply();
                                    _tip2.default.loaded();
                                } else {
                                    _tip2.default.error(res.data.msg);
                                }

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getCashnewIn(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getCashnewIn;
        }()
        // 获取待入款项

    }, {
        key: 'getCashWillIn',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(sess_key) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context3.next = 4;
                                return _api2.default.CashWillIn({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        page: Number(that.page_info.cur_page) + 1 || 1,
                                        page_size: that.page_info.page_size
                                    } });

                            case 4:
                                res = _context3.sent;

                                if (res.data.error_code == '0') {
                                    if (res.data.bizobj.data == null) {
                                        that.list2 = [];
                                        that.page_info = { cur_page: 0, page_size: 15, total_items: 2, total_pages: 1 };
                                    } else {
                                        if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                                            that.list2 = that.list2.concat(res.data.bizobj.data);
                                        } else {
                                            that.list2 = res.data.bizobj.data;
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
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getCashWillIn(_x3) {
                return _ref4.apply(this, arguments);
            }

            return getCashWillIn;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var _this = this;
            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                    _this.sess_key = res.data;
                    _this.getCashdetail(res.data);
                }
            });
        }
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
                    duration: 300
                });
            } else {
                wx.getStorage({
                    key: 'sess_key',
                    success: function success(res) {
                        if (_this.index == 0) {
                            _this.getCashdetail(res.data);
                        } else if (_this.index == 1) {
                            _this.getCashnewIn(res.data);
                        } else if (_this.index == 2) {
                            _this.getCashWillIn(res.data);
                        }
                    }
                });
            }
        }
    }]);

    return FundDetail;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(FundDetail , 'pages/personal/wallet/fundDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmREZXRhaWwuanMiXSwibmFtZXMiOlsiRnVuZERldGFpbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJkYXRhIiwiaW5kZXgiLCJzZXNzX2tleSIsImxpc3QwIiwibGlzdDEiLCJsaXN0MiIsInBhZ2VfaW5mbyIsImN1cl9wYWdlIiwicGFnZV9zaXplIiwidG90YWxfaXRlbXMiLCJ0b3RhbF9wYWdlcyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkNhc2hSZWNvcmQiLCJOb0RhdGEiLCJtZXRob2RzIiwidGFiIiwiZ2V0Q2FzaGRldGFpbCIsImdldENhc2huZXdJbiIsImdldENhc2hXaWxsSW4iLCJ0aGF0IiwidGlwIiwibG9hZGluZyIsImFwaSIsIkNhc2hkZXRhaWwiLCJtZXRob2QiLCJxdWVyeSIsInBhZ2UiLCJOdW1iZXIiLCJyZXMiLCJlcnJvcl9jb2RlIiwiYml6b2JqIiwiY29uY2F0IiwiJGFwcGx5IiwibG9hZGVkIiwiZXJyb3IiLCJtc2ciLCJDYXNobmV3SW4iLCJDYXNoV2lsbEluIiwiX3RoaXMiLCJ3eCIsImdldFN0b3JhZ2UiLCJrZXkiLCJzdWNjZXNzIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwid2VweSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFU7Ozs7Ozs7Ozs7Ozs7O3FNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyxtQ0FBc0I7QUFGakIsUyxTQUlUQyxJLEdBQU87QUFDSEMsbUJBQU8sQ0FESjtBQUVIQyxzQkFBVSxFQUZQO0FBR0hDLG1CQUFPLEVBSEo7QUFJSEMsbUJBQU8sRUFKSjtBQUtIQyxtQkFBTyxFQUxKO0FBTUhDLHVCQUFVLEVB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Q3RCd0Msa0NBQU1wQixhQUFOLENBQW9CVSxJQUFJL0IsSUFBeEI7QUFDSDtBQUVKO0FBWFMsaUJBQWQ7QUFhSDtBQUNKOzs7O0VBM0ltQ21ELGVBQUt0QixJOztrQkFBeEJqQyxVIiwiZmlsZSI6ImZ1bmREZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IHRpcCBmcm9tICcuLi8uLi8uLi91dGlscy90aXAnO1xyXG4gICAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpJztcclxuICAgIGltcG9ydCBDYXNoUmVjb3JkIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvd2FsbGV0L2Nhc2hSZWNvcmQnO1xyXG4gICAgaW1wb3J0IE5vRGF0YSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9ub0RhdGEnO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuZERldGFpbCBleHRlbmRzIHdlcHkucGFnZXtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotYTph5HmmI7nu4YnLFxyXG4gICAgICAgICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6dHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBpbmRleDogMCxcclxuICAgICAgICAgICAgc2Vzc19rZXk6ICcnLFxyXG4gICAgICAgICAgICBsaXN0MDogW10sXHJcbiAgICAgICAgICAgIGxpc3QxOiBbXSxcclxuICAgICAgICAgICAgbGlzdDI6IFtdLFxyXG4gICAgICAgICAgICBwYWdlX2luZm86e2N1cl9wYWdlOjAsIHBhZ2Vfc2l6ZTogMTUsIHRvdGFsX2l0ZW1zOiAyLCB0b3RhbF9wYWdlczogMX0sXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICRyZXBlYXQgPSB7XCJsaXN0MFwiOntcImNvbVwiOlwiQ2FzaFJlY29yZFwiLFwicHJvcHNcIjpcIml0ZW1cIn0sXCJsaXN0MVwiOntcImNvbVwiOlwiQ2FzaFJlY29yZFwiLFwicHJvcHNcIjpcIml0ZW1cIn0sXCJsaXN0MlwiOntcImNvbVwiOlwiQ2FzaFJlY29yZFwiLFwicHJvcHNcIjpcIml0ZW1cIn19O1xyXG4kcHJvcHMgPSB7XCJDYXNoUmVjb3JkXCI6e1widi1iaW5kOml0ZW0ub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImxpc3QyXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19LFwiTm9EYXRhXCI6e319O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICBDYXNoUmVjb3JkOiBDYXNoUmVjb3JkLFxyXG4gICAgICAgICAgICBOb0RhdGE6IE5vRGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDojrflj5blhajpg6hcclxuICAgICAgICBhc3luYyBnZXRDYXNoZGV0YWlsKHNlc3Nfa2V5KSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgdGlwLmxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuQ2FzaGRldGFpbCh7bWV0aG9kOidQT1NUJywgcXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzX2tleTpzZXNzX2tleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTpOdW1iZXIodGhhdC5wYWdlX2luZm8uY3VyX3BhZ2UpICsxIHx8IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2Vfc2l6ZTp0aGF0LnBhZ2VfaW5mby5wYWdlX3NpemVcclxuICAgICAgICAgICAgICAgICAgICB9fSlcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gJzAnKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5iaXpvYmouZGF0YSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5saXN0MCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfaW5mbyA9IHtjdXJfcGFnZTowLCBwYWdlX3NpemU6IDE1LCB0b3RhbF9pdGVtczogMiwgdG90YWxfcGFnZXM6IDF9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvLmN1cl9wYWdlICE9IDEgJiYgcmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mby5jdXJfcGFnZSA8PSByZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvLnRvdGFsX3BhZ2VzICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxpc3QwID10aGF0Lmxpc3QwLmNvbmNhdChyZXMuZGF0YS5iaXpvYmouZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubGlzdDAgPSByZXMuZGF0YS5iaXpvYmouZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfaW5mbyA9IHJlcy5kYXRhLmJpem9iai5wYWdlX2luZm87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgICAgICB0aXAubG9hZGVkKClcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5tc2cpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOiOt+WPluaWsOi/m+asvumhuVxyXG4gICAgICAgIGFzeW5jIGdldENhc2huZXdJbihzZXNzX2tleSkge1xyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRpcC5sb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLkNhc2huZXdJbih7bWV0aG9kOidQT1NUJywgcXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzX2tleTpzZXNzX2tleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTpOdW1iZXIodGhhdC5wYWdlX2luZm8uY3VyX3BhZ2UpICsxIHx8IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2Vfc2l6ZTp0aGF0LnBhZ2VfaW5mby5wYWdlX3NpemVcclxuICAgICAgICAgICAgICAgICAgICB9fSlcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gJzAnKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5iaXpvYmouZGF0YSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5saXN0MSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfaW5mbyA9IHtjdXJfcGFnZTowLCBwYWdlX3NpemU6IDE1LCB0b3RhbF9pdGVtczogMiwgdG90YWxfcGFnZXM6IDF9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvLmN1cl9wYWdlICE9IDEgJiYgcmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mby5jdXJfcGFnZSA8PSByZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvLnRvdGFsX3BhZ2VzICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxpc3QxID10aGF0Lmxpc3QxLmNvbmNhdChyZXMuZGF0YS5iaXpvYmouZGF0YSkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5saXN0MSA9IHJlcy5kYXRhLmJpem9iai5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucGFnZV9pbmZvID0gcmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mbztcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLmxvYWRlZCgpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aXAuZXJyb3IocmVzLmRhdGEubXNnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDojrflj5blvoXlhaXmrL7poblcclxuICAgICAgICBhc3luYyBnZXRDYXNoV2lsbEluKHNlc3Nfa2V5KSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgdGlwLmxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuQ2FzaFdpbGxJbih7bWV0aG9kOidQT1NUJywgcXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzX2tleTpzZXNzX2tleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTpOdW1iZXIodGhhdC5wYWdlX2luZm8uY3VyX3BhZ2UpICsxIHx8IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2Vfc2l6ZTp0aGF0LnBhZ2VfaW5mby5wYWdlX3NpemVcclxuICAgICAgICAgICAgICAgICAgICB9fSlcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gJzAnKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5iaXpvYmouZGF0YSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5saXN0MiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfaW5mbyA9IHtjdXJfcGFnZTowLCBwYWdlX3NpemU6IDE1LCB0b3RhbF9pdGVtczogMiwgdG90YWxfcGFnZXM6IDF9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvLmN1cl9wYWdlICE9IDEgJiYgcmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mby5jdXJfcGFnZSA8PSByZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvLnRvdGFsX3BhZ2VzICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxpc3QyID10aGF0Lmxpc3QyLmNvbmNhdChyZXMuZGF0YS5iaXpvYmouZGF0YSkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubGlzdDIgPSByZXMuZGF0YS5iaXpvYmouZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfaW5mbyA9IHJlcy5kYXRhLmJpem9iai5wYWdlX2luZm87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgICAgICB0aXAubG9hZGVkKClcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5tc2cpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZCgpe1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3Nlc3Nfa2V5JyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2Vzc19rZXkgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5nZXRDYXNoZGV0YWlsKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uUHVsbERvd25SZWZyZXNoKCl7XHJcbiAgICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBvblJlYWNoQm90dG9tKCl7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmKF90aGlzLnBhZ2VfaW5mby5jdXJfcGFnZSA9PSBfdGhpcy5wYWdlX2luZm8udG90YWxfcGFnZXMpe1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHsgLy/lpoLmnpzlhajpg6jliqDovb3lrozmiJDkuobkuZ/lvLnkuIDkuKrmoYZcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkeS5n+aYr+acieW6lee6v+eahCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3Nlc3Nfa2V5JyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihfdGhpcy5pbmRleCA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdldENhc2hkZXRhaWwocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihfdGhpcy5pbmRleCA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdldENhc2huZXdJbihyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKF90aGlzLmluZGV4ID09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0Q2FzaFdpbGxJbihyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgdGFiKGluZGV4KXtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdDAgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QxID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0MiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZV9pbmZvID0ge2N1cl9wYWdlOjAsIHBhZ2Vfc2l6ZTogMTUsIHRvdGFsX2l0ZW1zOiAyLCB0b3RhbF9wYWdlczogMX07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDYXNoZGV0YWlsKHRoaXMuc2Vzc19rZXkpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoaW5kZXggPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0MCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdDEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlX2luZm8gPSB7Y3VyX3BhZ2U6MCwgcGFnZV9zaXplOiAxNSwgdG90YWxfaXRlbXM6IDIsIHRvdGFsX3BhZ2VzOiAxfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENhc2huZXdJbih0aGlzLnNlc3Nfa2V5KTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGluZGV4ID09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdDAgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QxID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0MiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZV9pbmZvID0ge2N1cl9wYWdlOjAsIHBhZ2Vfc2l6ZTogMTUsIHRvdGFsX2l0ZW1zOiAyLCB0b3RhbF9wYWdlczogMX07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDYXNoV2lsbEluKHRoaXMuc2Vzc19rZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuIl19