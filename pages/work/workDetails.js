'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var regeneratorRuntime = require('../../npm/regenerator-runtime/runtime.js');

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

var WorkDetails = function (_wepy$page) {
    _inherits(WorkDetails, _wepy$page);

    function WorkDetails() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, WorkDetails);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

      return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = WorkDetails.__proto__ || Object.getPrototypeOf(WorkDetails)).call.apply(_ref, [this].concat(args))), _this2), _this2.$events = { "info": { "v-on:infoTap": "detailTap" } }, _this2.components = {
        info: _info2.default,
       
      }, _this2.config = {
            navigationBarTitleText: '职位详情',
            navigationBarBackgroundColor: '#fff',
            navigationBarTextStyle: 'black'
        }, _this2.data = {
            isShowShare: false,
            isShowPhoto: false,
            circlePhoto: '',
            swiper: {
                imgUrls: [],
                indicatorDots: true,
                autoplay: true,
                interval: 5000,
                duration: 1000
            },
            order: ['wages', 'work', 'contract'],
            show_a: 'wages',
            toView: 'wages',
            scrollTop: 0,
            all_data: {
                has_apply: 0,
                has_collect: 0
            },
            sess_key: '',
            id: '',
            ukey: '',
            //岗位推荐
          work_list: [],
          page_info: { cur_page: 0, page_size: 3, total_items: 2, total_pages: 1 },
          select_city: {
            "area_name": "杭州市",
            "areano": 330100
          },
          //广告图片
          adUrl: [],
        formId:[],
        getId:2,
        userData:{},
            // 获取图片
        }, _this2.methods = {
            showShare: function showShare() {
              if(wx.getStorageSync("sess_key")){
                if (this.getId == 2) {
                  wx.navigateTo({
                    url: '/pages/personal/profile/certification?road=search'
                  });
                  return;
                }
                this.isShowShare = true;
                return;
              }
              wx.showToast({
                title: '请登录',
                icon:'none'
              })
              var _url = wx.getStorageSync("ukey") ? '&ukey=' + wx.getStorageSync("ukey"): '';
             
              wx.navigateTo({
                url: '/pages/personal/login',
              })
             
            },
            hideShare: function hideShare() {
                this.isShowShare = false;
            },
            adDetail:function(e){
              wx.navigateTo({
                url: './adDetails?title='+e.currentTarget.dataset.title,
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
            scroll: function scroll(e) {},
            tap: function tap(e) {
                this.toView = e;
                this.show_a = e;
                for (var i = 0; i < this.order.length; ++i) {
                    if (this.order[i] === this.toView) {
                        this.setData({
                            toView: this.order[i + 1]
                        });
                        break;
                    }
                }
            },
            tapMove: function tapMove(e) {
                this.setData({
                    scrollTop: this.scrollTop - 10
                });
            },
            getPhoto: function getPhoto() {
                this.isShowShare = false;
                this.getCirclePhoto(this.sess_key, this.id);
            },
            hidePhoto: function hidePhoto() {
                this.isShowPhoto = false;
            },
            collectTap: function collectTap(a) {
              var that=this;
               if(wx.getStorageSync("sess_key")){
                 if (this.getId == 2) {

                   wx.navigateTo({
                     url: '/pages/personal/profile/certification?road=search'
                   });
                   return;
                 }
                 if (a == 'un') {
                   this.unCollectWork(this.sess_key, this.id);
                 } else {
                   this.collectWork(this.sess_key, this.id);
                 }
                 return;
               }
              
              wx.showToast({
                title: '请登录',
                icon: 'none'
              })
              wx.navigateTo({
                url: '/pages/personal/login',
              })
             
            },
            applyTap: function applyTap() {
              var that=this;
              if(wx.getStorageSync("sess_key")){
                if (this.getId == 2) {

                  wx.navigateTo({
                    url: '/pages/personal/profile/certification?road=search'
                  });
                  return;
                }
                wx.showModal({
                  title: '提示',
                  content: '报名该岗位后，会有客服邀您面试！',
                  success(res) {
                    if (res.confirm) {
                      that.applyWork(that.sess_key, that.id);
                    } else if (res.cancel) {
                      console.log('用户点击取消')
                    }
                  }
                })
                return;
              }
              wx.showToast({
                title: '请登录',
                icon: 'none'
              })
              setTimeout(function () {
                var _url = wx.getStorageSync("ukey") ? '&ukey=' + wx.getStorageSync("ukey") : '';
                
                wx.navigateTo({
                  url: '/pages/personal/login?page=detail'
                });
              }, 1000);
             

              
            },
            goUrl: function goUrl() {
           
              wx.setStorage({
                key: 'compId',
                data: null,
              })
              wx.switchTab({
                url: '/pages/work/index'
              });
             
            },
            // 岗位推荐详情
          
          detailTap: function detailTap(v) {
            wx.getStorage({
              key: 'sess_key',
              success: function success(res) {
                wx.navigateTo({
                  url: '/pages/work/workDetails?sess_key=' + res.data + '&id=' + v.id
                });
              }
            });
          },
        formSubmit: function (e) {
          var that = this;
          if (that.formId.length < 10) that.formId = that.formId.concat(e.detail.formId);
          if (that.formId.length == 10) {
            wx.getStorage({
              key: 'sess_key',
              success: function (res) {
                that.getUserFormId(res.data, that.formId.toString());
                that.formId=[];
              },
            })
          }
        },
      
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

  _createClass(WorkDetails, [{
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
                                return _api2.default.workDetailSharePic({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        id: id
                                    } });

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
      },  {
        key: 'getWorkDetails',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sess_key, id, ukey) {
                var that, res;   
                console.log(wx.getStorageSync("compId"),"后")
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                that = this;
                                _tip2.default.loading();
                                res = null;                          
                                if (!ukey) {
                                    _context2.next = 9;
                                    break;
                                }
                                _context2.next = 6;
                            return _api2.default.workDetail({
                              method: 'POST', query: {
                                sess_key: sess_key,
                                id: id,
                                ukey: ukey,
                                flag: that.compId ? 2 :1
                              }
                            });
                            case 6:
                                res = _context2.sent;
                                _context2.next = 12;
                                break;

                            case 9:
                                _context2.next = 11;
                               
                                return _api2.default.workDetail({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        id: id,
                                        flag: that.compId ? 2 : 1
                                    } });

                            case 11:
                                res = _context2.sent;

                            case 12:
                            console.log(res,"qqqqq");
                                if (res.data.error_code == 0) {
                                 
                                    that.all_data = res.data.bizobj.data;
                                    wx.getStorage({
                                        'key': 'ukey',
                                        success: function success(resUkey) {
                                            that.ukey = resUkey.data;
                                        }
                                    });
                                    that.$apply();
                                    _tip2.default.loaded();
                                } else if (res.data.error_code == 3) {
                                    _tip2.default.error(res.data.msg);
                                } else {
                                    _tip2.default.error(res.data.msg);
                                }

                            case 13:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getWorkDetails(_x3, _x4, _x5) {
                return _ref3.apply(this, arguments);
            }

            return getWorkDetails;
        }()
    },  {
        key: 'collectWork',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(sess_key, id) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context3.next = 4;
                                return _api2.default.collectWork({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        id: id
                                    } });

                            case 4:
                                res = _context3.sent;

                                if (res.data.error_code == 0) {
                                    wx.showToast({
                                        title: '收藏成功',
                                        icon: 'success',
                                        duration: 1000
                                    });
                                    that.all_data.has_collect = 1;
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
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function collectWork(_x6, _x7) {
                return _ref4.apply(this, arguments);
            }

            return collectWork;
        }()
    }, {
        key: 'unCollectWork',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(sess_key, id) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context4.next = 4;
                                return _api2.default.unCollectWork({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        id: id
                                    } });

                            case 4:
                                res = _context4.sent;

                                if (res.data.error_code == 0) {
                                    wx.showToast({
                                        title: '取消收藏成功',
                                        icon: 'success',
                                        duration: 1000
                                    });
                                    that.all_data.has_collect = 0;
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
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function unCollectWork(_x8, _x9) {
                return _ref5.apply(this, arguments);
            }

            return unCollectWork;
        }()
    }, {
        key: 'applyWork',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(sess_key, id) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context5.next = 4;
                                return _api2.default.applyWork({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        id: id
                                    } });

                            case 4:
                                res = _context5.sent;
                                
                                if (!(res.data.error_code == 0)) {
                                    _context5.next = 12;
                                    break;
                                }
                            that.all_data.has_apply = 1;
                            that.setData({
                              all_data: that.all_data
                            })
                            console.log(that.all_data.has_apply,".....");
                                that.$apply();
                                wx.showToast({
                                    title: '申请成功',
                                    icon: 'success',
                                    duration: 1000
                                });
                               
                                _tip2.default.loaded();
                                _context5.next = 20;
                                break;

                            case 12:
                                if (!(res.data.error_code == 3)) {
                                    _context5.next = 19;
                                    break;
                                }

                                wx.showToast({
                                    title: res.data.msg,
                                    icon: 'none',
                                    duration: 1000
                                });
                                _tip2.default.error('请先完善个人信息');
                                wx.navigateTo({
                                    url: '/pages/personal/profile/index?page=apply'
                                });
                                return _context5.abrupt('return');

                            case 19:
                                wx.showToast({
                                    title: res.data.msg,
                                    icon: 'none',
                                    duration: 1000
                                });

                            case 20:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function applyWork(_x10, _x11) {
                return _ref6.apply(this, arguments);
            }

            return applyWork;
        }()
      }, {
        //获取广告图
        key: 'getAdv',
        value: function () {
          var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var that, res;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    that = this;
                    
                    _tip2.default.loading();
                    _context6.next = 4;
                    return _api2.default.Adv({
                      method: 'POST', query: {
                       
                      }
                    });

                  case 4:
                    res = _context6.sent;
                    if (res.data.error_code == 0) {
                      that.adUrl = res.data.bizobj.data;
                      that.$apply();
                    } else {
                      wx.showToast({
                        title: res.data.msg,
                        icon: 'none',
                        duration: 1000
                      });
                    }

                  case 6:

                  case 'end':
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

          function getAdv() {
            return _ref6.apply(this, arguments);
          }

          return getAdv;
        }()
      }, {
        key: 'getcheckUserIdnum',
        value: function () {
          var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(sess_key) {
            var that, res;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {

                switch (_context5.prev = _context5.next) {
                  case 0:
                    that = this;

                    _tip2.default.loading();
                    _context5.next = 4;
                    return _api2.default.checkUserIdnum({
                      method: 'POST', query: {
                        sess_key: sess_key,
                     
                      }
                    });

                  case 4:
                    res = _context5.sent;
                      console.log(res,"???")
                      that.getId=res.data.bizobj.data.has_id_num;
                    if (!(res.data.error_code == 0)) {
                      _context5.next = 12;
                      break;
                    }
                    
                    that.$apply();
                   

                    _tip2.default.loaded();
                    _context5.next = 20;
                    break;

                  case 12:
                    if (!(res.data.error_code == 3)) {
                      _context5.next = 19;
                      break;
                    }

                    wx.showToast({
                      title: res.data.msg,
                      icon: 'none',
                      duration: 1000
                    });
                  
                    return _context5.abrupt('return');

                  case 19:
                    wx.showToast({
                      title: res.data.msg,
                      icon: 'none',
                      duration: 1000
                    });

                  case 20:
                  case 'end':
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));

          function getcheckUserIdnum(_x10) {
            return _ref6.apply(this, arguments);
          }

          return getcheckUserIdnum;
        }()
      },
        {
        key: 'onShareAppMessage',
        value: function onShareAppMessage(res) {
          if (wx.getStorageSync("sess_key")){
            wx.updateShareMenu({
                withShareTicket: false //为false实现可多选
            });
            var _this = this;
            return {
                title: '链匠',
              path: '/pages/work/workDetails?ukey=' + wx.getStorageSync("sess_key") + '&id=' + wx.getStorageSync("id") + '&comp_id=' + wx.getStorageSync("compId"),
                success: function success(res1) {
                    wx.getShareInfo({
                        shareTicket: res.shareTickets[0],
                        success: function success(res) {
                            
                        },
                        fail: function fail(res) {
                           
                        },
                        complete: function complete(res) {
                            
                        }
                    });
                },
                fail: function fail(res) {
                   
                }
            };
          }else{
            wx.navigateTo({
              url: '/pages/personal/login',
            })
          }
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
         
        
          console.log(options);
            var that = this;
            that.getAdv();
           
            if (options.id) {
                wx.setStorage({
                    'key': 'id',
                    'data': options.id
                });
            
            }
          if (wx.getStorageSync("ukey")){
            that.ukey = wx.getStorageSync("ukey");
          }else if (options.ukey){
            wx.setStorage({
              key: 'ukey',
              data: options.ukey,
            })
            wx.setStorage({
              key: 'compUkey',
              data: options.ukey,
            })
            that.ukey = options.ukey;
          }
          if (options.comp_id){
            console.log("/////")
            wx.setStorage({
              key: 'compId',
              data: options.comp_id,
            })
            that.compId = options.comp_id;
          }else{
            that.compId = wx.getStorageSync("compId");
          }
         
            wx.getStorage({
                key: 'sess_key',
                success: function success(res1) {
                    that.sess_key = res1.data;                
                }
            });
       
            
            this.id = options.id;
         
            //            分享
            wx.showShareMenu({
                withShareTicket: true,
                success: function success(res) {
                    // 分享成功
                   
                },
                fail: function fail(res) {
                   
                }
            });
          

        },
        
      }, {
          key: 'onShow',
          value: function onShow() { 
            var that=this;
           
            wx.getStorage({
              key: 'sess_key',
              success: function success(res1) {
                that.sess_key = res1.data;
                that.getcheckUserIdnum(that.sess_key);
                that.getuserInfo(that.sess_key);
              }
            })
          
            if (wx.getStorageSync('sess_key')) {
              that.sess_key = wx.getStorageSync('sess_key');
                if (wx.getStorageSync("ukey"))
                  that.getWorkDetails(wx.getStorageSync('sess_key'), that.id, wx.getStorageSync("ukey"));
                else
                  that.getWorkDetails(that.sess_key, that.id);
            } else {
           
                  if (wx.getStorageSync("ukey"))
                    that.getWorkDetails(that.sess_key, that.id, wx.getStorageSync("ukey"));
                  else
                    that.getWorkDetails(that.sess_key, that.id);
               
            }
           
          }
        }]);

    return WorkDetails;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkDetails , 'pages/work/workDetails'));

