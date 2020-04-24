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

var SkillDetails = function (_wepy$page) {
    _inherits(SkillDetails, _wepy$page);

    function SkillDetails() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SkillDetails);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SkillDetails.__proto__ || Object.getPrototypeOf(SkillDetails)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
          navigationBarTitleText: _this.detailTitle,
            navigationBarBackgroundColor: '#fff',
            navigationBarTextStyle: 'black'
            //            backgroundTextStyle:"dark"
        }, _this.data = {
            all_data: {
                has_apply: 0
            },
          isShowShare: false,
          isShowShare1: false,
          isShowPhoto: false,
          circlePhoto: '',
          swiper: {
            imgUrls: [],
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 1000
          },
          detailTitle:null,
            name1: "myHtmlParserKiner1",
            content1: "<text style='color: red;'>新1</text>",
          balanceAmount:null,
          payType:null,
          circlePhoto:null,
          userData: {},
          formId:[],
        }, _this.$repeat = {}, _this.$props = { "htmlParser": { "xmlns:v-bind": "", "v-bind:parserName.once": "name1", "v-bind:parserContent.sync": "content1" } }, _this.$events = {}, _this.components = {
            htmlParser: _htmlParser2.default
        }, _this.methods = {
            applyTrain: function applyTrain() {
                var that = this;
              if (that.userData.mobile && that.userData.username){
                if (!that.all_data.has_apply && that.all_data.fee <= 0) {
                  wx.getStorage({
                    key: 'sess_key',
                    success: function success(res) {
                      that.applyTrain(res.data, that.all_data.id);
                    }
                  });
                } else {
                  that.wxpyId = that.all_data.id;
                  that.isShowShare1 = true;
                  that.payType = null;
                  wx.getStorage({
                    key: 'sess_key',
                    success: function (res) {
                      that.getpurseInfo(res.data);
                    },
                  })
                } 
              }else{
                wx.navigateTo({
                  url: '/pages/personal/profile/index',
                })
              }
             
            },
          wxpay: function () {
            var _this = this;
            if (_this.all_data.id && _this.payType){
              if (_this.balanceAmount.available_balance < _this.all_data.fee && _this.payType == 2) {
                wx.showToast({
                  title: '余额不足，请选择微信支付方式',
                  icon: 'none'
                })
              } else {
                wx.getStorage({
                  key: 'sess_key',
                  success: function (res) {
                      _this.miniPay(res.data, _this.all_data.id, _this.payType);
                  },
                })
              }
            } else {
              wx.showToast({
                title: '请先选择付款方式！',
                icon: 'none'
              })
            }
           

          },
          showShare: function showShare() {
            this.isShowShare = true;
            
          },
          hideShare: function hideShare() {
            this.isShowShare = false;
          },
          getPhoto: function getPhoto() {
            this.isShowShare = false;
            this.getCirclePhoto(this.sess_key, this.id);
          },
          hidePhoto: function hidePhoto() {
            this.isShowPhoto = false;
          },
          
          hideShare1: function hideShare() {
            this.isShowShare1 = false;
          },
          checkboxChange: function (e) {
            var _this = this;
            if (e.detail.value[0]){
              if (e.detail.value.length > 1) _this.payType = 3;
              else _this.payType = e.detail.value[0];
            } else _this.payType =0
           
            _this.$apply();
           
          },
          getPhoto: function getPhoto() {
           
            var that=this;
            that.isShowShare = false;
            wx.getStorage({
              key: 'sess_key',
              success: function(res) {
                that.getCirclePhoto(res.data, that.all_data.id);
              },
            })
            
          },
          saveImg: function saveImg() {
            var that = this;
            wx.downloadFile({
              url: that.circlePhoto,
              success: function success(res) {
                var path = res.tempFilePath;
                wx.showToast({
                  title: '正在保存...',
                  icon: 'loading',
                  mask: true,
                  duration: 10000
                });
                wx.saveImageToPhotosAlbum({
                  filePath: path,
                  success: function success(res) {
                    wx.hideToast();
                    wx.showToast({
                      title: '保存成功',
                      icon: 'success',
                      duration: 1000
                    });
                    that.isShowPhoto = false;
                    that.$apply();
                  },
                  fail: function fail(res) {
                  
                    _tip2.default.error('保存失败');
                  },
                  complete: function complete(res) {

                  }
                });
              }, fail: function fail(res) {
                _tip2.default.error('下载失败');
              }
            });
          },
          adDetail: function (e) {
            wx.navigateTo({
              url: '/pages/work/adDetails?title=' + e.currentTarget.dataset.title,
            })
          },
          formSubmit: function (e) {
            var that = this;
            if (that.formId.length < 10) that.formId = that.formId.concat(e.detail.formId);
            if (that.formId.length == 10) {
              wx.getStorage({
                key: 'sess_key',
                success: function (res) {
                  that.getUserFormId(res.data, that.formId.toString());
                  that.formId = [];
                },
              })
            }
          },
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SkillDetails, [{
        key: 'getSkillDetails',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key, id) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context.next = 4;
                            if (that.detailTitle=='培训'){
                              return _api2.default.trainDetail({
                                method: 'POST', query: {
                                  sess_key: sess_key,
                                  id: id
                                }
                              });
                            }
                            else {
                              return _api2.default.activityDetail({
                                method: 'POST', query: {
                                  sess_key: sess_key,
                                  id: id
                                }
                              });
                            }
                              

                            case 4:
                                res = _context.sent;

                                if (res.data.error_code == 0) {
                                    that.all_data = res.data.bizobj.data;
                                    _wxParse2.default.wxParse('htmlParserName', "html", res.data.bizobj.data.content, that, 0);
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

            function getSkillDetails(_x, _x2) {
                return _ref2.apply(this, arguments);
            }

            return getSkillDetails;
        }()
    }, {
        key: 'getUserFormId',
        value: function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key, forum) {
            var that, res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {

                switch (_context.prev = _context.next) {
                  case 0:
                    that = this;

                    _tip2.default.loading();
                    _context.next = 4;
                    return _api2.default.getUserFormId({
                      method: 'POST', query: {
                        sess_key: sess_key,
                        forum: forum,

                      }
                    });

                  case 4:
                    res = _context.sent;

                    if (res.data.error_code == 0) {

                      that.$apply();

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

          function getUserFormId(_x, _x2) {
            return _ref2.apply(this, arguments);
          }

          return getUserFormId;
        }()
      }, {
        key: 'getCirclePhoto',
        value: function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key, id) {
            var that, res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    that = this;

                    _tip2.default.loading();
                    _context.next = 4;
                    return _api2.default.trainDetailSharePic({
                      method: 'POST', query: {
                        sess_key: sess_key,
                        id: id
                      }
                    });

                  case 4:
                    res = _context.sent;

                    if (res.data.error_code == 0) {
                      that.circlePhoto = res.data.bizobj.data;
                      this.isShowPhoto = true;
                      that.$apply();
                      _tip2.default.loaded();
                    } else {
                      wx.showToast({
                        title: res.data.msg,
                        icon: 'none',
                        duration: 1000
                      });
                    }

                  case 6:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function getCirclePhoto(_x, _x2) {
            return _ref2.apply(this, arguments);
          }

          return getCirclePhoto;
        }()
      }, {
        key: 'applyTrain',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sess_key, id) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context2.next = 4;
                                return _api2.default.applyTrain({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        id: id
                                    } });

                            case 4:
                                res = _context2.sent;

                                if (res.data.error_code == 0) {
                                  
                                    that.all_data.has_apply = 1;
                                  console.log(that.all_data.has_apply, "//////");
                                    that.$apply();
                                    wx.showToast({
                                        title: '报名成功',
                                        icon: 'success',
                                        duration: 1000
                                    });
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

            function applyTrain(_x3, _x4) {
                return _ref3.apply(this, arguments);
            }

            return applyTrain;
        }()
      }, {
        key: 'getpurseInfo',
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
                    return _api2.default.purseInfo({
                      method: 'POST', query: {
                        sess_key: sess_key,

                      }
                    });

                  case 4:
                    res = _context.sent;

                    if (res.data.error_code == 0) {
                      that.balanceAmount = res.data.bizobj.data;
                      that.$apply();
                    }
                  case 6:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
          function getpurseInfo(_x) {
            return _ref2.apply(this, arguments);
          }
          return getpurseInfo;
        }()
      }, {
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

                    if (res.data.error_code == '0') {
                      that.userData = res.data.bizobj.data;
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

          function getuserInfo(_x) {
            return _ref2.apply(this, arguments);
          }

          return getuserInfo;
        }()
        // 短信验证码

      },  {
        key: 'miniPay',
        value: function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key, _id, _type) {
            var that, _results;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    that = this;
                    _context.next = 4;
                    return _api2.default.miniPay({
                      method: 'GET', query: {
                        sess_key: sess_key,
                        id: _id,
                        paytype: _type
                      }
                    });
                  case 4:
                    _results = _context.sent;
                    if (_results.statusCode == 200 && _results.data && ((that.balanceAmount.available_balance < that.all_data.fee && _type == 3) || _type == 1)) 
                     {
                      wx.requestPayment({
                        'timeStamp': _results.data.timeStamp + "",
                        'nonceStr': _results.data.nonceStr + "",
                        'package': _results.data.package + "",
                        'signType': 'MD5',
                        'paySign': _results.data.paySign + "",
                        'success': function (res) {
                          that.all_data.has_apply=1;
                        },
                        'fail': function (res) {
                          // _tip2.default.error(res.error_msg);
                          wx.showToast({
                            title: '付款失败',
                            image: '../../images/error.png',
                            duration: 1000
                          })
                        }
                      })
                      that.isShowShare1 = false;
                      that.$apply();
                    } else {
                        if (_results.data.msg == 'success') {
                         
                          that.$apply();
                          _tip2.default.success("余额付款成功");
                        } 
                        else _tip2.default.error(_results.data.msg);
                        that.isShowShare1 = false;
                        that.$apply();
                        if (_results.statusCode == 4) {
                          wx.navigateTo({
                            url: '/pages/personal/login',
                          })
                        }
                    }
                  case 6:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
          function miniPay(_x, _x2) {
            return _ref2.apply(this, arguments);
          }
          return miniPay;
        }()
      }, {
        key:'onShow',
        value: function onShow() {
 
          var _this = this;
          wx.getStorage({
            key: 'sess_key',
            success: function (res) {
              _this.getuserInfo(res.data)
            },
          })
        }
      },  {
        key: 'onLoad',
        value: function onLoad(options) {
            // WxParse.wxParse('htmlParserName' , "html", "<p style='font-size: 32rpx; padding: 30rpx 0; text-align: center;'>没有任何内容</p>", this,0);
            var _this=this;
        
          wx.getStorage({
            key: 'detailTitle',
            success: function success(res) {
              _this.detailTitle=res.data;
              wx.setNavigationBarTitle({
                title: res.data+'详情',
              })
             
              _this.getSkillDetails(options.sess_key, options.id);
            }
          });
          
        }
    }]);

    return SkillDetails;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(SkillDetails , 'pages/skill/skillDetails'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsRGV0YWlscy5qcyJdLCJuYW1lcyI6WyJTa2lsbERldGFpbHMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJkYXRhIiwiYWxsX2RhdGEiLCJoYXNfYXBwbHkiLCJuYW1lMSIsImNvbnRlbnQxIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiaHRtbFBhcnNlciIsIm1ldGhvZHMiLCJhcHBseVRyYWluIiwidGhhdCIsInd4IiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJyZXMiLCJpZCIsInNlc3Nfa2V5IiwidGlwIiwibG9hZGluZyIsImFwaSIsInRyYWluRGV0YWlsIiwibWV0aG9kIiwicXVlcnkiLCJlcnJvcl9jb2RlIiwiYml6b2JqIiwiV3hQYXJzZSIsInd4UGFyc2UiLCJjb250ZW50IiwiJGFwcGx5IiwibG9hZGVkIiwiZXJyb3IiLCJlcnJvcl9tc2ciLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIm9wdGlvbnMiLCJnZXRTa2lsbERldGFpbHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQywwQ0FBOEIsTUFGekI7QUFHTEMsb0NBQXdCO0FBQ3BDO0FBSmlCLFMsUUFNVEMsSSxHQUFPO0FBQ0hDLHNCQUFTO0FBQ0xDLDJCQUFVO0FBREwsYUFETjtBQUlIQyxtQkFBTyxvQkFKSjtBQUtIQyxzQkFBVTtBQUxQLFMsUUFPUkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLGNBQWEsRUFBQyxnQkFBZSxFQUFoQixFQUFtQiwwQkFBeUIsT0FBNUMsRUFBb0QsNkJBQTRCLFVBQWhGLEVBQWQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsd0JBQVlBO0FBRFYsUyxRQTJDTkMsTyxHQUFVO0FBQ05DLHNCQURNLHdCQUNNO0FBQ1Isb0JBQUlDLE9BQU8sSUFBWDtBQUNBLG9CQUFHLENBQUNBLEtBQUtYLFFBQUwsQ0FBY0MsU0FBbEIsRUFBNEI7QUFDeEJXLHVCQUFHQyxVQUFILENBQWM7QUFDVkMsNkJBQUssVUFESztBQUVWQyxpQ0FBUyxpQkFBU0MsR0FBVCxFQUFhO0FBQ2xCTCxpQ0FBS0QsVUFBTCxDQUFnQk0sSUFBSWpCLElBQXBCLEVBQXlCWSxLQUFLWCxRQUFMLENBQWNpQixFQUF2QztBQUNIO0FBSlMscUJBQWQ7QUFNSDtBQUNKO0FBWEssUzs7Ozs7O2lHQXhDWUMsUSxFQUFTRCxFOzs7Ozs7QUFDdkJOLG9DLEdBQU8sSTs7QUFDWFEsOENBQUlDLE9BQUo7O3VDQUNnQkMsY0FBSUMsV0FBSixDQUFnQixFQUFDQyxRQUFPLE1BQVIsRUFBZUMsT0FBTTtBQUNqRE4sa0RBQVVBLFFBRHVDO0FBRWpERCw0Q0FBR0E7QUFGOEMscUNBQXJCLEVBQWhCLEM7OztBQUFaRCxtQzs7QUFJSixvQ0FBR0EsSUFBSWpCLElBQUosQ0FBUzBCLFVBQVQsSUFBdUIsQ0FBMUIsRUFBNkI7QUFDekJkLHlDQUFLWCxRQUFMLEdBQWdCZ0IsSUFBSWpCLElBQUosQ0FBUzJCLE1BQVQsQ0FBZ0IzQixJQUFoQztBQUNBNEIsc0RBQVFDLE9BQVIsQ0FBZ0IsZ0JBQWhCLEVBQW1DLE1BQW5DLEVBQTJDWixJQUFJakIsSUFBSixDQUFTMkIsTUFBVCxDQUFnQjNCLElBQWhCLENBQXFCOEIsT0FBaEUsRUFBeUVsQixJQUF6RSxFQUE4RSxDQUE5RTtBQUNBQSx5Q0FBS21CLE1BQUw7QUFDQVgsa0RBQUlZLE1BQUo7QUFDSCxpQ0FMRCxNQUtLO0FBQ0RaLGtEQUFJYSxLQUFKLENBQVVoQixJQUFJakIsSUFBSixDQUFTa0MsU0FBbkI7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FFWWYsUSxFQUFTRCxFOzs7Ozs7QUFDbEJOLG9DLEdBQU8sSTs7QUFDWFEsOENBQUlDLE9BQUo7O3VDQUNnQkMsY0FBSVgsVUFBSixDQUFlLEVBQUNhLFFBQU8sTUFBUixFQUFlQyxPQUFNO0FBQzVDTixrREFBVUEsUUFEa0M7QUFFNUNELDRDQUFHQTtBQUZ5QyxxQ0FBckIsRUFBZixDOzs7QUFBWkQsbUM7O0FBSUosb0NBQUdBLElBQUlqQixJQUFKLENBQVMwQixVQUFULElBQXVCLENBQTFCLEVBQTZCO0FBQ3pCZCx5Q0FBS1gsUUFBTCxDQUFjQyxTQUFkLEdBQTBCLENBQTFCO0FBQ0FVLHlDQUFLbUIsTUFBTDtBQUNBbEIsdUNBQUdzQixTQUFILENBQWE7QUFDVEMsK0NBQU8sTUFERTtBQUVUQyw4Q0FBTSxTQUZHO0FBR1RDLGtEQUFVO0FBSEQscUNBQWI7QUFLQWxCLGtEQUFJWSxNQUFKO0FBQ0gsaUNBVEQsTUFTSztBQUNEWixrREFBSWEsS0FBSixDQUFVaEIsSUFBSWpCLElBQUosQ0FBU2tDLFNBQW5CO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFFRUssTyxFQUFRO0FBQ1g7QUFDQSxpQkFBS0MsZUFBTCxDQUFxQkQsUUFBUXBCLFFBQTdCLEVBQXNDb0IsUUFBUXJCLEVBQTlDO0FBQ0g7Ozs7RUEzRHFDdUIsZUFBS0MsSTs7a0JBQTFCL0MsWSIsImZpbGUiOiJza2lsbERldGFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IHRpcCBmcm9tICcuLi8uLi91dGlscy90aXAnO1xyXG4gICAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9hcGkvYXBpJztcclxuICAgIGltcG9ydCBodG1sUGFyc2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL2h0bWxQYXJzZXInO1xyXG4gICAgaW1wb3J0IFd4UGFyc2UgZnJvbSAnLi4vLi4vd3hQYXJzZS93eFBhcnNlLmpzJztcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNraWxsRGV0YWlscyBleHRlbmRzIHdlcHkucGFnZXtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfln7norq3or6bmg4UnLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXHJcbi8vICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTpcImRhcmtcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBhbGxfZGF0YTp7XHJcbiAgICAgICAgICAgICAgICBoYXNfYXBwbHk6MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBuYW1lMTogXCJteUh0bWxQYXJzZXJLaW5lcjFcIixcclxuICAgICAgICAgICAgY29udGVudDE6IFwiPHRleHQgc3R5bGU9J2NvbG9yOiByZWQ7Jz7mlrAxPC90ZXh0PlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJodG1sUGFyc2VyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpwYXJzZXJOYW1lLm9uY2VcIjpcIm5hbWUxXCIsXCJ2LWJpbmQ6cGFyc2VyQ29udGVudC5zeW5jXCI6XCJjb250ZW50MVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIGh0bWxQYXJzZXI6IGh0bWxQYXJzZXJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFzeW5jIGdldFNraWxsRGV0YWlscyhzZXNzX2tleSxpZCkge1xyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRpcC5sb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkudHJhaW5EZXRhaWwoe21ldGhvZDonUE9TVCcscXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgc2Vzc19rZXk6IHNlc3Nfa2V5LFxyXG4gICAgICAgICAgICAgICAgaWQ6aWRcclxuICAgICAgICAgICAgfX0pO1xyXG4gICAgICAgICAgICBpZihyZXMuZGF0YS5lcnJvcl9jb2RlID09IDAgKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuYWxsX2RhdGEgPSByZXMuZGF0YS5iaXpvYmouZGF0YTtcclxuICAgICAgICAgICAgICAgIFd4UGFyc2Uud3hQYXJzZSgnaHRtbFBhcnNlck5hbWUnICwgXCJodG1sXCIsIHJlcy5kYXRhLmJpem9iai5kYXRhLmNvbnRlbnQsIHRoYXQsMCk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgdGlwLmxvYWRlZCgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5lcnJvcl9tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIGFwcGx5VHJhaW4oc2Vzc19rZXksaWQpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aXAubG9hZGluZygpO1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmFwcGx5VHJhaW4oe21ldGhvZDonUE9TVCcscXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Nfa2V5OiBzZXNzX2tleSxcclxuICAgICAgICAgICAgICAgICAgICBpZDppZFxyXG4gICAgICAgICAgICAgICAgfX0pO1xyXG4gICAgICAgICAgICBpZihyZXMuZGF0YS5lcnJvcl9jb2RlID09IDAgKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuYWxsX2RhdGEuaGFzX2FwcGx5ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oql5ZCN5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGlwLmxvYWRlZCgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5lcnJvcl9tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZChvcHRpb25zKXtcclxuICAgICAgICAgICAgLy8gV3hQYXJzZS53eFBhcnNlKCdodG1sUGFyc2VyTmFtZScgLCBcImh0bWxcIiwgXCI8cCBzdHlsZT0nZm9udC1zaXplOiAzMnJweDsgcGFkZGluZzogMzBycHggMDsgdGV4dC1hbGlnbjogY2VudGVyOyc+5rKh5pyJ5Lu75L2V5YaF5a65PC9wPlwiLCB0aGlzLDApO1xyXG4gICAgICAgICAgICB0aGlzLmdldFNraWxsRGV0YWlscyhvcHRpb25zLnNlc3Nfa2V5LG9wdGlvbnMuaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBhcHBseVRyYWluKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBpZighdGhhdC5hbGxfZGF0YS5oYXNfYXBwbHkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZXNzX2tleScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmFwcGx5VHJhaW4ocmVzLmRhdGEsdGhhdC5hbGxfZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiJdfQ==