'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var regeneratorRuntime = require('../../npm/regenerator-runtime/runtime.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);




var _api = require('./../../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _onfire = require('./../../npm/onfire.js/dist/onfire.min.js');

var _onfire2 = _interopRequireDefault(_onfire);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }
      return step("next");
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var personalIndex = function (_wepy$page) {
  _inherits(personalIndex, _wepy$page);

  function personalIndex() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, personalIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = personalIndex.__proto__ || Object.getPrototypeOf(personalIndex)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      navigationBarTitleText: '我的'
    }, _this2.data = {
      userData: {},
      avatar: '',
      is_show: null,
      fixed: true,
      startY:null,
      formId:[],
      moveTop:0,
      winHeight:null,
      URL:null,
      flag:false,
      listHeight:0,
      // 获取个人资料
    }, _this2.methods = {
     
      formSubmit: function (e) {
        var that=this;
        var url=that.URL;
        if (that.formId.length < 10) that.formId = that.formId.concat(e.detail.formId); 
        if (that.formId.length == 10) {
          wx.getStorage({
            key: 'sess_key',
            success: function (res) {
              that.getUserFormId(res.data, that.data.formId.toString());
            },
          })
          if(that.flag==true){
            if (url == 'personal/salary/salarySearch' && this.userData.resume_fill == 0) {
              wx.navigateTo({
                url: '/pages/personal/profile/certification?road=search'
              });
              return;
            }
            wx.navigateTo({
              url: '/pages/' + url
            });
          }
        }
      },
      goLogin: function goLogin() {
        wx.setStorage({
          key: 'gourl',
          data: '/pages/personal/index',
        })
        wx.navigateTo({
          url: '/pages/personal/login?page=index',
        })
      },
      goUrl: function goUrl(url) {
        var that=this;
        if(that.sess_key){
          that.flag = true;
          that.URL = url;
          console.log(url);
          that.$apply();
          return;
        }
        wx.showToast({
          title: '请先登录授权才能才看信息！',
          icon:'none'
        })
      
      },
      contact:function(){
        var that=this;
        that.flag=false;
        that.$apply();
      },
      start:function(e){
        var that=this;
        //  高度自适应
        that.startX = e.changedTouches[0].pageX;
        that.startY = e.changedTouches[0].pageY;
        that.$apply();
      },
      move:function (e) {
        var that=this;
      
        if (e.changedTouches[0].pageY <= that.startY) {
          that.fixed = false;
          var ih = that.listHeight / 95;
          if (ih <5 ){
           
            console.log(ih)
            that.moveTop =-95*parseFloat(5-ih).toFixed(1);
          }
         
        }
        else{
          that.moveTop = 0;
        } 
      },
    
     
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(personalIndex, [{
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
      key: 'getUserFormId',
      value: function getUserFormId () {
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
    key: 'onShow',
    value: function onShow() {
      var _this = this;
      wx.hideShareMenu();
      _this.formId = [];
      if(wx.getStorageSync('sess_key')){
        wx.getStorage({
          key: 'sess_key',
          success: function success(res) {
            console.log(res)
            _this.sess_key = res.data;
            _this.getuserInfo(res.data);
          }
        });
      }else{
        wx.navigateTo({
          url: '/pages/personal/login?page=index',
        })
      }
      _this.is_show = wx.getStorageSync("compId");
     
      
     console.log( wx.getSystemInfoSync().windowHeight,"??");
      var query = wx.createSelectorQuery();
      var wheight = wx.getSystemInfoSync().windowHeight
      query.select('.avatar-content').boundingClientRect();
      query.selectViewport().scrollOffset();
      query.exec((res) => {
        // var listHeight = wheight-res[0].height; // 获取list高度
        console.log(wheight, res[0].height);
        _this.listHeight=Number(wheight) - Number(res[0].height)
        _this.$apply();
       
      }) ;
      _this.$apply();
    
      wx.getSystemInfo({
        success: function (res) {
          var clientHeight = res.windowHeight;
          var calc = clientHeight;
          _this.winHeight = calc;
          _this.winWidth = res.screenWidth;
        }
      });
      wx.getStorage({
        key: 'user_img',
        success: function success(res) {
          _this.avatar = res.data;
        }
      });
      _onfire2.default.on('loadUserInfo', function () {
        _this.getuserInfo(_this.sess_key);
      });
      _onfire2.default.on('toSearch', function () {
        wx.navigateTo({
          url: '/pages/personal/salary/salarySearch'
        });
      });
    }
    }]);

  return personalIndex;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(personalIndex, 'pages/personal/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInBlcnNvbmFsSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInVzZXJEYXRhIiwiYXZhdGFyIiwibWV0aG9kcyIsImdvVXJsIiwidXJsIiwicmVzdW1lX2ZpbGwiLCJ3eCIsIm5hdmlnYXRlVG8iLCJzZXNzX2tleSIsInRoYXQiLCJ0aXAiLCJsb2FkaW5nIiwiYXBpIiwidXNlckluZm8iLCJtZXRob2QiLCJxdWVyeSIsInJlcyIsImVycm9yX2NvZGUiLCJiaXpvYmoiLCIkYXBwbHkiLCJsb2FkZWQiLCJlcnJvciIsIm1zZyIsIl90aGlzIiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJnZXR1c2VySW5mbyIsIm9uZmlyZSIsIm9uIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsYTs7Ozs7Ozs7Ozs7Ozs7Mk1BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsU0FHVEMsSSxHQUFPO0FBQ0hDLHNCQUFVLEVBRFA7QUFFSEMsb0JBQVE7QUFFWjtBQUpPLFMsU0ErQ1BDLE8sR0FBVTtBQUNOQyxpQkFETSxpQkFDQUMsR0FEQSxFQUNJO0FBQ04sb0JBQUdBLE9BQU8sOEJBQVAsSUFBeUMsS0FBS0osUUFBTCxDQUFjSyxXQUFkLElBQTZCLENBQXpFLEVBQTJFO0FBQ3ZFQyx1QkFBR0MsVUFBSCxDQUFjO0FBQ1ZILDZCQUFLO0FBREsscUJBQWQ7QUFHQTtBQUNIO0FBQ0RFLG1CQUFHQyxVQUFILENBQWM7QUFDVkgseUJBQUssWUFBVUE7QUFETCxpQkFBZDtBQUdIO0FBWEssUzs7Ozs7O2lHQTFDUUksUTs7Ozs7O0FBQ1ZDLG9DLEdBQU8sSTs7QUFDWEMsOENBQUlDLE9BQUo7O3VDQUNvQkMsY0FBSUMsUUFBSixDQUFhLEVBQUNDLFFBQU8sTUFBUixFQUFnQkMsT0FBTTtBQUMzQ1Asa0RBQVNBO0FBRGtDLHFDQUF0QixFQUFiLEM7OztBQUFaUSxtQzs7QUFHSixvQ0FBR0EsSUFBSWpCLElBQUosQ0FBU2tCLFVBQVQsSUFBdUIsR0FBMUIsRUFBOEI7QUFDMUJSLHlDQUFLVCxRQUFMLEdBQWdCZ0IsSUFBSWpCLElBQUosQ0FBU21CLE1BQVQsQ0FBZ0JuQixJQUFoQztBQUNBVSx5Q0FBS1UsTUFBTDtBQUNBVCxrREFBSVUsTUFBSjtBQUNILGlDQUpELE1BSUs7QUFDRFYsa0RBQUlXLEtBQUosQ0FBVUwsSUFBSWpCLElBQUosQ0FBU3VCLEdBQW5CO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FFRDtBQUNKLGdCQUFJQyxRQUFRLElBQVo7QUFDQWpCLGVBQUdrQixVQUFILENBQWM7QUFDVkMscUJBQUssVUFESztBQUVWQyx5QkFBUyxpQkFBU1YsR0FBVCxFQUFhO0FBQ2xCTywwQkFBTUksV0FBTixDQUFrQlgsSUFBSWpCLElBQXRCO0FBQ0g7QUFKUyxhQUFkO0FBTUFPLGVBQUdrQixVQUFILENBQWM7QUFDVkMscUJBQUssVUFESztBQUVWQyx5QkFBUyxpQkFBU1YsR0FBVCxFQUFhO0FBQ2xCTywwQkFBTXRCLE1BQU4sR0FBZWUsSUFBSWpCLElBQW5CO0FBQ0g7QUFKUyxhQUFkO0FBTUE2Qiw2QkFBT0MsRUFBUCxDQUFVLGNBQVYsRUFBMEIsWUFBWTtBQUNsQ3ZCLG1CQUFHa0IsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLLFVBREs7QUFFVkMsNkJBQVMsaUJBQVNWLEdBQVQsRUFBYTtBQUNsQk8sOEJBQU1JLFdBQU4sQ0FBa0JYLElBQUlqQixJQUF0QjtBQUNIO0FBSlMsaUJBQWQ7QUFNSCxhQVBEO0FBUUE2Qiw2QkFBT0MsRUFBUCxDQUFVLFVBQVYsRUFBc0IsWUFBWTtBQUM5QnZCLG1CQUFHQyxVQUFILENBQWM7QUFDVkgseUJBQUs7QUFESyxpQkFBZDtBQUdILGFBSkQ7QUFLSDs7OztFQWxEc0MwQixlQUFLQyxJOztrQkFBM0JuQyxhIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCB0aXAgZnJvbSAnLi4vLi4vdXRpbHMvdGlwJztcclxuICAgIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vYXBpL2FwaSc7XHJcbiAgICBpbXBvcnQgb25maXJlIGZyb20gJ29uZmlyZS5qcyc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBwZXJzb25hbEluZGV4IGV4dGVuZHMgd2VweS5wYWdle1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlckRhdGE6IHt9LFxyXG4gICAgICAgICAgICBhdmF0YXI6ICcnLFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDojrflj5bkuKrkurrotYTmlplcclxuICAgICAgICBhc3luYyBnZXR1c2VySW5mbyhzZXNzX2tleSkge1xyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRpcC5sb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLnVzZXJJbmZvKHttZXRob2Q6J1BPU1QnLCBxdWVyeTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Nfa2V5OnNlc3Nfa2V5XHJcbiAgICAgICAgICAgICAgICAgICAgfX0pXHJcbiAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5lcnJvcl9jb2RlID09ICcwJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VyRGF0YSA9IHJlcy5kYXRhLmJpem9iai5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgICAgICB0aXAubG9hZGVkKClcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5tc2cpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZCgpe1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3Nlc3Nfa2V5JyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0dXNlckluZm8ocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICd1c2VyX2ltZycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmF2YXRhciA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb25maXJlLm9uKCdsb2FkVXNlckluZm8nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZXNzX2tleScsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0dXNlckluZm8ocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb25maXJlLm9uKCd0b1NlYXJjaCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb25hbC9zYWxhcnkvc2FsYXJ5U2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIGdvVXJsKHVybCl7XHJcbiAgICAgICAgICAgICAgICBpZih1cmwgPT0gJ3BlcnNvbmFsL3NhbGFyeS9zYWxhcnlTZWFyY2gnICYmIHRoaXMudXNlckRhdGEucmVzdW1lX2ZpbGwgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb25hbC9wcm9maWxlL2NlcnRpZmljYXRpb24/cm9hZD1zZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy8nK3VybFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiJdfQ==