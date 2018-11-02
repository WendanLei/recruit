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

var _info = require('./../../../components/common/info.js');

var _info2 = _interopRequireDefault(_info);

var _onfire = require('./../../../npm/onfire.js/dist/onfire.min.js');

var _onfire2 = _interopRequireDefault(_onfire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noticeList = function (_wepy$page) {
  _inherits(noticeList, _wepy$page);

  function noticeList() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, noticeList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = noticeList.__proto__ || Object.getPrototypeOf(noticeList)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
      index: 0,
      sess_key: '',
      noticeList: [],
      page_info: { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 },
     
    }, _this2.methods = {
      readNotice: function (e){
        let that=this;
        console.log(e)
        if (e.currentTarget.dataset.read==2)
        wx.getStorage({
          key: 'sess_key',
          success: function(res) {
            that.noticeRead(res.data, e.currentTarget.dataset.id);
            wx.showToast({
              title: '已成功查看',
              icon: 'success',
              duration: 2000
            })
          },
        })
        that.$apply();
      }
     
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(noticeList, [{
    key: 'getnoticeList',
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
                return _api2.default.noticeList({
                  method: 'POST', query: {
                    sess_key: sess_key,
                    page: Number(that.page_info.cur_page) + 1 || 1,
                    page_size: that.page_info.page_size
                  }
                });

              case 4:
                res = _context.sent;

                if (res.data.error_code == '0') {
                  if (res.data.bizobj.data == null) {
                    that.noticeList = [];
                    that.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 };
                  } else {
                    if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                      that.noticeList = that.noticeList.concat(res.data.bizobj.data);
                    } else {
                      that.noticeList = res.data.bizobj.data;
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

      function getnoticeList(_x) {
        return _ref2.apply(this, arguments);
      }

      return getnoticeList;
    }()
   
  }, 
    {
      key: 'noticeRead',
      value: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key,_id) {
          var that, res;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  that = this;

                  _tip2.default.loading();
                  _context.next = 4;
                  return _api2.default.noticeRead({
                    method: 'POST', query: {
                      sess_key: sess_key,
                      id: _id
                    }
                  });

                case 4:
                  res = _context.sent;

                  if (res.data.error_code == '0') {
                    that.page_info.cur_page = that.page_info.cur_page-1;
                    that.getnoticeList(sess_key);
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

        function noticeRead(_x,_id) {
          return _ref2.apply(this, arguments);
        }

        return noticeRead;
      }()

    }, 
  {
    key: 'onLoad',
    value: function onLoad() {
      var _this = this;
      wx.getStorage({
        key: 'sess_key',
        success: function success(res) {
          _this.sess_key = res.data;
          _this.getnoticeList(res.data);
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
          duration: 2000
        });
      } else {
        wx.getStorage({
          key: 'sess_key',
          success: function success(res) {
            
            _this.getnoticeList(res.data);
            
          }
        });
      }
    }
  }]);

  return noticeList;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(noticeList, 'pages/personal/information/information'));
