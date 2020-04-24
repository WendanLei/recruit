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

var _htmlParser = require('./../../components/common/htmlParser.js');

var _htmlParser2 = _interopRequireDefault(_htmlParser);

var _wxParse = require('./../../wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var companyInfo = function (_wepy$page) {
  _inherits(companyInfo, _wepy$page);

  function companyInfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, companyInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = companyInfo.__proto__ || Object.getPrototypeOf(companyInfo)).call.apply(_ref, [this].concat(args))), _this),  _this.data = {
      swiper: {
        imgUrls: ['https://recruit.czucw.com/uploads/20180630/174242303351065edf04bca55b961e7a.jpeg'],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000
      },
      companyInfo:null,
      all_list:[],
      page_info: { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 },
      activeIndex:0,
      compId:null,
    }, _this.methods = {
     tab :function(e){
        var index=e.currentTarget.dataset.index;
       this.activeIndex = index;
        if(index=='0'){
          wx.navigateTo({
            url: '../personal/profile/certification',
          })
        }
        else if(index==1){
          wx.switchTab({
            url: '../personal/index',
          })
        }else{
          wx.switchTab({
            url: './index',
          })
        }
        this.$apply();
     },
      detail: function detail(v) {
        console.log(v)
        wx.getStorage({
          key: 'sess_key',
          success: function success(res) {
            wx.navigateTo({
              url: '/pages/work/workDetails?sess_key=' + res.data + '&id=' + v.currentTarget.id
            });
          }
        });
      },
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(companyInfo, [{
    key: 'getcompanyInfo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key, _id, _ukey) {
        var that, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
           
            switch (_context.prev = _context.next) {
              case 0:
                that = this;

                _tip2.default.loading();
                _context.next = 4;
                return _api2.default.companyInfo({
                  method: 'POST', query: {
                    sess_key: sess_key,
                    id: _id,
                    ukey: _ukey
                  
                  }
                });

              case 4:
                res = _context.sent;

                if (res.data.error_code == 0) {
                  
                  that.companyInfo = res.data.bizobj.data; 
                  wx.setNavigationBarTitle({
                    title: res.data.bizobj.data.name
                  })                 
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

      function getcompanyInfo(_x, _x2,_x3) {
        return _ref2.apply(this, arguments);
      }

      return getcompanyInfo;
    }()
    
  }, {
      key: 'getCompanyList',
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
                  return _api2.default.companyworkList({
                    method: 'POST', query: {
                      sess_key: sess_key,
                      id:_id,
                      page: Number(that.page_info.cur_page) + 1 || 1,
                      page_size: that.page_info.page_size
                    }
                  });

                case 4:
                  res = _context.sent;
                  console.log("???", "//////")
                  if (res.data.error_code == 0) {
                    console.log(res.data.bizobj.page_info.cur_page != 1,"//////")
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

        function getCompanyList(_x,_x1) {
          return _ref2.apply(this, arguments);
        }

        return getCompanyList;
      }()
    },{
    key: 'onLoad',
    value: function onLoad(options) {
    var _this = this;
      wx.hideShareMenu();
     wx.getStorage({
       key: 'sess_key',
       success: function(res) {
         _this.getcompanyInfo(res.data, options.id, options.ukey);
         _this.getCompanyList(res.data, options.id);
         _this.compId = options.id;
        
       },
     })

    }
    
    }, {
      key: 'onReachBottom',
      value: function onReachBottom() {
        var _this = this;
        console.log("??????????")
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
              _this.getCompanyList(res.data, _this.compId);
            }
          });
        }
      }
      }]);

  return companyInfo;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(companyInfo, 'pages/index/companyDetail'));

