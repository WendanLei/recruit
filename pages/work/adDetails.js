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

var _htmlParser = require('./../../components/common/htmlParser.js');

var _htmlParser2 = _interopRequireDefault(_htmlParser);

var _wxParse = require('./../../wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var adDetails = function (_wepy$page) {
  _inherits(adDetails, _wepy$page);

  function adDetails() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, adDetails);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = adDetails.__proto__ || Object.getPrototypeOf(adDetails)).call.apply(_ref, [this].concat(args))), _this),  _this.data = {
      all_data: {
        has_apply: 0
      },
      detailTitle: null,
      name1: "myHtmlParserKiner1",
      content1: "<text style='color: red;'>新1</text>"
    }, _this.$repeat = {}, _this.$props = { "htmlParser": { "xmlns:v-bind": "", "v-bind:parserName.once": "name1", "v-bind:parserContent.sync": "content1" } }, _this.$events = {}, _this.components = {
      htmlParser: _htmlParser2.default
    }, _this.methods = {
      applyTrain: function applyTrain() {
        var that = this;
        if (!that.all_data.has_apply) {
          wx.getStorage({
            key: 'sess_key',
            success: function success(res) {
              that.applyTrain(res.data, that.all_data.id);
            }
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(adDetails, [{
    key: 'getAdDetails',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;

                _tip2.default.loading();
                _context.next = 4;
                return _api2.default.Adv({
                  method: 'POST', query: {
                    
                  }
                });

              case 4:
                res = _context.sent;

                if (res.data.error_code == 0) {
                  that.all_data = res.data.bizobj.data;
                  var _content = res.data.bizobj.data.content;
                  _wxParse2.default.wxParse('htmlParserName', "html", _content, that, 0);
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

      function getAdDetails() {
        return _ref2.apply(this, arguments);
      }

      return getAdDetails;
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
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      // WxParse.wxParse('htmlParserName' , "html", "<p style='font-size: 32rpx; padding: 30rpx 0; text-align: center;'>没有任何内容</p>", this,0);
      let _this = this;
      this.getAdDetails(options.sess_key, options.id);
      

    }
  }]);

  return adDetails;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(adDetails, 'pages/work/adDetails'));
