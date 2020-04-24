
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

var _info = require('./../../components/common/info.js');

var _info2 = _interopRequireDefault(_info);

var _nav = require('./../../components/common/nav.js');

var _nav2 = _interopRequireDefault(_nav);

var _formid = require('./../../components/CustomerService/CustomerService.js');

var _formid2 = _interopRequireDefault(_formid);

var _onfire = require('./../../npm/onfire.js/dist/onfire.min.js');

var _onfire2 = _interopRequireDefault(_onfire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexIndex = function (_wepy$page) {
    _inherits(IndexIndex, _wepy$page);

    function IndexIndex() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, IndexIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = IndexIndex.__proto__ || Object.getPrototypeOf(IndexIndex)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '首页',
            enablePullDownRefresh: true
        }, _this2.$repeat = { "nav_list": { "com": "nav", "props": "list.sync" }, "work_list": { "com": "info", "props": "list.sync" } }, _this2.$props = { "nav": { "xmlns:v-bind": { "value": "", "for": "nav_list", "item": "item", "index": "index", "key": "index" }, "v-bind:list.sync": { "value": "item", "type": "item", "for": "nav_list", "item": "item", "index": "index", "key": "index" } }, "info": { "v-bind:list.sync": { "value": "item", "type": "item", "for": "work_list", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "work_list", "item": "item", "index": "index", "key": "index" } } }, _this2.$events = { "info": { "v-on:infoTap": "detailTap" } }, _this2.components = {
            info: _info2.default,
            nav: _nav2.default
        }, _this2.data = {
            nav_list: [{
                name: '热门招聘',
                src: 'icon_rmzp',
                url: '/pages/work/index'
            }/*, {
                name: '伯乐排行',
                src: 'icon_blph',
                url: '/pages/index/bole'
            }*/
            , {
                name: '小时工',
                src: 'icon_blph',
                url: '/pages/work/Hourly'
            }, {
                name: '工资查询',
                src: 'icon_jnpx',
                url: '/pages/personal/salary/salarySearch'
            }, {
                name: "申请合作",
                src: 'icon_qz',
              url: '/pages/index/cooperation'
            }],
            work_list: [],
            page_info: { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 },
            select_city: {
                "area_name": "杭州市",
                "areano": null,
            },
          formId:[],
          scroll: false,
          winHeight:null,
          winWidth:null,
          //广告图片
          adUrl: [],
          compId:null,
          companyInfo: null,
          activeIndex: 2,
          swiper: {
            imgUrls: ['https://recruit.czucw.com/uploads/20180630/174242303351065edf04bca55b961e7a.jpeg'],
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 1000
          },
          all_list:[],
          comukey:"",
          userData:{},
          sess_key:'',
        }, _this2.methods = {
            detailTap: function detailTap(v) {
              console.log(v);
              var _this=this;
              wx.navigateTo({
                url: '/pages/work/workDetails?sess_key=' + _this.sess_key + '&id=' + v.id
              });

            },
          detail: function detail(v) {
            console.log(v)
            var _this=this;
            wx.navigateTo({
              url: '/pages/work/workDetails?sess_key=' + _this.sess_key + '&id=' + v.currentTarget.id
            });
          },
          tab: function (e) {
            var index = e.currentTarget.dataset.index;
            this.activeIndex = index;
            if (index == '0') {
              wx.navigateTo({
                url: '../personal/profile/certification',
              })
            }
            else if (index == 1) {
              wx.switchTab({
                url: '../personal/index',
              })
            } else {
              wx.switchTab({
                url: './index',
              })
            }
            this.$apply();
          },
        
          
            inputTap: function inputTap() {
                wx.navigateTo({
                    url: '/pages/index/search'
                });
            },
            locationTap: function locationTap() {
                wx.navigateTo({
                    url: '/pages/index/location'
                });
            },
          adDetail: function (e) {
            wx.navigateTo({
              url: '/pages/work/adDetails?title=' + e.currentTarget.dataset.title,
            })
          },
        
         
         
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

  _createClass(IndexIndex, [{
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
    // 短信验证码

  }, {
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

      function getcompanyInfo(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return getcompanyInfo;
    }()

  }, {
      key: 'getCompanyList',
      value: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key, _id) {
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
                      id: _id,
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

        function getCompanyList(_x, _x1) {
          return _ref2.apply(this, arguments);
        }

        return getCompanyList;
      }()
    },{
        key: 'getWorkList',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key, areano) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context.next = 4;
                            console.log(areano)
                                return _api2.default.recWorkList({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        is_rec: 1,
                                        //areano: areano || "",
                                        prov_code: areano?areano.split('-')[0]:'',
                                        city_code:areano?areano.split('-')[1]:'',
                                        district_code:areano?areano.split('-')[2]:'',
                                        page: Number(that.page_info.cur_page) + 1 || 1,
                                        page_size: that.page_info.page_size,
                                        latitude: that.latitude,
                                        longitude: that.longitude
                                    } });

                            case 4:
                                res = _context.sent;

                                if (res.data.error_code == 0) {
                                    if (res.data.bizobj.data == null) {
                                        that.work_list = [];
                                        that.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 };
                                    } else {
                                        if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                                            that.work_list = that.work_list.concat(res.data.bizobj.data);
                                        } else {
                                            that.work_list = res.data.bizobj.data;
                                        }
                                        that.page_info = res.data.bizobj.page_info;
                                    }
                                    that.$apply();
                                    _tip2.default.loaded();
                                }  else {
                                    _tip2.default.error(res.data.error_msg);
                                }

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getWorkList(_x, _x2) {
                return _ref2.apply(this, arguments);
            }

            return getWorkList;
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
      },
     {
        key: 'getLocation',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sess_key, latitude, longitude) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context2.next = 4;
                                return _api2.default.defaultDistrict({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        latitude: latitude,
                                        longitude: longitude
                                    } });

                            case 4:
                                res = _context2.sent;

                                if (res.data.error_code == 0) {
                                    var prov_code=res.data.bizobj.data.position.prov.code,prov_name=res.data.bizobj.data.position.prov.name,city_code=res.data.bizobj.data.position.city.code,city_name=res.data.bizobj.data.position.city.name,district_name=res.data.bizobj.data.position.district.name,district_code=res.data.bizobj.data.position.district.code;
                                    that.select_city = {"area_name":district_name,"areano":prov_code+'-'+city_code+'-'+district_code};
                                  if (that.compId == null ){
                                    that.getWorkList(sess_key, that.select_city.areano);
                                  }
                                    
                                  that.getuserInfo(sess_key);
                                    that.$apply();
                                    _tip2.default.loaded();
                                } else {
                                    _tip2.default.error(res.data.msg);
                                }

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getLocation(_x3, _x4, _x5) {
                return _ref3.apply(this, arguments);
            }

            return getLocation;
        }()
    }, {
      key: 'getWebInfo',
      value: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var that, res;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  that = this;
                  _context3.next = 3;
                  return _api2.default.webInfo({ method: 'POST', query: {} });

                case 3:
                  res = _context3.sent;

                  if (res.data.error_code == 0) {
                    that.webInfo = res.data.bizobj.data;
                    that.$apply();
                  }

                case 5:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function getWebInfo() {
          return _ref4.apply(this, arguments);
        }

        return getWebInfo;
      }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            var that = this;
            console.log("index......")
          wx.hideShareMenu();
          that.getAdv();
          // options.scene = "comp_id%3D32%26ukey%3DNzE%3D%26workid%3D149"; //驻场岗位详情
          //  options.scene = "ukey%3DMzY%3D%26workid%3D181"; //岗位详情
          // options.scene = "ukey%3DNTA0NQ%3D%3D%26train_id%3D126"; //暂未开发
          // options.scene = "comp_id%3D32%26ukey%3DNzg%3D" //驻场首页
          // options.scene='ukey%3DMzy%3dD'; //工头首页
          console.log('第一次', options.scene, options)
          console.log('第一次解密', decodeURIComponent(options.scene))
          console.log(decodeURIComponent(options.scene).split("="));
          var compArr = decodeURIComponent(options.scene).split("comp_id=");
          that.sess_key=wx.getStorageSync("sess_key");
          if (wx.getStorageSync("compId") && wx.getStorageSync("compId") != null && wx.getStorageSync("compId") != undefined){
            that.compId = wx.getStorageSync("compId");
          }else{
            wx.setStorage({
              key: 'compId',
              data: null,
            })
          }
          if (decodeURIComponent(options.scene).indexOf("comp_id") != -1) {
            wx.setStorage({
              key: 'compId',
              data: compArr[1].split("&")[0],
            })
            that.compId = compArr[1].split("&")[0];
          }
          if (decodeURIComponent(options.scene).indexOf("workid") != -1 || decodeURIComponent(options.scene).indexOf("train_id") != -1) {
            that.detailId = decodeURIComponent(options.scene).split("workid=")[1];
          }
          console.log(that.detailId)
          if (options && options.page) {
            this.page = options.page;
          }
          if (options && options.scene) {
            var scene = decodeURIComponent(options.scene);
            that.optScence = scene
            wx.setStorage({
              key: 'scene',
              data: scene
            });
          
            that.$apply();

              var scene = decodeURIComponent(options.scene);
              that.optScene=scene;
              wx.setStorage({
                  key: 'scene',
                  data: scene
              });
            var arr = that.optScence.split("ukey=");
           
            if (that.optScence.indexOf("ukey") != -1 && that.optScence.indexOf("comp_id") != -1) {
              wx.setStorage({
                key: 'compUkey',
                data: arr[1].split("&")[0],
              })
              wx.setStorage({
                key: 'ukey',
                data: arr[1].split("&")[0]
              })
              that.ukey = arr[1].split("&")[0]+'';
            } else if (that.optScence.indexOf("ukey") != -1 && that.optScence.indexOf("&") != -1) {
              wx.setStorage({
                key: 'ukey',
                data: arr[1].split("&")[0]
              })
              that.ukey = arr[1].split("&")[0] + '';
            } else if (that.optScence.indexOf("ukey") != -1 && that.optScence.indexOf("&") == -1) {
              wx.setStorage({
                key: 'ukey',
                data: arr[1].split("&")[0]
              })
              that.ukey = arr[1].split("&")[0] + '';
            }
            that.$apply();

          
            if (that.optScence && that.optScence.indexOf('ukey') != -1 && that.optScence.indexOf('workid') != -1) { //二维码岗位详情
            
              console.log(arr[1].split("&")[0], that.ukey , typeof (that.ukey))
              wx.reLaunch({
                url: '/pages/work/workDetails?id=' + that.detailId + '&ukey=' + that.ukey
              });
              return false;
            } else if (that.optScence && that.optScence.indexOf('workid') != -1) { //岗位详情
              wx.reLaunch({
                url: '/pages/work/workDetails?id=' + that.detailId
              });
            }
            else if (that.optScence && that.optScence.indexOf('ukey') != -1 && that.optScence.indexOf('train_id') != -1) { //培训详情
              var scene = that.optScence; //'ukey=NQ==&workid=32'
              wx.reLaunch({
                url: '/pages/skill/skillDetails?sess_key=' + that.ukey + '&id=' + that.detailId
              });
              return false;
            }
         
            else {
              _onfire2.default.on('search', function (args) {
                console.log(args)
                that.select_city = args.inputVal.area_name ? args.inputVal : that.select_city;
              });
             
            }

          }   
  
        }
    }, {
      key: 'userBelong',
      value: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(sess_key) {
          var that, res;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  that = this;
                  _context3.next = 3;
                  return _api2.default.userBelong({
                    method: 'POST', query: {
                      sess_key: sess_key,
                    }
                  });

                case 3:
                  res = _context3.sent;

                  if (res.data.error_code == 0) {
                    wx.setStorage({
                      key: 'compId',
                      data: res.data.bizobj.data.comp_id,
                    })
                    that.compId = res.data.bizobj.data.comp_id;
                    if (res.data.bizobj.data.comp_id) {
                   
                      console.log(res.data.bizobj.data.comp_id)
                      wx.setTabBarItem({
                        index: 1,
                        text: '薪资查询',
                      })
                      if (wx.getStorageSync('compUkey')) {
                        wx.getStorage({
                          key: 'compUkey',
                          success: function (res) {
                            console.log(res)
                            that.comukey = res.data;
                          },
                        })
                      }
                      that.getcompanyInfo(wx.getStorageSync("sess_key"), that.compId, that.comukey);
                      that.getCompanyList(wx.getStorageSync("sess_key"), that.compId);
                    } else {
                      wx.setStorage({
                        key: 'compId',
                        data: null,
                      })
                     
                    }

                    that.$apply();
                  }

                case 5:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function userBelong(x1) {
          return _ref4.apply(this, arguments);
        }

        return userBelong;
      }()
    },
      {
        key: 'onShow',
        value: function onShow() {
          var _this = this;
          _this.formId=[];
          _this.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 };
          wx.getLocation({
            type: 'wgs84',
            success: function success(data) {
              console.log(_this.sess_key, "////")
              _this.latitude = data.latitude;
              _this.longitude = data.longitude;
              _this.getLocation(wx.getStorageSync("sess_key"), data.latitude, data.longitude);
            }
          });
          console.log(wx.getStorageSync("compId"))
          setTimeout(function(){
            if (wx.getStorageSync("scene")){

            }else  _this.userBelong(wx.getStorageSync('sess_key'));
          },100)
          if (wx.getStorageSync('sess_key')){
            _this.userBelong(wx.getStorageSync('sess_key'));
          }else{
            if (wx.getStorageSync("compId")) {  //驻场首页
              _this.compId = wx.getStorageSync("compId");
              wx.setTabBarItem({
                index: 1,
                text: '薪资查询',
              })
              if (wx.getStorageSync('compUkey')) {
                wx.getStorage({
                  key: 'compUkey',
                  success: function (res) {
                    console.log(res)
                    _this.comukey = res.data;
                  },
                })
              }
              _this.getcompanyInfo(wx.getStorageSync("sess_key"), wx.getStorageSync("compId"), wx.getStorageSync('compUkey'));
              _this.getCompanyList(wx.getStorageSync("sess_key"), wx.getStorageSync("compId"));

            }
          }
         
          _this.$apply();
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
              if (_this.compId != null) {
                _this.getCompanyList(_this.sess_key, _this.compId);
              }
              else _this.getWorkList(_this.sess_key, _this.select_city.areano);
            }
        }
    }]);

    return IndexIndex;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(IndexIndex , 'pages/index/index'));
