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

var _info = require('./../../../components/common/info.js');

var _info2 = _interopRequireDefault(_info);

var _onfire = require('./../../../npm/onfire.js/dist/onfire.min.js');

var _onfire2 = _interopRequireDefault(_onfire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var applicationRecord = function (_wepy$page) {
  _inherits(applicationRecord, _wepy$page);

  function applicationRecord() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, applicationRecord);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = applicationRecord.__proto__ || Object.getPrototypeOf(applicationRecord)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      navigationBarTitleText: '申请记录',
      enablePullDownRefresh: true
    }, _this2.data = {
      index: 0,
      sess_key: '',
      list0: [],
      list1: [],
      page_info: { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 },
      page_info1: { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 },
      //我的报名
      skill_list: [],
      activeName: "培训",
    }, _this2.$repeat = { "list0": { "com": "Info", "props": "list.sync" }, "list1": { "com": "Info", "props": "list.sync" } }, _this2.$props = { "Info": { "v-bind:list.sync": { "value": "item", "type": "item", "for": "list1", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "list0", "item": "item", "index": "index", "key": "index" }, "v-bind:isShowCancelCollect.sync": { "value": "true", "for": "list1", "item": "item", "index": "index", "key": "index" } } }, _this2.$events = { "Info": { "v-on:infoTap": "detailTap" } }, _this2.components = {
      Info: _info2.default
      // 获取申请记录
    }, _this2.methods = {
      tab: function tab(index) {
        var _this=this;
        this.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 };
        if (index == 0) {
          this.list0 = [];
          this.getapplyWorkList(this.sess_key);
        }
        else if (index == 1) {
          this.list1 = [];
          this.getcollectWorkList(this.sess_key);
        } else {
          wx.getStorage({
            key: 'sess_key',
            success: function success(res) {
              _this.page_info.cur_page = 0;
                _this.getapplyTrainList(res.data);
              
            }
          })
        }
        this.index = index;
      },
      
      detailTap: function detailTap(v) {
        wx.navigateTo({
          url: '/pages/work/workDetails?sess_key=' + this.sess_key + '&id=' + v.re_job_id
        });
      },
      signTap: function detailTap(v) {
        console.log(v,"///")
        wx.setStorage({
          key: 'detailTitle',
          data: this.activeName,
        })
        wx.getStorage({
          key: 'sess_key',
          success: function success(res) {
            wx.navigateTo({
              url: '/pages/skill/skillDetails?sess_key=' + res.data + '&id=' + v.currentTarget.id
            });
          }
        });
      },
      goUrl: function goUrl() {
        _onfire2.default.fire('work', { inputVal: 1 });
        wx.switchTab({
          url: '/pages/work/index'
        });
      }
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(applicationRecord, [{
    key: 'getapplyWorkList',
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
                return _api2.default.applyWorkList({
                  method: 'POST', query: {
                    sess_key: sess_key,
                    page: Number(that.page_info.cur_page) + 1 || 1,
                    page_size: that.page_info.page_size
                  }
                });

              case 4:
                res = _context.sent;

                if (res.data.error_code == '0') {
                  console.log("调接口了", that.page_info.page_size, Number(that.page_info.cur_page) + 1 || 1);
                  if (res.data.bizobj.data == null) {
                    that.list0 = [];
                    that.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 };
                  } else {
                    if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                      that.list0 = that.list0.concat(res.data.bizobj.data);
                    } else {
                      that.list0 = res.data.bizobj.data;
                    }
                    that.page_info = res.data.bizobj.page_info;
                  }
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

      function getapplyWorkList(_x) {
        return _ref2.apply(this, arguments);
      }

      return getapplyWorkList;
    }()
    // 获取收藏记录
  }, {
    key: 'getcollectWorkList',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sess_key) {
        var that, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;

                _tip2.default.loading();
                _context2.next = 4;
                return _api2.default.collectWorkList({
                  method: 'POST', query: {
                    sess_key: sess_key,
                    page: Number(that.page_info.cur_page) + 1 || 1,
                    page_size: that.page_info.page_size
                  }
                });

              case 4:
                res = _context2.sent;

                if (res.data.error_code == '0') {
                  if (res.data.bizobj.data == null) {
                    that.list1 = [];
                    that.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 };
                  } else {
                    if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                      that.list1 = that.list1.concat(res.data.bizobj.data);
                    } else {
                      that.list1 = res.data.bizobj.data;
                    }
                    that.page_info = res.data.bizobj.page_info;
                  }
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

      function getcollectWorkList(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getcollectWorkList;
    }()
  }, 
  {
    //我的报名列表
    key: 'getapplyTrainList',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sess_key) {
        var that, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;

                _tip2.default.loading();
                _context2.next = 4;
                return _api2.default.applyTrainList({
                  method: 'POST', query: {
                    sess_key: sess_key,
                    page: Number(that.page_info.cur_page) + 1 || 1,
                    page_size: that.page_info.page_size
                  }
                });

              case 4:
                res = _context2.sent;
                if (res.data.error_code == '0') {


                  if (res.data.bizobj.data == null) {
                    that.skill_list = [];
                    that.page_info = { cur_page: 0, page_size: 8, total_items: 2, total_pages: 0 };
                  } else {

                    if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                      that.skill_list = that.skill_list.concat(res.data.bizobj.data);
                    } else {
                      that.skill_list = res.data.bizobj.data;
                    }
                    that.page_info = res.data.bizobj.page_info;


                  }



                  that.$apply();
                }




              case 6:

              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getapplyTrainList(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getapplyTrainList;
    }()
  },
  {
    key: 'onLoad',
    value: function onLoad(options) {
      var _this = this;
      _this.page_info.cur_page=0;
      wx.getStorage({
        key: 'sess_key',
        success: function success(res) {
          _this.sess_key = res.data;
          if(options.index){
            _this.index = options.index;
            _this.getapplyTrainList(res.data);
          }else{
            _this.getapplyWorkList(res.data);
          }
         
        }
      });
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
      console.log(_this.page_info.cur_page , _this.page_info.total_pages,"////")
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
            if (_this.index == 0) {
              _this.getapplyWorkList(res.data);
            } else if (_this.index == 1) {
              _this.getcollectWorkList(res.data);
            }else {
               
                    _this.getapplyTrainList(res.data);
                 
              }
            }
        });
      }
    }
  }]);

  return applicationRecord;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(applicationRecord, 'pages/personal/application/applicationRecord'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGxpY2F0aW9uUmVjb3JkLmpzIl0sIm5hbWVzIjpbImFwcGxpY2F0aW9uUmVjb3JkIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJpbmRleCIsInNlc3Nfa2V5IiwibGlzdDAiLCJsaXN0MSIsInBhZ2VfaW5mbyIsImN1cl9wYWdlIiwicGFnZV9zaXplIiwidG90YWxfaXRlbXMiLCJ0b3RhbF9wYWdlcyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkluZm8iLCJtZXRob2RzIiwidGFiIiwiZ2V0YXBwbHlXb3JrTGlzdCIsImdldGNvbGxlY3RXb3JrTGlzdCIsImRldGFpbFRhcCIsInYiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJyZV9qb2JfaWQiLCJnb1VybCIsIm9uZmlyZSIsImZpcmUiLCJpbnB1dFZhbCIsInN3aXRjaFRhYiIsInRoYXQiLCJ0aXAiLCJsb2FkaW5nIiwiYXBpIiwiYXBwbHlXb3JrTGlzdCIsIm1ldGhvZCIsInF1ZXJ5IiwicGFnZSIsIk51bWJlciIsInJlcyIsImVycm9yX2NvZGUiLCJiaXpvYmoiLCJjb25jYXQiLCIkYXBwbHkiLCJsb2FkZWQiLCJlcnJvciIsIm1zZyIsImNvbGxlY3RXb3JrTGlzdCIsIl90aGlzIiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJ3ZXB5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsaUI7Ozs7Ozs7Ozs7Ozs7O21OQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyxtQ0FBc0I7QUFGakIsUyxTQUlUQyxJLEdBQU87QUFDSEMsbUJBQU8sQ0FESjtBQUVIQyxz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LElBQUosQ0FBUzhDLEdBQW5CO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FFRDtBQUNKLGdCQUFJRSxRQUFRLElBQVo7QUFDQTNCLGVBQUc0QixVQUFILENBQWM7QUFDVkMscUJBQUssVUFESztBQUVWQyx5QkFBUyxpQkFBU1osR0FBVCxFQUFhO0FBQ2xCUywwQkFBTTlDLFFBQU4sR0FBaUJxQyxJQUFJdkMsSUFBckI7QUFDQWdELDBCQUFNL0IsZ0JBQU4sQ0FBdUJzQixJQUFJdkMsSUFBM0I7QUFDSDtBQUxTLGFBQWQ7QUFPSDs7OzRDQUNrQjtBQUNqQnFCLGVBQUcrQixtQkFBSDtBQUNEOzs7d0NBQ2M7QUFDWCxnQkFBSUosUUFBUSxJQUFaO0FBQ0EsZ0JBQUdBLE1BQU0zQyxTQUFOLENBQWdCQyxRQUFoQixJQUE0QjBDLE1BQU0zQyxTQUFOLENBQWdCSSxXQUEvQyxFQUEyRDtBQUN2RFksbUJBQUdnQyxTQUFILENBQWEsRUFBRTtBQUNYQywyQkFBTyxTQURFO0FBRVRDLDBCQUFNLFNBRkc7QUFHVEMsOEJBQVU7QUFIRCxpQkFBYjtBQUtILGFBTkQsTUFNSztBQUNEbkMsbUJBQUc0QixVQUFILENBQWM7QUFDVkMseUJBQUssVUFESztBQUVWQyw2QkFBUyxpQkFBU1osR0FBVCxFQUFhO0FBQ2xCLDRCQUFHUyxNQUFNL0MsS0FBTixJQUFlLENBQWxCLEVBQW9CO0FBQ2hCK0Msa0NBQU0vQixnQkFBTixDQUF1QnNCLElBQUl2QyxJQUEzQjtBQUNILHlCQUZELE1BRUs7QUFDRGdELGtDQUFNOUIsa0JBQU4sQ0FBeUJxQixJQUFJdkMsSUFBN0I7QUFDSDtBQUVKO0FBVFMsaUJBQWQ7QUFXSDtBQUNKOzs7O0VBM0cwQ3lELGVBQUtwQixJOztrQkFBL0J6QyxpQiIsImZpbGUiOiJhcHBsaWNhdGlvblJlY29yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQgdGlwIGZyb20gJy4uLy4uLy4uL3V0aWxzL3RpcCc7XHJcbiAgICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xyXG4gICAgaW1wb3J0IEluZm8gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vaW5mbyc7XHJcbiAgICBpbXBvcnQgb25maXJlIGZyb20gJ29uZmlyZS5qcyc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBhcHBsaWNhdGlvblJlY29yZCBleHRlbmRzIHdlcHkucGFnZXtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnlLPor7forrDlvZUnLFxyXG4gICAgICAgICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6dHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBpbmRleDogMCxcclxuICAgICAgICAgICAgc2Vzc19rZXk6ICcnLFxyXG4gICAgICAgICAgICBsaXN0MDogW10sXHJcbiAgICAgICAgICAgIGxpc3QxOiBbXSxcclxuICAgICAgICAgICAgcGFnZV9pbmZvOntjdXJfcGFnZTowLCBwYWdlX3NpemU6IDgsIHRvdGFsX2l0ZW1zOiAyLCB0b3RhbF9wYWdlczogMX0sXHJcbiAgICAgICAgfVxyXG4gICAgICAgJHJlcGVhdCA9IHtcImxpc3QwXCI6e1wiY29tXCI6XCJJbmZvXCIsXCJwcm9wc1wiOlwibGlzdC5zeW5jXCJ9LFwibGlzdDFcIjp7XCJjb21cIjpcIkluZm9cIixcInByb3BzXCI6XCJsaXN0LnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJJbmZvXCI6e1widi1iaW5kOmxpc3Quc3luY1wiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImxpc3QxXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ4bWxuczp2LW9uXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0MFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmlzU2hvd0NhbmNlbENvbGxlY3Quc3luY1wiOntcInZhbHVlXCI6XCJ0cnVlXCIsXCJmb3JcIjpcImxpc3QxXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHtcIkluZm9cIjp7XCJ2LW9uOmluZm9UYXBcIjpcImRldGFpbFRhcFwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICBJbmZvOiBJbmZvXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOiOt+WPlueUs+ivt+iusOW9lVxyXG4gICAgICAgIGFzeW5jIGdldGFwcGx5V29ya0xpc3Qoc2Vzc19rZXkpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aXAubG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5hcHBseVdvcmtMaXN0KHttZXRob2Q6J1BPU1QnLCBxdWVyeTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Nfa2V5OnNlc3Nfa2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlOk51bWJlcih0aGF0LnBhZ2VfaW5mby5jdXJfcGFnZSkgKzEgfHwgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZV9zaXplOnRoYXQucGFnZV9pbmZvLnBhZ2Vfc2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgIH19KVxyXG4gICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuZXJyb3JfY29kZSA9PSAnMCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmJpem9iai5kYXRhID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxpc3QwID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucGFnZV9pbmZvID0ge2N1cl9wYWdlOjAsIHBhZ2Vfc2l6ZTogOCwgdG90YWxfaXRlbXM6IDIsIHRvdGFsX3BhZ2VzOiAxfTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mby5jdXJfcGFnZSAhPSAxICYmIHJlcy5kYXRhLmJpem9iai5wYWdlX2luZm8uY3VyX3BhZ2UgPD0gcmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mby50b3RhbF9wYWdlcyApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5saXN0MCA9dGhhdC5saXN0MC5jb25jYXQocmVzLmRhdGEuYml6b2JqLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxpc3QwID0gcmVzLmRhdGEuYml6b2JqLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wYWdlX2luZm8gPSByZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLmxvYWRlZCgpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aXAuZXJyb3IocmVzLmRhdGEubXNnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDojrflj5bmlLbol4/orrDlvZVcclxuICAgICAgICBhc3luYyBnZXRjb2xsZWN0V29ya0xpc3Qoc2Vzc19rZXkpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aXAubG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5jb2xsZWN0V29ya0xpc3Qoe21ldGhvZDonUE9TVCcsIHF1ZXJ5OntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc19rZXk6c2Vzc19rZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6TnVtYmVyKHRoYXQucGFnZV9pbmZvLmN1cl9wYWdlKSArMSB8fCAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlX3NpemU6dGhhdC5wYWdlX2luZm8ucGFnZV9zaXplXHJcbiAgICAgICAgICAgICAgICAgICAgfX0pXHJcbiAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5lcnJvcl9jb2RlID09ICcwJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuYml6b2JqLmRhdGEgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubGlzdDEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wYWdlX2luZm8gPSB7Y3VyX3BhZ2U6MCwgcGFnZV9zaXplOiA4LCB0b3RhbF9pdGVtczogMiwgdG90YWxfcGFnZXM6IDF9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvLmN1cl9wYWdlICE9IDEgJiYgcmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mby5jdXJfcGFnZSA8PSByZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvLnRvdGFsX3BhZ2VzICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxpc3QxID10aGF0Lmxpc3QxLmNvbmNhdChyZXMuZGF0YS5iaXpvYmouZGF0YSkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubGlzdDEgPSByZXMuZGF0YS5iaXpvYmouZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfaW5mbyA9IHJlcy5kYXRhLmJpem9iai5wYWdlX2luZm87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgICAgICB0aXAubG9hZGVkKClcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5tc2cpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZCgpe1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3Nlc3Nfa2V5JyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2Vzc19rZXkgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5nZXRhcHBseVdvcmtMaXN0KHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uUHVsbERvd25SZWZyZXNoKCl7XHJcbiAgICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBvblJlYWNoQm90dG9tKCl7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmKF90aGlzLnBhZ2VfaW5mby5jdXJfcGFnZSA9PSBfdGhpcy5wYWdlX2luZm8udG90YWxfcGFnZXMpe1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHsgLy/lpoLmnpzlhajpg6jliqDovb3lrozmiJDkuobkuZ/lvLnkuIDkuKrmoYZcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkeS5n+aYr+acieW6lee6v+eahCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3Nlc3Nfa2V5JyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihfdGhpcy5pbmRleCA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdldGFwcGx5V29ya0xpc3QocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdldGNvbGxlY3RXb3JrTGlzdChyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgdGFiKGluZGV4KXtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdDAgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VfaW5mbyA9IHtjdXJfcGFnZTowLCBwYWdlX3NpemU6IDgsIHRvdGFsX2l0ZW1zOiAyLCB0b3RhbF9wYWdlczogMX07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRhcHBseVdvcmtMaXN0KHRoaXMuc2Vzc19rZXkpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0MSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZV9pbmZvID0ge2N1cl9wYWdlOjAsIHBhZ2Vfc2l6ZTogOCwgdG90YWxfaXRlbXM6IDIsIHRvdGFsX3BhZ2VzOiAxfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldGNvbGxlY3RXb3JrTGlzdCh0aGlzLnNlc3Nfa2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGV0YWlsVGFwKHYpe1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3dvcmsvd29ya0RldGFpbHM/c2Vzc19rZXk9JyArIHRoaXMuc2Vzc19rZXkgKyAnJmlkPScgKyB2LnJlX2pvYl9pZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ29VcmwoKXtcclxuICAgICAgICAgICAgICAgIG9uZmlyZS5maXJlKCd3b3JrJywgeyBpbnB1dFZhbDogMSB9KTtcclxuICAgICAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3dvcmsvaW5kZXgnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=