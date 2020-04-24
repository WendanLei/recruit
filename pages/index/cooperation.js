'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('../../npm/wepy/lib/wepy.js');

var regeneratorRuntime = require('../../npm/regenerator-runtime/runtime.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _api = require('../../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _onfire = require('../../npm/onfire.js/dist/onfire.min.js');

var _onfire2 = _interopRequireDefault(_onfire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cooperation = function (_wepy$page) {
  _inherits(cooperation, _wepy$page);

  function cooperation() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, cooperation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = cooperation.__proto__ || Object.getPrototypeOf(cooperation)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      navigationBarTitleText: ''
    }, _this2.data = {
      sess_key: '',
      userData: null,
      road: null,
      imgUrl:null,
      activityIndex:1,
      // 更新个人资料
    }, _this2.methods = {
      tab: function tab(e){
        console.log(e)
        var that=this;
        that.activityIndex=e.currentTarget.dataset.index;
        // that.$apply();
      },
      applyJob: function applyJob(e){
        console.log(e,"///")
        var data={
          sess_key:this.sess_key,
          company_name:e.detail.value.comname,
          name:e.detail.value.username,
          mobile:e.detail.value.tel,
          license:e.detail.value.url,
        }
        this.applyRecruit(data);
      },
      applyLeader: function applyLeader(e) {
        console.log(e, "....///")
        var data = {
          sess_key: this.sess_key,
          address:e.detail.value.address,
          name:e.detail.value.username,
          mobile:e.detail.value.tel,
          info:e.detail.value.info,
        }
        this.applyHead(data);
      },
      bindChooiceProduct: function bindChooiceProduct() {
        var that = this;
        wx.chooseImage({
          count: 1, //最多可以选择的图片总数  
          sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有  
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
          success: function success(res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            console.log(res, "////111111");
            var tempFilePaths = res.tempFilePaths;
            //启动上传等待中...  
            wx.showToast({
              title: '正在上传...',
              icon: 'loading',
              mask: true,
              duration: 2000
            });
            // that.upload({ sess_key: that.sess_key, image: tempFilePaths[0]});
            var uploadImgCount = 0;
            for (var i = 0, h = tempFilePaths.length; i < h; i++) {
              wx.uploadFile({
                url: 'https://recruit.czucw.com/api/File/uploadImagesBase64.html',
                filePath: tempFilePaths[i], //临时地址路径
                name: 'pic_info',
                formData: {
                  'sess_key': that.sess_key,
                  // image:tempFilePaths[i]
                },
                header: {
                  "Content-Type": "multipart/form-data"
                },
                success: function success(res) {
                  console.log(JSON.parse(res.data), JSON.parse(res.data).bizobj.image_url);
                  that.imgUrl = JSON.parse(res.data).bizobj.image_url;
                  that.$apply();

                  //如果是最后一张,则隐藏等待中  
                  if (uploadImgCount == tempFilePaths.length) {
                    wx.hideToast();
                  }
                },
                fail: function fail(res) {
                  wx.hideToast();
                  wx.showModal({
                    title: '错误提示',
                    content: '上传图片失败',
                    showCancel: false,
                    success: function success(res) { }
                  });
                }
              });
            }
          }
        });
      }
      
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(cooperation, [{
    key: 'applyRecruit',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var that, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;

                _tip2.default.loading();
                _context.next = 4;
                return _api2.default.applyRecruit({ method: 'POST', query: data });

              case 4:
                res = _context.sent;

                if (res.data.error_code == '0') {
                  _tip2.default.success('提交成功');
                 setTimeout(function(){
                      wx.navigateBack({
                        delta: 1
                      });
                    },2000)
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

      function applyRecruit(_x) {
        return _ref2.apply(this, arguments);
      }

      return applyRecruit;
    }()
  }, {
      key: 'applyHead',
      value: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
          var that, res;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  that = this;

                  _tip2.default.loading();
                  _context.next = 4;
                  return _api2.default.applyHead({ method: 'POST', query: data });

                case 4:
                  res = _context.sent;

                  if (res.data.error_code == '0') {
                    _tip2.default.success('提交成功');
                    setTimeout(function(){
                      wx.navigateBack({
                        delta: 1
                      });
                    },2000)
                  
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

        function applyHead(_x) {
          return _ref2.apply(this, arguments);
        }

        return applyHead;
      }()
    },
    {
      key: 'upload',
      value: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
          var that, res;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  that = this;

                  _tip2.default.loading();
                  _context.next = 4;
                  return _api2.default.upload({ method: 'POST', query: data });

                case 4:
                  res = _context.sent;

                  if (res.data.error_code == '0') {
                    
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

        function upload(_x) {
          return _ref2.apply(this, arguments);
        }

        return upload;
      }()
    }, {
    key: 'onLoad',
    value: function onLoad(o) {
      var _this = this;
      _this.road = o.road;
      wx.getStorage({
        key: 'sess_key',
        success: function success(res) {
          _this.sess_key = res.data;
        }
      });
    }
  }, {
    key: 'onUnload',
    value: function onUnload() {
      if (this.road == 'search') {
        if (this.userData) {
          _onfire2.default.fire('toSearch');
        }
      } else {
        _onfire2.default.fire('loadUserInfo');
      }
    }
  }]);

  return cooperation;
}(_wepy2.default.page);


Page(require('../../npm/wepy/lib/wepy.js').default.$createPage(cooperation, 'pages/index/cooperation'));

