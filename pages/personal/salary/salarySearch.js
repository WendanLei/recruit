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

var _noData = require('./../../../components/common/noData.js');

var _noData2 = _interopRequireDefault(_noData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var salarySearch = function (_wepy$page) {
    _inherits(salarySearch, _wepy$page);

    function salarySearch() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, salarySearch);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = salarySearch.__proto__ || Object.getPrototypeOf(salarySearch)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '薪资查询'
        }, _this2.$repeat = {}, _this2.$props = { "NoData": {} }, _this2.$events = {}, _this2.components = {
            NoData: _noData2.default
        }, _this2.data = {
            list: [],
            isShowNoData: false,
            sess_key: '',
            id_num: '',
            company_name: '',
            page_info: { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 },
            isShowLoadMore: false
            // 获取薪资列表
        }, _this2.methods = {
            formSubmit: function formSubmit(e) {
                if (!e.detail.value.id_num) {
                    _tip2.default.error('请输入身份证号',20000);
                    return;
                }
                this.id_num = e.detail.value.id_num;
                this.company_name = e.detail.value.company_name;
                this.getsalaryList();
            },
            loadMore: function loadMore() {
                var _this = this;
                if (_this.page_info.cur_page == _this.page_info.total_pages) {
                    _this.isShowLoadMore = false;
                    wx.showToast({ //如果全部加载完成了也弹一个框
                        title: '我也是有底线的',
                        icon: 'success',
                        duration: 2000
                    });
                } else {
                    wx.getStorage({
                        key: 'sess_key',
                        success: function success(res) {
                            _this.getsalaryList();
                        }
                    });
                }
            },
            goUrl: function goUrl(date, id) {
                wx.navigateTo({
                    url: '/pages/personal/salary/salaryDetail?date=' + date + '&id=' + id
                });
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(salarySearch, [{
        key: 'getsalaryList',
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
                                return _api2.default.salaryList({ method: 'POST', query: {
                                        sess_key: that.sess_key,
                                        id_num: that.id_num,
                                        company_name: '', //that.company_name,
                                        page: Number(that.page_info.cur_page) + 1 || 1,
                                        page_size: that.page_info.page_size
                                    } });

                            case 4:
                                res = _context.sent;

                                if (res.data.error_code == '0') {
                                    if (res.data.bizobj.data == null) {
                                        that.list = [];
                                        that.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 };
                                        that.isShowLoadMore = false;
                                        this.isShowNoData = true;
                                    } else {
                                        if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                                            that.list = that.list.concat(res.data.bizobj.data);
                                            that.isShowLoadMore = false;
                                        } else {
                                            that.list = res.data.bizobj.data;
                                            that.isShowLoadMore = true;
                                        }
                                        that.page_info = res.data.bizobj.page_info;
                                    }
                                    that.$apply();
                                    _tip2.default.loaded();
                                } else {
                                    _tip2.default.error(res.data.msg);
                                   // _tip2.default.error(123);
                                }

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getsalaryList() {
                return _ref2.apply(this, arguments);
            }

            return getsalaryList;
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

    return salarySearch;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(salarySearch , 'pages/personal/salary/salarySearch'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGFyeVNlYXJjaC5qcyJdLCJuYW1lcyI6WyJzYWxhcnlTZWFyY2giLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiTm9EYXRhIiwiZGF0YSIsImxpc3QiLCJpc1Nob3dOb0RhdGEiLCJzZXNzX2tleSIsImlkX251bSIsImNvbXBhbnlfbmFtZSIsInBhZ2VfaW5mbyIsImN1cl9wYWdlIiwicGFnZV9zaXplIiwidG90YWxfaXRlbXMiLCJ0b3RhbF9wYWdlcyIsImlzU2hvd0xvYWRNb3JlIiwibWV0aG9kcyIsImZvcm1TdWJtaXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJ0aXAiLCJlcnJvciIsImdldHNhbGFyeUxpc3QiLCJsb2FkTW9yZSIsIl90aGlzIiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImdldFN0b3JhZ2UiLCJrZXkiLCJzdWNjZXNzIiwicmVzIiwiZ29VcmwiLCJkYXRlIiwiaWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidGhhdCIsImxvYWRpbmciLCJhcGkiLCJzYWxhcnlMaXN0IiwibWV0aG9kIiwicXVlcnkiLCJwYWdlIiwiTnVtYmVyIiwiZXJyb3JfY29kZSIsImJpem9iaiIsImNvbmNhdCIsIiRhcHBseSIsImxvYWRlZCIsIm1zZyIsIndlcHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsWTs7Ozs7Ozs7Ozs7Ozs7eU1BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsU0FHVkMsTyxHQUFVLEUsU0FDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBVixFLFNBQ1RDLE8sR0FBVSxFLFNBQ1RDLFUsR0FBYTtBQUNGQyxvQkFBUUE7QUFETixTLFNBR05DLEksR0FBTztBQUNIQyxrQkFBSyxFQURGO0FBRUhDLDBCQUFjLEtBRlg7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QUFDdkgwQixpREFBS25DLElBQUwsR0FBV21DLEtBQUtuQyxJQUFMLENBQVU2QyxNQUFWLENBQWlCaEIsSUFBSTlCLElBQUosQ0FBUzZDLE1BQVQsQ0FBZ0I3QyxJQUFqQyxDQUFYO0FBQ0FvQyxpREFBS3pCLGNBQUwsR0FBc0IsS0FBdEI7QUFDSCx5Q0FIRCxNQUdLO0FBQ0R5QixpREFBS25DLElBQUwsR0FBWTZCLElBQUk5QixJQUFKLENBQVM2QyxNQUFULENBQWdCN0MsSUFBNUI7QUFDQW9DLGlEQUFLekIsY0FBTCxHQUFzQixJQUF0QjtBQUNIO0FBQ0R5Qiw2Q0FBSzlCLFNBQUwsR0FBaUJ3QixJQUFJOUIsSUFBSixDQUFTNkMsTUFBVCxDQUFnQnZDLFNBQWpDO0FBQ0g7QUFDRDhCLHlDQUFLVyxNQUFMO0FBQ0E5QixrREFBSStCLE1BQUo7QUFDSCxpQ0FsQkQsTUFrQks7QUFDRC9CLGtEQUFJQyxLQUFKLENBQVVZLElBQUk5QixJQUFKLENBQVNpRCxHQUFuQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBRUQ7QUFDSixnQkFBSTVCLFFBQVEsSUFBWjtBQUNBQyxlQUFHSyxVQUFILENBQWM7QUFDVkMscUJBQUssVUFESztBQUVWQyx5QkFBUyxpQkFBU0MsR0FBVCxFQUFhO0FBQ2xCVCwwQkFBTWxCLFFBQU4sR0FBaUIyQixJQUFJOUIsSUFBckI7QUFDSDtBQUpTLGFBQWQ7QUFNSDs7OztFQTVEcUNrRCxlQUFLUixJOztrQkFBMUJsRCxZIiwiZmlsZSI6InNhbGFyeVNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQgdGlwIGZyb20gJy4uLy4uLy4uL3V0aWxzL3RpcCc7XHJcbiAgICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xyXG4gICAgaW1wb3J0IE5vRGF0YSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9ub0RhdGEnO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2FsYXJ5U2VhcmNoIGV4dGVuZHMgd2VweS5wYWdle1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iWqui1hOafpeivoidcclxuICAgICAgICB9XHJcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIk5vRGF0YVwiOnt9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgTm9EYXRhOiBOb0RhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgbGlzdDpbXSxcclxuICAgICAgICAgICAgaXNTaG93Tm9EYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgc2Vzc19rZXk6ICcnLFxyXG4gICAgICAgICAgICBpZF9udW06ICcnLFxyXG4gICAgICAgICAgICBjb21wYW55X25hbWU6ICcnLFxyXG4gICAgICAgICAgICBwYWdlX2luZm86e2N1cl9wYWdlOjAsIHBhZ2Vfc2l6ZTogOCwgdG90YWxfaXRlbXM6IDIsIHRvdGFsX3BhZ2VzOiAxfSxcclxuICAgICAgICAgICAgaXNTaG93TG9hZE1vcmU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOiOt+WPluiWqui1hOWIl+ihqFxyXG4gICAgICAgIGFzeW5jIGdldHNhbGFyeUxpc3QoKSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgdGlwLmxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuc2FsYXJ5TGlzdCh7bWV0aG9kOidQT1NUJywgcXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzX2tleTp0aGF0LnNlc3Nfa2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZF9udW06IHRoYXQuaWRfbnVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55X25hbWU6ICcnLC8vdGhhdC5jb21wYW55X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6TnVtYmVyKHRoYXQucGFnZV9pbmZvLmN1cl9wYWdlKSArMSB8fCAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlX3NpemU6dGhhdC5wYWdlX2luZm8ucGFnZV9zaXplXHJcbiAgICAgICAgICAgICAgICAgICAgfX0pXHJcbiAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5lcnJvcl9jb2RlID09ICcwJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuYml6b2JqLmRhdGEgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfaW5mbyA9IHtjdXJfcGFnZTowLCBwYWdlX3NpemU6IDgsIHRvdGFsX2l0ZW1zOiAyLCB0b3RhbF9wYWdlczogMX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaXNTaG93TG9hZE1vcmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dOb0RhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvLmN1cl9wYWdlICE9IDEgJiYgcmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mby5jdXJfcGFnZSA8PSByZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvLnRvdGFsX3BhZ2VzICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxpc3QgPXRoYXQubGlzdC5jb25jYXQocmVzLmRhdGEuYml6b2JqLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pc1Nob3dMb2FkTW9yZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubGlzdCA9IHJlcy5kYXRhLmJpem9iai5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pc1Nob3dMb2FkTW9yZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wYWdlX2luZm8gPSByZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLmxvYWRlZCgpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aXAuZXJyb3IocmVzLmRhdGEubXNnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvbkxvYWQoKXtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdzZXNzX2tleScsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNlc3Nfa2V5ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBmb3JtU3VibWl0OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBpZighZS5kZXRhaWwudmFsdWUuaWRfbnVtKXtcclxuICAgICAgICAgICAgICAgICAgICB0aXAuZXJyb3IoJ+ivt+i+k+WFpei6q+S7veivgeWPtycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pZF9udW0gPSBlLmRldGFpbC52YWx1ZS5pZF9udW07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBhbnlfbmFtZSA9IGUuZGV0YWlsLnZhbHVlLmNvbXBhbnlfbmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0c2FsYXJ5TGlzdCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2FkTW9yZSgpe1xyXG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGlmKF90aGlzLnBhZ2VfaW5mby5jdXJfcGFnZSA9PSBfdGhpcy5wYWdlX2luZm8udG90YWxfcGFnZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmlzU2hvd0xvYWRNb3JlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHsgLy/lpoLmnpzlhajpg6jliqDovb3lrozmiJDkuobkuZ/lvLnkuIDkuKrmoYZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJHkuZ/mmK/mnInlupXnur/nmoQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZXNzX2tleScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5nZXRzYWxhcnlMaXN0KCk7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ29VcmwoZGF0ZSwgaWQpe1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3BlcnNvbmFsL3NhbGFyeS9zYWxhcnlEZXRhaWw/ZGF0ZT0nK2RhdGUrJyZpZD0nK2lkXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuIl19