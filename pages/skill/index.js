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

var _info = require('./../../components/common/info.js');

var _info2 = _interopRequireDefault(_info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var skillIndex = function (_wepy$page) {
    _inherits(skillIndex, _wepy$page);

    function skillIndex() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, skillIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = skillIndex.__proto__ || Object.getPrototypeOf(skillIndex)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '培训',
            navigationBarBackgroundColor: '#fff',
            navigationBarTextStyle: 'black',
            enablePullDownRefresh: true
        }, _this2.$repeat = { "skill_list": { "com": "info", "props": "list.sync" } }, _this2.$props = { "info": { "xmlns:v-bind": { "value": "", "for": "skill_list", "item": "item", "index": "index", "key": "index" }, "v-bind:list.sync": { "value": "item", "type": "item", "for": "skill_list", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "skill_list", "item": "item", "index": "index", "key": "index" } } }, _this2.$events = { "info": { "v-on:infoTap": "detailTap" } }, _this2.components = {
            info: _info2.default
        }, _this2.data = {
            page_info: { cur_page: 0, page_size: 4, total_items: 2, total_pages: 1 },
            skill_list: [],
            activityId:null,//活动id
          
            //tab切换
          navList: [{name:'全部', id:-1}],
          navlength:null,
          currentTab: 0, //预设当前项的值
          scrollLeft: 0, //tab标题的滚动条位置
          winHeight: "",//窗口高度
          activeName:'活动',
          isShowShare: false,
          isShowPhoto: false,
          circlePhoto: '',
          balanceAmount: null,
          wxpyId:null,
          payType:null,
          amount:0,
          wxpayIndex:null,
          userData: {},
        }, _this2.methods = {
            detailTap: function detailTap(v) {
            
                wx.setStorage({
                  key: 'detailTitle',
                  data: this.activeName,
                })
                wx.getStorage({
                    key: 'sess_key',
                    success: function success(res) {
                        wx.navigateTo({
                            url: '/pages/skill/skillDetails?sess_key=' + res.data + '&id=' + v.id
                        });
                    }
                });
            },
            //活动切换
            switchActive:function(e){
              var _this=this;
              _this.activeName=e.currentTarget.dataset.name;
              wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                  _this.page_info.cur_page = 0;
                  if (_this.activeName=='活动'){
                    _this.getActivityList(res.data, _this.activityId);
                            
                  }else{
                    _this.getSkillList(res.data);
                  }
                  _this.$apply();
                }
                })
              _this.$apply();
            },
          scroll: function (event) {
            var _this=this;
            _this.scrollTop = event.detail.scrollTop;
            _this.$apply();
          },  
          // 滚动切换标签样式
          switchTab: function (e) {
           
            var _this = this;
            var i = e.detail.current;
            _this.currentTab=i;
            _this.activityId=_this.navList[i].id;
            _this.page_info.cur_page = 0;
            _this.scrollTop=40;      
            if (_this.currentTab > 2) {
              _this.scrollLeft = 375 / 2;
              
            } else {
              _this.scrollLeft =0;
            }
            wx.getStorage({
              key: 'sess_key',
              success: function (res) {
                _this.getActivityList(res.data, _this.activityId)
              },
            })
            _this.$apply();
          },
          // 点击标题切换当前页时改变样式
          swichNav: function (e) {
            var _this = this;
            var _id = e.currentTarget.dataset.id;
            var cur = e.target.dataset.current;
          
            _this.activityId=_id;
            
            if (_this.currentTaB == cur) { return false; }
            else {
              _this.currentTab=cur;
            }
           
            _this.$apply();
          },
          //滑动加载
          bindDownLoad:function(){
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
                  _this.getActivityList(res.data, _this.activityId);
                }
              });
            }
          },
          wxpay:function(e){
           
            var _this=this;
            if (_this.wxpyId && _this.payType) {
              if (_this.balanceAmount.available_balance < e.currentTarget.dataset.amount && _this.payType == 2) {
                wx.showToast({
                  title: '余额不足，请选择微信支付方式',
                  icon: 'none'
                })
              } else {
                wx.getStorage({
                  key: 'sess_key',
                  success: function (res) {
                    _this.miniPay(res.data, _this.wxpyId, _this.payType);
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
          showShare: function showShare(e) {
            var that=this;
            
            that.wxpyId=e.currentTarget.dataset.id;
           
            var _amount = e.currentTarget.dataset.amount;
            that.amount=_amount;
            that.wxpayIndex = e.currentTarget.dataset.index;
            console.log(_amount)
            if (that.userData.mobile && that.userData.username){
              if (_amount <= 0) {
                wx.getStorage({
                  key: 'sess_key',
                  success: function success(res) {
                    that.applyTrain(res.data, that.wxpyId);
                  }
                });
              }else{
                this.isShowShare = true;
                that.payType = null;
                wx.getStorage({
                  key: 'sess_key',
                  success: function (res) {
                    that.getpurseInfo(res.data);
                  },
                })
              }
            } else {
              wx.navigateTo({
                url: '/pages/personal/profile/index',
              })
            }

            
          },
          hideShare: function hideShare() {
            this.isShowShare = false;
          },
          checkboxChange :function(e){
           
            var _this=this;
            if (e.detail.value[0]){
              if (e.detail.value.length > 1) _this.payType = 3;
              else _this.payType = e.detail.value[0];
            }else  _this.payType = 0;
            
            _this.$apply();
          
          }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(skillIndex, [{
        key: 'getSkillList',
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
                                return _api2.default.trainList({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        page: Number(that.page_info.cur_page) + 1 || 1,
                                        page_size: that.page_info.page_size
                                    } });

                            case 4:
                                res = _context.sent;

                                if (res.data.error_code == 0) {
                                    if (res.data.bizobj.data == null) {
                                        that.skill_list = [];
                                        that.page_info = { cur_page: 0, page_size: 4, total_items: 2, total_pages: 1 };
                                    } else {
                                      
                                        if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                                            
                                            that.skill_list = that.skill_list.concat(res.data.bizobj.data);
                                        } else {
                                            that.skill_list = res.data.bizobj.data;
                                        }
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

            function getSkillList(_x) {
                return _ref2.apply(this, arguments);
            }
           

          return getSkillList;
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

      },   {
      //获取分类活动列表
        key: 'getActivityTypeList',
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
                    return _api2.default.ActivityTypeList({
                      method: 'POST', query: {
                        sess_key: sess_key,
                       
                      }
                    });

                  case 4:
                    res = _context.sent;

                    if (res.data.error_code == 0) {
                      that.navList = [{ name: '全部', id: -1 }];
                      that.navList = that.navList.concat(Object.values(res.data.bizobj.data));
                     
                      that.navlength = that.navList.length;
                      that.activityId = that.navList[0].id;
                      wx.getStorage({
                        key: 'sess_key',
                        success: function success(res) {
                          that.getActivityList(res.data, that.activityId);
                        }
                      });
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

          function getActivityTypeList(_x) {
            return _ref2.apply(this, arguments);
          }


          return getActivityTypeList;
        }()
      },
      {
        key: 'getActivityList',
        value: function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key, type_id) {
            var that, res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    that = this;

                    _tip2.default.loading();
                    _context.next = 4;
                    return _api2.default.activityList({
                      method: 'POST', query: {
                        sess_key: sess_key,
                        type_id: type_id,
                        page: Number(that.page_info.cur_page) + 1 || 1,
                        page_size: that.page_info.page_size,
                      }
                    });

                  case 4:
                    res = _context.sent;
                    if (res.data.error_code == 0) {
                      if (res.data.bizobj.data == null) {
                        that.skill_list = [];
                        that.page_info = { cur_page: 0, page_size: 4, total_items: 2, total_pages: 1 };
                      } else {
                      
                        if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                        
                          that.skill_list = that.skill_list.concat(res.data.bizobj.data);
                        } else {
                          that.skill_list = res.data.bizobj.data;
                        }
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
          function getActivityList(_x,_x1) {
            return _ref2.apply(this, arguments);
          }
          return getActivityList;
        }()
      }, {
        key: 'miniPay',
        value: function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key,_id,_type) {
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
                        paytype:_type

                      }
                    });
                  case 4:
                    _results = _context.sent;
                    console.log(_results.statusCode == 200 && _results.data && ((that.balanceAmount.available_balance < that.amount && _type == 3) || _type == 1))
                                 
                    if (_results.statusCode == 200 && _results.data && ((that.balanceAmount.available_balance < that.amount && _type==3) || _type==1)) {
                      
                      wx.requestPayment({
                        'timeStamp': _results.data.timeStamp + "",
                        'nonceStr': _results.data.nonceStr + "",
                        'package': _results.data.package + "",
                        'signType': 'MD5',
                        'paySign': _results.data.paySign + "",
                        'success': function (res) {
                          console.log(that.skill_list[that.wxpayIndex].has_apply);
                          that.skill_list[that.wxpayIndex].has_apply = 1;
                        },
                        'fail': function (res) {
                          wx.showToast({
                            title: '付款失败',
                            image: '../../images/error.png',
                            duration: 1000
                          })
                        }
                      })
                      that.isShowShare = false;
                      
                      that.$apply();
                    } else {
                      if (_results.data.msg == 'success'){
                     
                        _tip2.default.success("余额付款成功!");
                       
                        that.skill_list[that.wxpayIndex].has_apply = 1;
                       
                      } 
                      else _tip2.default.error(_results.data.msg);
                      if (_results.statusCode == 4){
                        wx.navigateTo({
                          url: '/pages/personal/login',
                        })
                      }
                      that.isShowShare = false;
                      that.$apply();
                    }
                  case 6:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
          function miniPay(_x,_x2) {
            return _ref2.apply(this, arguments);
          }
          return miniPay;
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
                    return _api2.default.applyTrain({
                      method: 'POST', query: {
                        sess_key: sess_key,
                        id: id
                      }
                    });

                  case 4:
                    res = _context2.sent;

                    if (res.data.error_code == 0) {
                      that.skill_list[that.wxpayIndex].has_apply = 1;
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
        key: 'onShow',
        value: function onShow() {
   
          var _this = this;
          _this.page_info.cur_page=0;
          wx.getStorage({
            key: 'sess_key',
            success: function (res) {
              _this.getuserInfo(res.data)
            },
          })
        }
      },   {
        key: 'onLoad',
        value: function onLoad() {
            var _this = this;
          wx.hideShareMenu();
          //  高度自适应
          _this.page_info.cur_page=0;
          wx.getSystemInfo({
            success: function (res) {
              var clientHeight = res.windowHeight;
              var calc = clientHeight ;
              _this.winHeight = calc;
              _this.$apply();
             
            }
          });
            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                  _this.getActivityTypeList(res.data);
                 
                }
            });
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
                        _this.getSkillList(res.data);
                    }
                });
            }
        }
    }]);

    return skillIndex;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(skillIndex , 'pages/skill/index'));

