const mtjwxsdk = require('./utils/mtj-wx-sdk.js');
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

// require('./npm/wepy-async-function/index.js');

var _api = require('./api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');
var regeneratorRuntime = require('./npm/regenerator-runtime/runtime.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/personal/login', 'pages/index/index', 'pages/index/bole', 'pages/index/search', 'pages/index/location', 'pages/personal/profile/index', 'pages/personal/wallet/index', 'pages/personal/wallet/cash', 'pages/personal/wallet/cashSuccess', 'pages/personal/wallet/cashRecord', 'pages/personal/wallet/fundDetail', 'pages/personal/team/myTeam', 'pages/personal/application/applicationRecord', 'pages/personal/need/need', 'pages/personal/salary/salarySearch', 'pages/personal/salary/salaryDetail', 'pages/personal/salary/salaryAdvance', 'pages/personal/complaint/complaintAdvice', 'pages/personal/code/code', 'pages/personal/index', 'pages/work/index', 'pages/work/workDetails', 'pages/skill/index', 'pages/skill/skillDetails', 'pages/personal/profile/certification', 'pages/index/circle','pages/personal/upload/upload'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#4C80F5',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'white',
        enablePullDownRefresh: true
      },
    
      
     
    },_this.method={
    
    };
    _this.globalData = {
      sess_key: '122233',

      baseUrl: 'https://recruit.czucw.com/' //正式库
      // baseUrl: 'https://recruit.pinecc.cn/'  // 测试库
   
   

    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
      var that = this;
      // wx.setStorage({
      //     'key':'sess_key',
      //     'data':'122112'
      // });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      console.log(options, 'aaaaa');
    
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data,"??////");

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.sess_key) {
        return this.globalData.sess_key;
      }

      _wepy2.default.getUserInfo({
        success: function success(res) {
          console.log(res,"////")
          // that.globalData.sess_key = res.sess_key
          that.globalData.sess_key = '122212';
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

