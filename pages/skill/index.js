'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

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
            page_info: { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 },
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
              let _this=this;
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
            let _this=this;
            _this.scrollTop = event.detail.scrollTop;
            _this.$apply();
          },  
          // 滚动切换标签样式
          switchTab: function (e) {
            console.log(e);
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
            console.log(cur);
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
                  _this.getSkillList(res.data, _this.page_info.cur_page);
                }
              });
            }
          },
          wxpay:function(e){
            console.log(e);
            let _this=this;
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
            let that=this;
            
            that.wxpyId=e.currentTarget.dataset.id;
            console.log(e,that.wxpyId)
            var _amount = e.currentTarget.dataset.amount;
            if (_amount <= 0) {
              wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                  that.applyTrain(res.data, that.wxpyId);
                }
              });
            }else{
              this.isShowShare = true;
              wx.getStorage({
                key: 'sess_key',
                success: function (res) {
                  that.getpurseInfo(res.data);
                },
              })
            }
            

            
          },
          hideShare: function hideShare() {
            this.isShowShare = false;
          },
          checkboxChange :function(e){
            console.log(e);
            let _this=this;
            if (e.detail.value[0]){
              if (e.detail.value.length > 1) _this.payType = 3;
              else _this.payType = e.detail.value[0];
            }else  _this.payType = 0;
            
            _this.$apply();
            console.log(_this.payType,".../.........");
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
                                        that.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 };
                                    } else {
                                        console.log(res);
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
                      that.navList = that.navList.concat(Object.values(res.data.bizobj.data));
                      console.log(that.navList,'........')
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
                        that.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 };
                      } else {
                        console.log(res);
                        if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                          console.log(that.skill_list);
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
                    console.log(_context);
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
                    console.log(_results);
                    if (_results.statusCode == 200 && _results.data) {
                      wx.requestPayment({
                        'timeStamp': _results.data.timeStamp + "",
                        'nonceStr': _results.data.nonceStr + "",
                        'package': _results.data.package + "",
                        'signType': 'MD5',
                        'paySign': _results.data.paySign + "",
                        'success': function (res) {
                          console.log(res);
                         that.isShowShare=false;
                        },
                        'fail': function (res) {
                          console.log(res);
                          // _tip2.default.error(res.error_msg);
                          wx.showToast({
                            title: '付款失败',
                            image: '../../images/error.png',
                            duration: 1000
                          })
                        }
                      })
                      that.$apply();
                    } else {
                      if (_results.statusCode == 4){
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
                      that.all_data.has_apply = 1;
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
      },  {
        key: 'onLoad',
        value: function onLoad() {
            var _this = this;
          //  高度自适应
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInNraWxsSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJpbmZvIiwiZGF0YSIsInBhZ2VfaW5mbyIsImN1cl9wYWdlIiwicGFnZV9zaXplIiwidG90YWxfaXRlbXMiLCJ0b3RhbF9wYWdlcyIsInNraWxsX2xpc3QiLCJtZXRob2RzIiwiZGV0YWlsVGFwIiwidiIsInd4IiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJyZXMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaWQiLCJzZXNzX2tleSIsInRoYXQiLCJ0aXAiLCJsb2FkaW5nIiwiYXBpIiwidHJhaW5MaXN0IiwibWV0aG9kIiwicXVlcnkiLCJwYWdlIiwiTnVtYmVyIiwiZXJyb3JfY29kZSIsImJpem9iaiIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiLCIkYXBwbHkiLCJsb2FkZWQiLCJlcnJvciIsImVycm9yX21zZyIsIl90aGlzIiwiZ2V0U2tpbGxMaXN0Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJ3ZXB5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFU7Ozs7Ozs7Ozs7Ozs7O3FNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixJQURuQjtBQUVMQywwQ0FBOEIsTUFGekI7QUFHTEMsb0NBQXdCLE9BSG5CO0FBSUxDLG1DQUFzQjtBQUpqQixTLFNBTVZDLE8sR0FBVSxFQUFDLGNBQWEsRUFBQyxPQUFNLE1BQVAsRUFBYyxTQUFRLFdBQXRCLEVBQWQsRSxTQUNqQkMsTSxHQUFTLEVBQUMsUUFBTyxFQUFD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RGtCLHlDQUFLYyxNQUFMO0FBQ0FiLGtEQUFJYyxNQUFKO0FBQ0gsaUNBakJELE1BaUJLO0FBQ0RkLGtEQUFJZSxLQUFKLENBQVVyQixJQUFJZCxJQUFKLENBQVNvQyxTQUFuQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBRUc7QUFDSixnQkFBSUMsUUFBUSxJQUFaO0FBQ0EzQixlQUFHQyxVQUFILENBQWM7QUFDVkMscUJBQUssVUFESztBQUVWQyx5QkFBUyxpQkFBU0MsR0FBVCxFQUFhO0FBQ2pCdUIsMEJBQU1DLFlBQU4sQ0FBbUJ4QixJQUFJZCxJQUF2QjtBQUNKO0FBSlMsYUFBZDtBQU1IOzs7d0NBQ2M7QUFDWCxnQkFBSXFDLFFBQVEsSUFBWjtBQUNBLGdCQUFHQSxNQUFNcEMsU0FBTixDQUFnQkMsUUFBaEIsSUFBNEJtQyxNQUFNcEMsU0FBTixDQUFnQkksV0FBL0MsRUFBMkQ7QUFDdkRLLG1CQUFHNkIsU0FBSCxDQUFhLEVBQUU7QUFDWEMsMkJBQU8sU0FERTtBQUVUQywwQkFBTSxTQUZHO0FBR1RDLDhCQUFVO0FBSEQsaUJBQWI7QUFLSCxhQU5ELE1BTUs7QUFDRGhDLG1CQUFHQyxVQUFILENBQWM7QUFDVkMseUJBQUssVUFESztBQUVWQyw2QkFBUyxpQkFBU0MsR0FBVCxFQUFhO0FBQ2xCdUIsOEJBQU1DLFlBQU4sQ0FBbUJ4QixJQUFJZCxJQUF2QixFQUE0QnFDLE1BQU1wQyxTQUFOLENBQWdCQyxRQUE1QztBQUNIO0FBSlMsaUJBQWQ7QUFNSDtBQUNKOzs7O0VBdkVtQ3lDLGVBQUtqQixJOztrQkFBeEJyQyxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCB0aXAgZnJvbSAnLi4vLi4vdXRpbHMvdGlwJztcclxuICAgIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vYXBpL2FwaSc7XHJcbiAgICBpbXBvcnQgaW5mbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9pbmZvJztcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHNraWxsSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2V7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Z+56K6tJyxcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxyXG4gICAgICAgICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6dHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICRyZXBlYXQgPSB7XCJza2lsbF9saXN0XCI6e1wiY29tXCI6XCJpbmZvXCIsXCJwcm9wc1wiOlwibGlzdC5zeW5jXCJ9fTtcclxuJHByb3BzID0ge1wiaW5mb1wiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwic2tpbGxfbGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmxpc3Quc3luY1wiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcInNraWxsX2xpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInhtbG5zOnYtb25cIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcInNraWxsX2xpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge1wiaW5mb1wiOntcInYtb246aW5mb1RhcFwiOlwiZGV0YWlsVGFwXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIGluZm86IGluZm9cclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgcGFnZV9pbmZvOntjdXJfcGFnZTowLCBwYWdlX3NpemU6IDgsIHRvdGFsX2l0ZW1zOiAyLCB0b3RhbF9wYWdlczogMX0sXHJcbiAgICAgICAgICAgIHNraWxsX2xpc3Q6W11cclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMgZ2V0U2tpbGxMaXN0KHNlc3Nfa2V5KSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgdGlwLmxvYWRpbmcoKTtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS50cmFpbkxpc3Qoe21ldGhvZDonUE9TVCcscXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgc2Vzc19rZXk6IHNlc3Nfa2V5LFxyXG4gICAgICAgICAgICAgICAgcGFnZTpOdW1iZXIodGhhdC5wYWdlX2luZm8uY3VyX3BhZ2UpICsxIHx8IDEsXHJcbiAgICAgICAgICAgICAgICBwYWdlX3NpemU6dGhhdC5wYWdlX2luZm8ucGFnZV9zaXplXHJcbiAgICAgICAgICAgIH19KTtcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEuZXJyb3JfY29kZSA9PSAwICl7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5iaXpvYmouZGF0YSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnNraWxsX2xpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfaW5mbyA9IHtjdXJfcGFnZTowLCBwYWdlX3NpemU6IDgsIHRvdGFsX2l0ZW1zOiAyLCB0b3RhbF9wYWdlczogMX07XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mby5jdXJfcGFnZSAhPSAxICYmIHJlcy5kYXRhLmJpem9iai5wYWdlX2luZm8uY3VyX3BhZ2UgPD0gcmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mby50b3RhbF9wYWdlcyApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LnNraWxsX2xpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2tpbGxfbGlzdCA9dGhhdC5za2lsbF9saXN0LmNvbmNhdChyZXMuZGF0YS5iaXpvYmouZGF0YSkgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNraWxsX2xpc3QgPSByZXMuZGF0YS5iaXpvYmouZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5wYWdlX2luZm8gPSByZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB0aXAubG9hZGVkKCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGlwLmVycm9yKHJlcy5kYXRhLmVycm9yX21zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb25Mb2FkKCl7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiAnc2Vzc19rZXknLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0U2tpbGxMaXN0KHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uUmVhY2hCb3R0b20oKXtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgaWYoX3RoaXMucGFnZV9pbmZvLmN1cl9wYWdlID09IF90aGlzLnBhZ2VfaW5mby50b3RhbF9wYWdlcyl7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3QoeyAvL+WmguaenOWFqOmDqOWKoOi9veWujOaIkOS6huS5n+W8ueS4gOS4quahhlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oiR5Lmf5piv5pyJ5bqV57q/55qEJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnc2Vzc19rZXknLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdldFNraWxsTGlzdChyZXMuZGF0YSxfdGhpcy5wYWdlX2luZm8uY3VyX3BhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIGRldGFpbFRhcCh2KXtcclxuICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3Nlc3Nfa2V5JyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9za2lsbC9za2lsbERldGFpbHM/c2Vzc19rZXk9JysgcmVzLmRhdGEgKyAnJmlkPScgKyB2LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==