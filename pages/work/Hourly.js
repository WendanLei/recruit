'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var regeneratorRuntime = require('../../npm/regenerator-runtime/runtime.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _api = require('./../../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _navigator = require('./../../components/common/navigator.js');

var _navigator2 = _interopRequireDefault(_navigator);

var _info = require('./../../components/common/info.js');

var _info2 = _interopRequireDefault(_info);

var _button = require('./../../components/common/button.js');

var _button2 = _interopRequireDefault(_button);

var _onfire = require('./../../npm/onfire.js/dist/onfire.min.js');

var _onfire2 = _interopRequireDefault(_onfire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var workIndex = function (_wepy$page) {
  _inherits(workIndex, _wepy$page);

  function workIndex() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, workIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = workIndex.__proto__ || Object.getPrototypeOf(workIndex)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      navigationBarTitleText: '工作',
      navigationBarBackgroundColor: '#fff',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh: true
    }, _this2.$repeat = { "nav_list": { "com": "nav", "props": "list.sync" }, "work_list": { "com": "info", "props": "list.sync" }, "data_list": { "com": "btn", "props": "info.sync" }, "all_list": { "com": "info", "props": "list.sync" } }, _this2.$props = { "nav": { "xmlns:v-bind": { "value": "", "for": "nav_list", "item": "item", "index": "index", "key": "index" }, "v-bind:list.sync": { "value": "item", "type": "item", "for": "nav_list", "item": "item", "index": "index", "key": "index" }, "v-bind:index.sync": { "value": "index", "type": "index", "for": "nav_list", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "nav_list", "item": "item", "index": "index", "key": "index" } }, "info": { "v-bind:list.sync": { "value": "item", "type": "item", "for": "all_list", "item": "item", "index": "index", "key": "index" } }, "btn": { "v-bind:info.sync": { "value": "item", "type": "item", "for": "data_list.sort_data", "item": "item", "index": "index", "key": "index" }, "v-bind:select.once": { "value": "select_list.sort_data", "for": "data_list.sort_data", "item": "item", "index": "index", "key": "index" }, "v-bind:index.sync": { "value": "index", "type": "index", "for": "data_list.sort_data", "item": "item", "index": "index", "key": "index" } } }, _this2.$events = { "nav": { "v-on:navTap": "navTap" }, "info": { "v-on:infoTap": "detailTap" }, "btn": { "v-on:btnTap": "btnTap" } }, _this2.components = {
      nav: _navigator2.default,
      info: _info2.default,
      btn: _button2.default
    }, _this2.data = {
      nav_list: [{
        name: '地区',
        up: false,
        data: 'area_data'
      }, {
        name: '职位',
        up: false,
        data: 'job_data'
      }, {
        name: '排序',
        up: false,
        data: 'sort_data'
      }],
      data_list: {
        area_data: [],
        job_data: [],
        sort_data: [{
          sort_way: 1,
          name: '最新排序'
        }, {
          sort_way: 2,
          name: '工资最高'
        }, {
          sort_way: 3,
          name: '奖励金最高'
        }]
      },
      work_list: [],
      select_list: {
        area_data: {},
        job_data: {},
        sort_data: {}
      },
      page_info: { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 },
      all_list: [],
      userData: {},
    }, _this2.methods = {
      navTap: function navTap(v) {
        for (var i = 0; i < this.nav_list.length; i++) {
          i == v ? this.nav_list[v].up = !this.nav_list[v].up : this.nav_list[i].up = false;
        }
        this.$apply();
      },
      btnTap: function btnTap(v) {
        if (v.areano) {
          this.select_list.area_data = v;
        } else if (v.id) {
          this.select_list.job_data = v;
        } else {
          this.select_list.sort_data = v;
        }
        var _this = this;
        _this.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 };
        wx.getStorage({
          key: 'sess_key',
          success: function success(res) {
            _this.getWorkList(res.data);
          }
        });
        this.$apply();
      },
      detailTap: function detailTap(v) {
       
       
        wx.navigateTo({
          url: '/pages/work/workDetails?sess_key=' + wx.getStorageSync('sess_key') + '&id=' + v.id
        });
      },
      coverTap: function coverTap(v) {
        this.nav_list[v].up = false;
      }
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(workIndex, [{
    key: 'getuserInfo',
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
                return _api2.default.userInfo({
                  method: 'POST', query: {
                    sess_key: sess_key
                  }
                });

              case 4:
                res = _context.sent;
                console.log(res)
                if (res.data.error_code == '0') {
                  console.log(res)
                  that.userData = res.data.bizobj.data;

                  that.$apply();
                  _tip2.default.loaded();
                }

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getuserInfo(_x) {
        return _ref2.apply(this, arguments);
      }

      return getuserInfo;
    }()
   

  }, {
    key: 'getWorkList',
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
            
                return _api2.default.miniWorkList({
                  method: 'POST', query: {
                    sess_key: sess_key,
                    areano: that.select_list.area_data.areano || '',
                    job_type: that.select_list.job_data.id || '',
                    sort_way: that.select_list.sort_data.sort_way || '',
                    page: Number(that.page_info.cur_page) + 1 || 1,
                    page_size: that.page_info.page_size
                  }
                });

              case 4:
                res = _context.sent;

                if (res.data.error_code == 0) {
                  if (res.data.bizobj.data == null) {
                    that.all_list = [];
                    that.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 };
                  } else if (res.data.bizobj.page_info.cur_page != 1) {
                    that.all_list = that.all_list.concat(res.data.bizobj.data);
                    that.page_info = res.data.bizobj.page_info;
                  } else {
                    that.all_list = res.data.bizobj.data;
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

      function getWorkList(_x) {
        return _ref2.apply(this, arguments);
      }

      return getWorkList;
    }()
  }, {
    key: 'cityList',
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
                return _api2.default.cityList({
                  method: 'POST', query: {
                    sess_key: sess_key
                  }
                });

              case 4:
                res = _context2.sent;

                if (res.data.error_code == 0) {
                  that.data_list.area_data = res.data.bizobj.data.recruit_citys;
                  that.$apply();
                  _tip2.default.loaded();
                } else {
                  _tip2.default.error(res.data.error_msg);
                }

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function cityList(_x2) {
        return _ref3.apply(this, arguments);
      }

      return cityList;
    }()
  }, {
    key: 'workTypeList',
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
                return _api2.default.workTypeList({
                  method: 'POST', query: {
                    sess_key: sess_key
                  }
                });

              case 4:
                res = _context3.sent;

                if (res.data.error_code == 0) {
                  that.data_list.job_data = res.data.bizobj.data;
                  that.$apply();
                  _tip2.default.loaded();
                } else {
                  _tip2.default.error(res.data.error_msg);
                }

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function workTypeList(_x3) {
        return _ref4.apply(this, arguments);
      }

      return workTypeList;
    }()
  }, {
      key: 'onShow',
      value: function onShow() {
        var _this = this;
        wx.hideShareMenu();
        _this.page_info.cur_page = 0;
        _onfire2.default.on('work', function (args) {
          _this.select_list.area_data = {};
          _this.select_list.job_data = {};
          _this.select_list.sort_data = {};
          for (var i = 0; i < _this.nav_list.length; i++) {
            _this.nav_list[i].up = false;
          }
          wx.getStorage({
            key: 'sess_key',
            success: function success(res) {
              _this.getWorkList(res.data);
              _this.cityList(res.data);
              _this.workTypeList(res.data);
            }
          });
        });
        wx.getStorage({
          key: 'sess_key',
          success: function success(res) {
            _this.getWorkList(res.data);
            _this.cityList(res.data);
            _this.workTypeList(res.data);
            _this.getuserInfo(res.data);
          }
        });
        _this.getWorkList();
        _this.cityList();
        _this.workTypeList();
      }
    }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      var _this = this;
      _this.all_list = [];
      _this.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 };
      wx.getStorage({
        key: 'sess_key',
        success: function success(res) {
          _this.getWorkList(res.data);
        }
      });
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
            _this.getWorkList(res.data);
          }
        });
      }
    }
  }]);

  return workIndex;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(workIndex, 'pages/work/index'));

