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
          page_info: { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 },
          select_city: {
            "area_name": "杭州市",
            "areano": 330100
          },
          //广告图片
          adUrl: [],
            // 获取图片
        }, _this2.methods = {
            showShare: function showShare() {
                this.isShowShare = true;
            },
            hideShare: function hideShare() {
                this.isShowShare = false;
            },
            adDetail:function(){
              wx.navigateTo({
                url: './adDetails',
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
                if (a == 'un') {
                    this.unCollectWork(this.sess_key, this.id);
                } else {
                    this.collectWork(this.sess_key, this.id);
                }
            },
            applyTap: function applyTap() {
                this.applyWork(this.sess_key, this.id);
            },
            goUrl: function goUrl() {
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
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(WorkDetails, [{
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
        key: 'getWorkDetails',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sess_key, id, ukey) {
                var that, res;
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
                                return _api2.default.workDetail({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        id: id,
                                        ukey: ukey
                                    } });

                            case 6:
                                res = _context2.sent;
                                _context2.next = 12;
                                break;

                            case 9:
                                _context2.next = 11;
                                return _api2.default.workDetail({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        id: id
                                    } });

                            case 11:
                                res = _context2.sent;

                            case 12:
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
                                } else if (res.data.error_code == 4) {
                                    wx.showToast({ //如果全部加载完成了也弹一个框
                                        title: '登录已失效，请重新登录',
                                        icon: 'none',
                                        duration: 1000
                                    });
                                    setTimeout(function () {
                                        wx.navigateTo({
                                            url: '/pages/personal/login?page=detail'
                                        });
                                    }, 1000);
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
                                wx.showToast({
                                    title: '申请成功',
                                    icon: 'success',
                                    duration: 1000
                                });
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
                    console.log(_context6, res, "/////////")
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
      },
        {
        key: 'onShareAppMessage',
        value: function onShareAppMessage(res) {
            wx.updateShareMenu({
                withShareTicket: false //为false实现可多选
            });
            var _this = this;
            return {
                title: '链匠',
                path: '/pages/work/workDetails?ukey=' + _this.data.ukey + '&id=' + _this.data.id,
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
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            var that = this;
            that.getAdv();
            if (options.id) {
                wx.setStorage({
                    'key': 'id',
                    'data': options.id
                });
            }
            if (options.ukey) {
                wx.setStorage({
                    'key': 'id',
                    'data': options.id
                });
                wx.setStorage({
                    'key': 'key',
                    'data': decodeURIComponent(options.ukey)
                });
            }
            wx.getStorage({
                key: 'scene',
                success: function success(res) {}, fail: function fail(res) {
                    if (options && options.scene) {
                        var scene = decodeURIComponent(options.scene);
                        wx.setStorage({
                            key: 'scene',
                            data: scene
                        });
                    }
                }
            });

            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                    that.sess_key = res.data;
                    if (options.sess_key) {
                        that.getWorkDetails(res.data, options.id);
                                              
                    } else {
                        wx.getStorage({
                            'key': 'id',
                            success: function success(resId) {
                                
                                wx.getStorage({
                                    'key': 'key',
                                    success: function success(resUkey) {
                                        
                                        that.getWorkDetails(res.data, resId.data, resUkey.data);
                                        
                                    }, fail: function fail() {
                                        that.getWorkDetails(res.data, resId.data);
                                    }
                                });
                            }
                        });
                    }
                }, fail: function fail(res) {
                    wx.showToast({ //如果全部加载完成了也弹一个框
                        title: '请先登录',
                        icon: 'none',
                        duration: 600
                    });
                    setTimeout(function () {
                        wx.navigateTo({
                            url: '/pages/personal/login?page=detail'
                        });
                    }, 600);
                }
            });
            this.sess_key = options.sess_key;
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
            var _this = this;
          
            _onfire2.default.on('apply', function () {
                wx.getStorage({
                    key: 'sess_key',
                    success: function success(res) {
                        
                        _this.applyWork(res.data, options.id);
                        
                     
                    }
                });
            });

        }
    }]);

    return WorkDetails;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkDetails , 'pages/work/workDetails'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtEZXRhaWxzLmpzIl0sIm5hbWVzIjpbIldvcmtEZXRhaWxzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiZGF0YSIsImlzU2hvd1NoYXJlIiwiaXNTaG93UGhvdG8iLCJjaXJjbGVQaG90byIsInN3aXBlciIsImltZ1VybHMiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwib3JkZXIiLCJzaG93X2EiLCJ0b1ZpZXciLCJzY3JvbGxUb3AiLCJhbGxfZGF0YSIsImhhc19hcHBseSIsImhhc19jb2xsZWN0Iiwic2Vzc19rZXkiLCJpZCIsInVrZXkiLCJtZXRob2RzIiwic2hvd1NoYXJlIiwiaGlkZVNoYXJlIiwic2F2ZUltZyIsInRoYXQiLCJ3eCIsImRvd25sb2FkRmlsZSIsInVybCIsInN1Y2Nlc3MiLCJyZXMiLCJwYXRoIiwidGVtcEZpbGVQYXRoIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwibWFzayIsInNhdmVJbWFnZVRvUGhvdG9zQWxidW0iLCJmaWxlUGF0aCIsImhpZGVUb2FzdCIsIiRhcHBseSIsImZhaWwiLCJ0aXAiLCJlcnJvciIsImNvbXBsZXRlIiwiY29uc29sZSIsImxvZyIsInNjcm9sbCIsImUiLCJ0YXAiLCJpIiwibGVuZ3RoIiwic2V0RGF0YSIsInRhcE1vdmUiLCJnZXRQaG90byIsImdldENpcmNsZVBob3RvIiwiaGlkZVBob3RvIiwiY29sbGVjdFRhcCIsImEiLCJ1bkNvbGxlY3RXb3JrIiwiY29sbGVjdFdvcmsiLCJhcHBseVRhcCIsImFwcGx5V29yayIsImdvVXJsIiwic3dpdGNoVGFiIiwibG9hZGluZyIsImFwaSIsIndvcmtEZXRhaWxTaGFyZVBpYyIsIm1ldGhvZCIsInF1ZXJ5IiwiZXJyb3JfY29kZSIsImJpem9iaiIsImxvYWRlZCIsIm1zZyIsIndvcmtEZXRhaWwiLCJnZXRTdG9yYWdlIiwicmVzVWtleSIsInNldFRpbWVvdXQiLCJuYXZpZ2F0ZVRvIiwiX3RoaXMiLCJyZXMxIiwiZ2V0U2hhcmVJbmZvIiwic2hhcmVUaWNrZXQiLCJzaGFyZVRpY2tldHMiLCJvcHRpb25zIiwic2V0U3RvcmFnZSIsImtleSIsInNjZW5lIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZ2V0V29ya0RldGFpbHMiLCJyZXNJZCIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJvbmZpcmUiLCJvbiIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFc7Ozs7Ozs7Ozs7Ozs7O3VNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQywwQ0FBOEIsTUFGekI7QUFHTEMsb0NBQXdCO0FBSG5CLFMsU0FLVEMsSSxHQUFPO0FBQ0hDLHlCQUFhLEtBRFY7QUFFSEMseUJBQWEsS0FGVjtBQUdIQyx5QkFBWSxFQUhUO0FBSUhDLG9CQUFPO0FBQ0hDLHlCQUFTLEVBRE47QUFFSEMsK0JBQWUsSUFGWjtBQUdIQywwQkFBVSxJQUhQO0FBSUhDLDBCQUFVLElBSlA7QUFLSEMsMEJBQVU7QUFMUCxhQUpKO0FBV0hDLG1CQUFNLENBQUMsT0FBRCxFQUFTLE1BQVQsRUFBZ0IsVUFBaEIsQ0FYSDtBQVlIQyxvQkFBTyxPQVpKO0FBYUhDLG9CQUFRLE9BYkw7QUFjSEMsdUJBQVcsQ0FkUjtBQWVIQyxzQkFBUztBQUNMQywyQkFBVSxDQURMO0FBRUxDLDZCQUFZO0FBRlAsYUFmTjtBQW1CSEMsc0JBQVMsRUFuQk47QUFvQkhDLGdCQUFHLEVBcEJBO0FBcUJIQyxrQkFBSztBQUVUO0FBdkJPLFMsU0ErUlBDLE8sR0FBVTtBQUNOQyxxQkFETSx1QkFDSztBQUNQLHFCQUFLcEIsV0FBTCxHQUFtQixJQUFuQjtBQUNILGFBSEs7QUFJTnFCLHFCQUpNLHVCQUlLO0FBQ1As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QUZHO0FBR1R6QixrQ0FBVTtBQUhELHFCQUFiO0FBS0FtRSwrQkFBVyxZQUFZO0FBQ25CbkQsMkJBQUdvRCxVQUFILENBQWM7QUFDVmxELGlDQUFJO0FBRE0seUJBQWQ7QUFHSCxxQkFKRCxFQUlFLEdBSkY7QUFLSDtBQWxDUyxhQUFkO0FBb0NDLGlCQUFLVixRQUFMLEdBQWdCa0UsUUFBUWxFLFFBQXhCO0FBQ0EsaUJBQUtDLEVBQUwsR0FBVWlFLFFBQVFqRSxFQUFsQjtBQUNEO0FBQ0FPLGVBQUdpRSxhQUFILENBQWlCO0FBQ2JDLGlDQUFpQixJQURKO0FBRWIvRCx5QkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3BCO0FBQ0FlLDRCQUFRQyxHQUFSLENBQVkseUJBQVo7QUFDQUQsNEJBQVFDLEdBQVIsQ0FBWSxPQUFLaEIsR0FBakI7QUFDSCxpQkFOWTtBQU9iVyxzQkFBTSxjQUFVWCxHQUFWLEVBQWU7QUFDakI7QUFDQWUsNEJBQVFDLEdBQVIsQ0FBWWhCLEdBQVo7QUFDSDtBQVZZLGFBQWpCO0FBWUEsZ0JBQUlpRCxRQUFRLElBQVo7QUFDQWMsNkJBQU9DLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFlBQU07QUFDckJwRSxtQkFBR2lELFVBQUgsQ0FBYztBQUNWVyx5QkFBSyxVQURLO0FBRVZ6RCw2QkFBUyxpQkFBU0MsR0FBVCxFQUFhO0FBQ2xCaUQsOEJBQU1qQixTQUFOLENBQWdCaEMsSUFBSTdCLElBQXBCLEVBQXlCbUYsUUFBUWpFLEVBQWpDO0FBQ0g7QUFKUyxpQkFBZDtBQU1ILGFBUEQ7QUFTSDs7OztFQXBTb0M0RSxlQUFLQyxJOztrQkFBekJwRyxXIiwiZmlsZSI6IndvcmtEZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vYXBpL2FwaSc7XHJcbiAgICBpbXBvcnQgdGlwIGZyb20gJy4uLy4uL3V0aWxzL3RpcCc7XHJcbiAgICBpbXBvcnQgb25maXJlIGZyb20gJ29uZmlyZS5qcyc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrRGV0YWlscyBleHRlbmRzIHdlcHkucGFnZXtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogYzkvY3or6bmg4UnLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgaXNTaG93U2hhcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1Nob3dQaG90bzogZmFsc2UsXHJcbiAgICAgICAgICAgIGNpcmNsZVBob3RvOicnLFxyXG4gICAgICAgICAgICBzd2lwZXI6e1xyXG4gICAgICAgICAgICAgICAgaW1nVXJsczogW10sXHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbDogNTAwMCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9yZGVyOlsnd2FnZXMnLCd3b3JrJywnY29udHJhY3QnXSxcclxuICAgICAgICAgICAgc2hvd19hOid3YWdlcycsXHJcbiAgICAgICAgICAgIHRvVmlldzogJ3dhZ2VzJyxcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxyXG4gICAgICAgICAgICBhbGxfZGF0YTp7XHJcbiAgICAgICAgICAgICAgICBoYXNfYXBwbHk6MCxcclxuICAgICAgICAgICAgICAgIGhhc19jb2xsZWN0OjBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2Vzc19rZXk6JycsXHJcbiAgICAgICAgICAgIGlkOicnLFxyXG4gICAgICAgICAgICB1a2V5OicnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOiOt+WPluWbvueJh1xyXG4gICAgICAgIGFzeW5jIGdldENpcmNsZVBob3RvKHNlc3Nfa2V5LGlkKSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgdGlwLmxvYWRpbmcoKTtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS53b3JrRGV0YWlsU2hhcmVQaWMoe21ldGhvZDonUE9TVCcscXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Nfa2V5OiBzZXNzX2tleSxcclxuICAgICAgICAgICAgICAgICAgICBpZDppZFxyXG4gICAgICAgICAgICAgICAgfX0pO1xyXG4gICAgICAgICAgICBpZihyZXMuZGF0YS5lcnJvcl9jb2RlID09IDAgKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuY2lyY2xlUGhvdG8gPSByZXMuZGF0YS5iaXpvYmouZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93UGhvdG8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIHRpcC5sb2FkZWQoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS5tc2csXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBnZXRXb3JrRGV0YWlscyhzZXNzX2tleSxpZCx1a2V5KSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgdGlwLmxvYWRpbmcoKTtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmKHVrZXkpe1xyXG4gICAgICAgICAgICAgICAgcmVzID0gYXdhaXQgYXBpLndvcmtEZXRhaWwoe21ldGhvZDonUE9TVCcscXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Nfa2V5OiBzZXNzX2tleSxcclxuICAgICAgICAgICAgICAgICAgICBpZDppZCxcclxuICAgICAgICAgICAgICAgICAgICB1a2V5OnVrZXlcclxuICAgICAgICAgICAgICAgIH19KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXMgPSBhd2FpdCBhcGkud29ya0RldGFpbCh7bWV0aG9kOidQT1NUJyxxdWVyeTp7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc19rZXk6IHNlc3Nfa2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOmlkXHJcbiAgICAgICAgICAgICAgICB9fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocmVzLmRhdGEuZXJyb3JfY29kZSA9PSAwICl7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmFsbF9kYXRhID0gcmVzLmRhdGEuYml6b2JqLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAna2V5JzondWtleScsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczpmdW5jdGlvbiAocmVzVWtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnVrZXkgPSByZXNVa2V5LmRhdGFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB0aXAubG9hZGVkKCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gMyApe1xyXG4gICAgICAgICAgICAgICAgdGlwLmVycm9yKHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gNCl7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3QoeyAvL+WmguaenOWFqOmDqOWKoOi9veWujOaIkOS6huS5n+W8ueS4gOS4quahhlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn55m75b2V5bey5aSx5pWI77yM6K+36YeN5paw55m75b2VJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDonL3BhZ2VzL3BlcnNvbmFsL2xvZ2luP3BhZ2U9ZGV0YWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9LDEwMDApXHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIGNvbGxlY3RXb3JrKHNlc3Nfa2V5LGlkKSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgdGlwLmxvYWRpbmcoKTtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5jb2xsZWN0V29yayh7bWV0aG9kOidQT1NUJyxxdWVyeTp7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc19rZXk6IHNlc3Nfa2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOmlkXHJcbiAgICAgICAgICAgICAgICB9fSk7XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gMCApe1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aUtuiXj+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoYXQuYWxsX2RhdGEuaGFzX2NvbGxlY3QgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIHRpcC5sb2FkZWQoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS5tc2csXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyB1bkNvbGxlY3RXb3JrKHNlc3Nfa2V5LGlkKSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgdGlwLmxvYWRpbmcoKTtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS51bkNvbGxlY3RXb3JrKHttZXRob2Q6J1BPU1QnLHF1ZXJ5OntcclxuICAgICAgICAgICAgICAgICAgICBzZXNzX2tleTogc2Vzc19rZXksXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6aWRcclxuICAgICAgICAgICAgICAgIH19KTtcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEuZXJyb3JfY29kZSA9PSAwICl7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y+W5raI5pS26JeP5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5hbGxfZGF0YS5oYXNfY29sbGVjdCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgdGlwLmxvYWRlZCgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1zZyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIGFwcGx5V29yayhzZXNzX2tleSxpZCkge1xyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRpcC5sb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuYXBwbHlXb3JrKHttZXRob2Q6J1BPU1QnLHF1ZXJ5OntcclxuICAgICAgICAgICAgICAgICAgICBzZXNzX2tleTogc2Vzc19rZXksXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6aWRcclxuICAgICAgICAgICAgICAgIH19KTtcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEuZXJyb3JfY29kZSA9PSAwICl7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmFsbF9kYXRhLmhhc19hcHBseSA9IDE7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn55Sz6K+35oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIHRpcC5sb2FkZWQoKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYocmVzLmRhdGEuZXJyb3JfY29kZSA9PSAzICl7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS5tc2csXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRpcC5lcnJvcign6K+35YWI5a6M5ZaE5Liq5Lq65L+h5oGvJylcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDonL3BhZ2VzL3BlcnNvbmFsL3Byb2ZpbGUvaW5kZXg/cGFnZT1hcHBseSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS5tc2csXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn6ZO+5YygJyxcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcvcGFnZXMvd29yay93b3JrRGV0YWlscz91a2V5PScgKyBfdGhpcy5kYXRhLnVrZXkgKyAnJmlkPScrX3RoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLnNoYXJlVGlja2V0c1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2dcclxuICAgICAgICAgICAgICAgICAgICB3eC5nZXRTaGFyZUluZm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVRpY2tldDogcmVzLnNoYXJlVGlja2V0c1swXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykgeyBjb25zb2xlLmxvZyhyZXMpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHsgY29uc29sZS5sb2cocmVzKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKHJlcykgeyBjb25zb2xlLmxvZyhyZXMpIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDliIbkuqvlpLHotKVcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZChvcHRpb25zKXtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLmlkKXtcclxuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICdrZXknOidpZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOm9wdGlvbnMuaWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMudWtleSl7XHJcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAna2V5JzonaWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzpvcHRpb25zLmlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICdrZXknOidrZXknLFxyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzpvcHRpb25zLnVrZXlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OidzY2VuZScsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOmZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIH0sZmFpbDpmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9ucyAmJiBvcHRpb25zLnNjZW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzY2VuZSA9IGRlY29kZVVSSUNvbXBvbmVudChvcHRpb25zLnNjZW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdzY2VuZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBzY2VuZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdzZXNzX2tleScsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2Vzc19rZXkgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25zLnNlc3Nfa2V5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5nZXRXb3JrRGV0YWlscyhyZXMuZGF0YSxvcHRpb25zLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAna2V5JzonaWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczpmdW5jdGlvbiAocmVzSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNJZCwncmVzSWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2tleSc6J2tleScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24gKHJlc1VrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc1VrZXkuZGF0YSwndWtleScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmdldFdvcmtEZXRhaWxzKHJlcy5kYXRhLHJlc0lkLmRhdGEscmVzVWtleS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxmYWlsOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0V29ya0RldGFpbHMocmVzLmRhdGEscmVzSWQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxmYWlsOmZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3QoeyAvL+WmguaenOWFqOmDqOWKoOi9veWujOaIkOS6huS5n+W8ueS4gOS4quahhlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+WFiOeZu+W9lScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDYwMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDonL3BhZ2VzL3BlcnNvbmFsL2xvZ2luP3BhZ2U9ZGV0YWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0sNjAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgIHRoaXMuc2Vzc19rZXkgPSBvcHRpb25zLnNlc3Nfa2V5O1xyXG4gICAgICAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAg5YiG5LqrXHJcbiAgICAgICAgICAgIHd4LnNob3dTaGFyZU1lbnUoe1xyXG4gICAgICAgICAgICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWIhuS6q+aIkOWKn1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaGFyZU1lbnUgc2hhcmUgc3VjY2VzcycpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WIhuS6qycrcmVzKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDliIbkuqvlpLHotKVcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIG9uZmlyZS5vbignYXBwbHknLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZXNzX2tleScsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYXBwbHlXb3JrKHJlcy5kYXRhLG9wdGlvbnMuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIHNob3dTaGFyZSgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dTaGFyZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhpZGVTaGFyZSgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dTaGFyZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzYXZlSW1nOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgd3guZG93bmxvYWRGaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHRoYXQuY2lyY2xlUGhvdG8sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczpmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF0aCA9IHJlcy50ZW1wRmlsZVBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmraPlnKjkv53lrZguLi4nLCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbG9hZGluZycsICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwMCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlUGF0aDogcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfkv53lrZjmiJDlip8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pc1Nob3dQaG90byA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXAuZXJyb3IoJ+S/neWtmOWksei0pScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0sZmFpbDpmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXAuZXJyb3IoJ+S4i+i9veWksei0pScpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2Nyb2xsOiBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9WaWV3ID0gZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19hID0gZTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcmRlci5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9yZGVyW2ldID09PSB0aGlzLnRvVmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9WaWV3OiB0aGlzLm9yZGVyW2kgKyAxXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRhcE1vdmU6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLnNjcm9sbFRvcCAtIDEwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRQaG90bygpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dTaGFyZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDaXJjbGVQaG90byh0aGlzLnNlc3Nfa2V5LHRoaXMuaWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoaWRlUGhvdG8oKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93UGhvdG8gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sbGVjdFRhcChhKXtcclxuICAgICAgICAgICAgICAgIGlmKGEgPT0gJ3VuJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bkNvbGxlY3RXb3JrKHRoaXMuc2Vzc19rZXksdGhpcy5pZCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxlY3RXb3JrKHRoaXMuc2Vzc19rZXksdGhpcy5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFwcGx5VGFwKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5V29yayh0aGlzLnNlc3Nfa2V5LHRoaXMuaWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnb1VybCgpe1xyXG4gICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvd29yay9pbmRleCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4iXX0=