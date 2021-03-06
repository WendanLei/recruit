'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var regeneratorRuntime = require('../../../npm/regenerator-runtime/runtime.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./../../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _api = require('./../../../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _noData = require('./../../../components/common/noData.js');

var _noData2 = _interopRequireDefault(_noData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var resumeNote = function (_wepy$page) {
  _inherits(resumeNote, _wepy$page);

  function resumeNote() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, resumeNote);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = resumeNote.__proto__ || Object.getPrototypeOf(resumeNote)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
      note:null,
      leng:'100',
      hasLeng:0,


    }, _this2.$repeat = {}, _this2.$props = { "NoData": {} }, _this2.$events = {}, _this2.components = {
      NoData: _noData2.default

      // 获取我的邀请
    }, _this2.methods = {
      inputValue:function(e){
        console.log(e);
        this.note = e.detail.value;
        this.hasLeng = e.detail.value.length;
        this.$apply();
      },
      complete: function(){
        var _this=this;
        wx.getStorage({
          key: 'resumedId',
          success: function (_res) {
            wx.getStorage({
              key: 'sess_key',
              success: function (res) {
                _this.changeResume(res.data,_res.data,_this.note )
              },
            })
          },
        })
        
      },

    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(resumeNote, [{
    key: 'changeResume',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key, resume_id, info) {
        var that, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;

                _tip2.default.loading();
                _context.next = 4;
                return _api2.default.changeResume({
                  method: 'POST', query: {
                    sess_key: sess_key,
                    id: resume_id,
                    tips: info
                  }
                });

              case 4:
                res = _context.sent;

                if (res.data.error_code == '0') {
                  wx.navigateBack({
                    delta: 1
                  })
                }
                that.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function changeResume(_x, _x1, _x2) {
        return _ref2.apply(this, arguments);
      }

      return changeResume;
    }()
  },{
    key: 'onLoad',
    value: function onLoad() {
      var _this = this;

    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      wx.stopPullDownRefresh();
    }
  }
  ]);

  return resumeNote;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(resumeNote, 'pages/personal/resume/resumeNote'));
