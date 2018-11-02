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

var _ranking = require('./../../components/common/ranking.js');

var _ranking2 = _interopRequireDefault(_ranking);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bole = function (_wepy$page) {
    _inherits(Bole, _wepy$page);

    function Bole() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, Bole);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Bole.__proto__ || Object.getPrototypeOf(Bole)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '伯乐排行',
            navigationBarBackgroundColor: '#fff',
            navigationBarTextStyle: 'black',
            backgroundTextStyle: "dark"
        }, _this2.$repeat = { "rank_list": { "com": "ranking", "props": "list.sync" } }, _this2.$props = { "ranking": { "xmlns:v-bind": { "value": "", "for": "rank_list", "item": "item", "index": "index", "key": "index" }, "v-bind:list.sync": { "value": "item", "type": "item", "for": "rank_list", "item": "item", "index": "index", "key": "index" }, "v-bind:index.sync": { "value": "index", "type": "index", "for": "rank_list", "item": "item", "index": "index", "key": "index" } } }, _this2.$events = {}, _this2.components = {
            ranking: _ranking2.default
        }, _this2.data = {
            rank_list: [{
                name: '技能培训',
                src: 'icon_jnpx',
                price: '6000元',
                url: ''
            }, {
                name: '技能培训',
                src: 'icon_jnpx',
                price: '4000元',
                url: ''
            }, {
                name: '技能培训',
                src: 'icon_jnpx',
                price: '3000元',
                url: ''
            }, {
                name: '技能培训',
                src: 'icon_jnpx',
                price: '2000元',
                url: ''
            }]
        }, _this2.methods = {
            boleTap: function boleTap() {
                wx.navigateTo({
                    url: '/pages/personal/code/code'
                });
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(Bole, [{
        key: 'getblList',
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
                                return _api2.default.blList({ method: 'POST', query: {
                                        sess_key: sess_key
                                    } });

                            case 4:
                                res = _context.sent;

                                if (res.data.error_code == 0) {
                                    that.rank_list = res.data.bizobj.data;
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

            function getblList(_x) {
                return _ref2.apply(this, arguments);
            }

            return getblList;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var _this = this;
            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                    _this.getblList(res.data);
                }
            });
        }
    }]);

    return Bole;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Bole , 'pages/index/bole'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbGUuanMiXSwibmFtZXMiOlsiQm9sZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImJhY2tncm91bmRUZXh0U3R5bGUiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJyYW5raW5nIiwiZGF0YSIsInJhbmtfbGlzdCIsIm5hbWUiLCJzcmMiLCJwcmljZSIsInVybCIsIm1ldGhvZHMiLCJib2xlVGFwIiwid3giLCJuYXZpZ2F0ZVRvIiwic2Vzc19rZXkiLCJ0aGF0IiwidGlwIiwibG9hZGluZyIsImFwaSIsImJsTGlzdCIsIm1ldGhvZCIsInF1ZXJ5IiwicmVzIiwiZXJyb3JfY29kZSIsImJpem9iaiIsIiRhcHBseSIsImxvYWRlZCIsImVycm9yIiwiZXJyb3JfbXNnIiwiX3RoaXMiLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsImdldGJsTGlzdCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3lMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQywwQ0FBOEIsTUFGekI7QUFHTEMsb0NBQXdCLE9BSG5CO0FBSUxDLGlDQUFvQjtBQUpmLFMsU0FNVkMsTyxHQUFVLEVBQUMsYUFBWSxFQUFDLE9BQU0sU0FBUCxFQUFpQixTQUFRLFdBQXpCLEVBQWIsRSxTQUNqQkMsTSxHQUFTLEVBQUMsV0FBVSxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxXQUFsQixFQUE4QixRQUFPLE1BQXJDLEVBQTRDLFNBQVEsT0FBcEQsRUFBNEQsT0FBTSxPQUFsRSxFQUFoQixFQUEyRixvQkFBbUIsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLFdBQXBDLEVBQWdELFFBQU8sTUFBdkQsRUFBOEQsU0FBUSxPQUF0RSxFQUE4RSxPQUFNLE9BQXBGLEVBQTlHLEVBQTJNLHFCQUFvQixFQUFDLFNBQVEsT0FBVCxFQUFpQixRQUFPLE9BQXhCLEVBQWdDLE9BQU0sV0FBdEMsRUFBa0QsUUFBTyxNQUF6RCxFQUFnRSxTQUFRLE9BQXhFLEVBQWdGLE9BQU0sT0FBdEYsRUFBL04sRUFBWCxFLFNBQ1RDLE8sR0FBVSxFLFNBQ1RDLFUsR0FBYTtBQUNGQyxxQkFBUUE7QUFETixTLFNBR05DLEksR0FBTztBQUNIQyx1QkFBVSxDQUNOO0FBQ0lDLHNCQUFLLE1BRFQ7QUFFSUMscUJBQUksV0FGUjtBQUdJQyx1QkFBTSxPQUhWO0FBSUlDLHFCQUFJO0FBSlIsYUFETSxFQU9OO0FBQ0lILHNCQUFLLE1BRFQ7QUFFSUMscUJBQUksV0FGUjtBQUdJQyx1QkFBTSxPQUhWO0FBSUlDLHFCQUFJO0FBSlIsYUFQTSxFQWFOO0FBQ0lILHNCQUFLLE1BRFQ7QUFFSUMscUJBQUksV0FGUjtBQUdJQyx1QkFBTSxPQUhWO0FBSUlDLHFCQUFJO0FBSlIsYUFiTSxFQW1CTjtBQUNJSCxzQkFBSyxNQURUO0FBRUlDLHFCQUFJLFdBRlI7QUFHSUMsdUJBQU0sT0FIVjtBQUlJQyxxQkFBSTtBQUpSLGFBbkJNO0FBRFAsUyxTQW9EUEMsTyxHQUFVO0FBQ05DLG1CQURNLHFCQUNHO0FBQ0xDLG1CQUFHQyxVQUFILENBQWM7QUFDVkoseUJBQUk7QUFETSxpQkFBZDtBQUdIO0FBTEssUzs7Ozs7O2lHQXhCTUssUTs7Ozs7O0FBQ1JDLG9DLEdBQU8sSTs7QUFDWEMsOENBQUlDLE9BQUo7O3VDQUNnQkMsY0FBSUMsTUFBSixDQUFXLEVBQUNDLFFBQU8sTUFBUixFQUFlQyxPQUFNO0FBQ3hDUCxrREFBVUE7QUFEOEIscUNBQXJCLEVBQVgsQzs7O0FBQVpRLG1DOztBQUdKLG9DQUFHQSxJQUFJbEIsSUFBSixDQUFTbUIsVUFBVCxJQUF1QixDQUExQixFQUE0QjtBQUN4QlIseUNBQUtWLFNBQUwsR0FBaUJpQixJQUFJbEIsSUFBSixDQUFTb0IsTUFBVCxDQUFnQnBCLElBQWpDO0FBQ0FXLHlDQUFLVSxNQUFMO0FBQ0FULGtEQUFJVSxNQUFKO0FBQ0gsaUNBSkQsTUFJSztBQUNEVixrREFBSVcsS0FBSixDQUFVTCxJQUFJbEIsSUFBSixDQUFTd0IsU0FBbkI7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUVJO0FBQ0wsZ0JBQUlDLFFBQVEsSUFBWjtBQUNBakIsZUFBR2tCLFVBQUgsQ0FBYztBQUNWQyxxQkFBSyxVQURLO0FBRVZDLHlCQUFTLGlCQUFVVixHQUFWLEVBQWU7QUFDcEJPLDBCQUFNSSxTQUFOLENBQWdCWCxJQUFJbEIsSUFBcEI7QUFDSDtBQUpTLGFBQWQ7QUFNSDs7OztFQWhFNkI4QixlQUFLQyxJOztrQkFBbEIxQyxJIiwiZmlsZSI6ImJvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9hcGkvYXBpJztcclxuICAgIGltcG9ydCB0aXAgZnJvbSAnLi4vLi4vdXRpbHMvdGlwJztcclxuICAgIGltcG9ydCByYW5raW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL3JhbmtpbmcnXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBCb2xlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkvK/kuZDmjpLooYwnLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6XCJkYXJrXCJcclxuICAgICAgICB9XHJcbiAgICAgICAkcmVwZWF0ID0ge1wicmFua19saXN0XCI6e1wiY29tXCI6XCJyYW5raW5nXCIsXCJwcm9wc1wiOlwibGlzdC5zeW5jXCJ9fTtcclxuJHByb3BzID0ge1wicmFua2luZ1wiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwicmFua19saXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwicmFua19saXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aW5kZXguc3luY1wiOntcInZhbHVlXCI6XCJpbmRleFwiLFwidHlwZVwiOlwiaW5kZXhcIixcImZvclwiOlwicmFua19saXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgcmFua2luZzpyYW5raW5nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHJhbmtfbGlzdDpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTon5oqA6IO95Z+56K6tJyxcclxuICAgICAgICAgICAgICAgICAgICBzcmM6J2ljb25fam5weCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6JzYwMDDlhYMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDonJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOifmioDog73ln7norq0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHNyYzonaWNvbl9qbnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTonNDAwMOWFgycsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOicnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6J+aKgOiDveWfueiurScsXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOidpY29uX2pucHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiczMDAw5YWDJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6JydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTon5oqA6IO95Z+56K6tJyxcclxuICAgICAgICAgICAgICAgICAgICBzcmM6J2ljb25fam5weCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6JzIwMDDlhYMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDonJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMgZ2V0YmxMaXN0KHNlc3Nfa2V5KSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgdGlwLmxvYWRpbmcoKTtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5ibExpc3Qoe21ldGhvZDonUE9TVCcscXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Nfa2V5OiBzZXNzX2tleVxyXG4gICAgICAgICAgICAgICAgfX0pO1xyXG4gICAgICAgICAgICBpZihyZXMuZGF0YS5lcnJvcl9jb2RlID09IDApe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yYW5rX2xpc3QgPSByZXMuZGF0YS5iaXpvYmouZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB0aXAubG9hZGVkKCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGlwLmVycm9yKHJlcy5kYXRhLmVycm9yX21zZyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdzZXNzX2tleScsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0YmxMaXN0KHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIGJvbGVUYXAoKXtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDonL3BhZ2VzL3BlcnNvbmFsL2NvZGUvY29kZSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==