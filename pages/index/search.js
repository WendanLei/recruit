'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _onfire = require('./../../npm/onfire.js/dist/onfire.min.js');

var _onfire2 = _interopRequireDefault(_onfire);

var _info = require('./../../components/common/info.js');

var _info2 = _interopRequireDefault(_info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_wepy$page) {
    _inherits(Search, _wepy$page);

    function Search() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, Search);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '搜索',
            navigationBarBackgroundColor: '#fff',
            navigationBarTextStyle: 'black'
            //            backgroundTextStyle:"dark"
        }, _this2.$repeat = { "work_list": { "com": "info", "props": "list.sync" } }, _this2.$props = { "info": { "xmlns:v-bind": { "value": "", "for": "work_list", "item": "item", "index": "index", "key": "index" }, "v-bind:list.sync": { "value": "item", "type": "item", "for": "work_list", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "work_list", "item": "item", "index": "index", "key": "index" } } }, _this2.$events = { "info": { "v-on:infoTap": "detailTap" } }, _this2.components = {
            info: _info2.default
        }, _this2.data = {
            work_list: [],
            select_city: {}
        }, _this2.methods = {
            inputBlur: function inputBlur(e) {
                var _this = this;
                wx.getStorage({
                    key: 'sess_key',
                    success: function success(res) {
                        _this.getWorkList(res.data, e.detail.value);
                    }
                });
            },
            cancelTap: function cancelTap() {
                wx.navigateBack();
            },
            detailTap: function detailTap(v) {
                wx.getStorage({
                    key: 'sess_key',
                    success: function success(res) {
                        wx.navigateTo({
                            url: '/pages/work/workDetails?sess_key=' + res.data + '&id=' + v.id
                        });
                    }
                });
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(Search, [{
        key: 'getWorkList',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key, key) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context.next = 4;
                                return _api2.default.recWorkList({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        is_rec: 2,
                                        search_name: key
                                        //                page:Number(that.page_info.cur_page) +1 || 1,
                                        //                page_size:that.page_info.page_size
                                    } });

                            case 4:
                                res = _context.sent;

                                if (res.data.error_code == 0) {
                                    if (res.data.bizobj.data == null) {
                                        that.work_list = [];
                                        that.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 };
                                    } else {
                                        //                    if(res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages ){
                                        //                        that.work_list =that.work_list.concat(res.data.bizobj.data) ;
                                        //                    }else{
                                        that.work_list = res.data.bizobj.data;
                                        //                    }
                                        that.height = (that.work_list.length + 1) * 160;
                                        that.page_info = res.data.bizobj.page_info;
                                    }

                                    that.$apply();
                                    _tip2.default.loaded();
                                } else {
                                    _tip2.default.error(res.data.error_msg);
                                }

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getWorkList(_x, _x2) {
                return _ref2.apply(this, arguments);
            }

            return getWorkList;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {}
    }, {
        key: 'onUnload',
        value: function onUnload() {

            //            onfire.fire('search', { inputVal: this.select_city });
        }
    }]);

    return Search;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Search , 'pages/index/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJpbmZvIiwiZGF0YSIsIndvcmtfbGlzdCIsInNlbGVjdF9jaXR5IiwibWV0aG9kcyIsImlucHV0Qmx1ciIsImUiLCJfdGhpcyIsInd4IiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJyZXMiLCJnZXRXb3JrTGlzdCIsImRldGFpbCIsInZhbHVlIiwiY2FuY2VsVGFwIiwibmF2aWdhdGVCYWNrIiwiZGV0YWlsVGFwIiwidiIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJpZCIsInNlc3Nfa2V5IiwidGhhdCIsInRpcCIsImxvYWRpbmciLCJhcGkiLCJyZWNXb3JrTGlzdCIsIm1ldGhvZCIsInF1ZXJ5IiwiaXNfcmVjIiwic2VhcmNoX25hbWUiLCJlcnJvcl9jb2RlIiwiYml6b2JqIiwicGFnZV9pbmZvIiwiY3VyX3BhZ2UiLCJwYWdlX3NpemUiLCJ0b3RhbF9pdGVtcyIsInRvdGFsX3BhZ2VzIiwiaGVpZ2h0IiwibGVuZ3RoIiwiJGFwcGx5IiwibG9hZGVkIiwiZXJyb3IiLCJlcnJvcl9tc2ciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7OzZMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixJQURuQjtBQUVMQywwQ0FBOEIsTUFGekI7QUFHTEMsb0NBQXdCO0FBQ3BDO0FBSmlCLFMsU0FNVkMsTyxHQUFVLEVBQUMsYUFBWSxFQUFDLE9BQU0sTUFBUCxFQUFjLFNBQVEsV0FBdEIsRUFBYixFLFNBQ2pCQyxNLEdBQVMsRUFB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Ozs7Ozs7O2lDQUVHLENBRVA7OzttQ0FDUzs7QUFFbEI7QUFDUzs7OztFQXJEK0JDLGVBQUtDLEk7O2tCQUFwQnhELE0iLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vYXBpL2FwaSc7XHJcbiAgICBpbXBvcnQgdGlwIGZyb20gJy4uLy4uL3V0aWxzL3RpcCc7XHJcbiAgICBpbXBvcnQgb25maXJlIGZyb20gJ29uZmlyZS5qcyc7XHJcbiAgICBpbXBvcnQgaW5mbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9pbmZvJztcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIHdlcHkucGFnZXtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmkJzntKInLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXHJcbi8vICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTpcImRhcmtcIlxyXG4gICAgICAgIH1cclxuICAgICAgICRyZXBlYXQgPSB7XCJ3b3JrX2xpc3RcIjp7XCJjb21cIjpcImluZm9cIixcInByb3BzXCI6XCJsaXN0LnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJpbmZvXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJ3b3JrX2xpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDpsaXN0LnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJ3b3JrX2xpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInhtbG5zOnYtb25cIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcIndvcmtfbGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7XCJpbmZvXCI6e1widi1vbjppbmZvVGFwXCI6XCJkZXRhaWxUYXBcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgaW5mbzogaW5mb1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICB3b3JrX2xpc3Q6W10sXHJcbiAgICAgICAgICAgIHNlbGVjdF9jaXR5Ont9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIGdldFdvcmtMaXN0KHNlc3Nfa2V5LGtleSkge1xyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRpcC5sb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkucmVjV29ya0xpc3Qoe21ldGhvZDonUE9TVCcscXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgc2Vzc19rZXk6IHNlc3Nfa2V5LFxyXG4gICAgICAgICAgICAgICAgaXNfcmVjOjIsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hfbmFtZTprZXksXHJcbi8vICAgICAgICAgICAgICAgIHBhZ2U6TnVtYmVyKHRoYXQucGFnZV9pbmZvLmN1cl9wYWdlKSArMSB8fCAxLFxyXG4vLyAgICAgICAgICAgICAgICBwYWdlX3NpemU6dGhhdC5wYWdlX2luZm8ucGFnZV9zaXplXHJcbiAgICAgICAgICAgIH19KTtcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEuZXJyb3JfY29kZSA9PSAwICl7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5iaXpvYmouZGF0YSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LndvcmtfbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucGFnZV9pbmZvID0ge2N1cl9wYWdlOjAsIHBhZ2Vfc2l6ZTogOCwgdG90YWxfaXRlbXM6IDIsIHRvdGFsX3BhZ2VzOiAxfTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4vLyAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mby5jdXJfcGFnZSAhPSAxICYmIHJlcy5kYXRhLmJpem9iai5wYWdlX2luZm8uY3VyX3BhZ2UgPD0gcmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mby50b3RhbF9wYWdlcyApe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQud29ya19saXN0ID10aGF0LndvcmtfbGlzdC5jb25jYXQocmVzLmRhdGEuYml6b2JqLmRhdGEpIDtcclxuLy8gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LndvcmtfbGlzdCA9IHJlcy5kYXRhLmJpem9iai5kYXRhO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuaGVpZ2h0ID0gKHRoYXQud29ya19saXN0Lmxlbmd0aCArIDEpICogMTYwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucGFnZV9pbmZvID0gcmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mbztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgdGlwLmxvYWRlZCgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5lcnJvcl9tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZCgpe1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgb25VbmxvYWQoKXtcclxuXHJcbi8vICAgICAgICAgICAgb25maXJlLmZpcmUoJ3NlYXJjaCcsIHsgaW5wdXRWYWw6IHRoaXMuc2VsZWN0X2NpdHkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIGlucHV0Qmx1cihlKXtcclxuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZXNzX2tleScsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdldFdvcmtMaXN0KHJlcy5kYXRhLGUuZGV0YWlsLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FuY2VsVGFwKCl7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZXRhaWxUYXAodil7XHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZXNzX2tleScsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvd29yay93b3JrRGV0YWlscz9zZXNzX2tleT0nICsgcmVzLmRhdGEgKyAnJmlkPScgKyB2LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4iXX0=