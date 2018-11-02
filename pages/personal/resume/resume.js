'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

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

var resume = function (_wepy$page) {
  _inherits(resume, _wepy$page);

  function resume() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, resume);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = resume.__proto__ || Object.getPrototypeOf(resume)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
      activeStatus:['已录用','未录用','已离职','未查看'],
      isShow:false,
      activeIndex:null,
      activeName:null,
      resumeList:[],
      page_info: { cur_page: 0, page_size: 8, total_items: 2, total_pages: 1 }


    }, _this2.$repeat = {}, _this2.$props = { "NoData": {} }, _this2.$events = {}, _this2.components = {
      NoData: _noData2.default

      
    }, _this2.methods = {
      editStatus: function (e) {
       let _this=this;
       let type=null;
       let statusName=e.currentTarget.dataset.name;
      _this.activeStatus[_this.activeIndex] = statusName;
      _this.activeName = statusName;
        switch (statusName){
          case "已查看": 
            type=3;
            break;
          case "已录用":
            type = 1;
            break;
          case "未录用":
            type = 2;
            break;
          case "已离职":
            type =5;
            break;
          default:
              break;
        

        }
      _this.isShow = false;
        wx.getStorage({
          key: 'sess_key',
          success: function (res) {
            _this.changeResume(res.data, _this.resumeList[_this.activeIndex].id, type);
            _this.page_info.cur_page = _this.page_info.cur_page-1;
           
          },
        })
      _this.$apply();
        
      },
      edit:function(e){
       
        let _this = this;
        let statusName = e.currentTarget.dataset.name;
        _this.activeIndex = e.currentTarget.dataset.index;
        _this.activeName = statusName;
        _this.isShow = true;
        console.log(e);
       
        _this.$apply();
      },
      gotoNote:function(e){
        console.log(e.detail.formId,"qqqqqqqqq");
        let _this=this;
        wx.setStorage({
          key: 'resumedId',
          data: e.currentTarget.dataset.id,
        })
        wx.navigateTo({
          url: './resumeNote',
        })
      },
      close:function(){
        this.isShow=false;
        this.$apply();
      },

    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(resume, [{
    key: 'getresumeList',
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
                return _api2.default.resumeList({
                  method: 'POST', query: {
                    sess_key: sess_key,
                    page: Number(that.page_info.cur_page) + 1 || 1,
                    page_size: that.page_info.page_size
                  }
                });

              case 4:
                res = _context.sent;

                if (res.data.error_code == '0') {
                  if (res.data.bizobj.data == null) {
                    that.resumeList = [];
                    that.page_info = { cur_page: 0, page_size: 15, total_items: 2, total_pages: 1 };
                  } 
                 else if (res.data.bizobj.page_info.cur_page != 1 && res.data.bizobj.page_info.cur_page <= res.data.bizobj.page_info.total_pages) {
                    that.resumeList = that.resumeList.concat(res.data.bizobj.data);
                    
                  } else {
                    that.resumeList = res.data.bizobj.data;
                  }
                  that.page_info = res.data.bizobj.page_info;
                }
                that.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getresumeList(_x) {
        return _ref2.apply(this, arguments);
      }

      return getresumeList;
    }()
  }, {
      key: 'changeResume',
      value: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key, resume_id,status) {
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
                      status: status
                    }
                  });

                case 4:
                  res = _context.sent;

                  if (res.data.error_code == '0') {
                    that.getresumeList(sess_key);
                  }else{
                    _tip2.default.error(res.data.msg);
                  }
                  that.$apply();

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function changeResume(_x,_x1,_x2) {
          return _ref2.apply(this, arguments);
        }

        return changeResume;
      }()
    },{
    key: 'onShow',
    value: function onLoad() {
      var _this = this;
      _this.page_info = { cur_page: 0, page_size: 15, total_items: 2, total_pages: 1 };
      wx.getStorage({
        key: 'sess_key',
        success: function(res) {
          _this.getresumeList(res.data);
        },
      })
      
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
              _this.getresumeList(res.data);
              _this.$apply();
            }
          });
        }
      }
    }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      wx.stopPullDownRefresh();
    }
  }
  ]);

  return resume;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(resume, 'pages/personal/resume/resume'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15VGVhbS5qcyJdLCJuYW1lcyI6WyJNeVRlYW0iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsImluZGV4Iiwic2Vzc19rZXkiLCJsaXN0MCIsImxpc3QxIiwicGFnZV9pbmZvIiwiY3VyX3BhZ2UiLCJwYWdlX3NpemUiLCJ0b3RhbF9pdGVtcyIsInRvdGFsX3BhZ2VzIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiTm9EYXRhIiwibWV0aG9kcyIsInRhYiIsImdldHRlYW1Vc2VyTGlzdCIsImdldFVzZXJUZWFtUHJpemVMaXN0IiwidGhhdCIsInRpcCIsImxvYWRpbmciLCJhcGkiLCJ0ZWFtVXNlckxpc3QiLCJtZXRob2QiLCJxdWVyeSIsInBhZ2UiLCJOdW1iZXIiLCJyZXMiLCJlcnJvcl9jb2RlIiwiYml6b2JqIiwiY29uY2F0IiwiJGFwcGx5IiwibG9hZGVkIiwiZXJyb3IiLCJtc2ciLCJVc2VyVGVhbVByaXplTGlzdCIsIl90aGlzIiwid3giLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsInN0b3BQdWxsRG93blJlZnJlc2giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIndlcHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7NkxBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUpDLG1DQUFzQjtBQUZsQixTLFNBSVRDLEksR0FBTztBQUNIQyxtQkFBTyxDQURKO0FBRUhDLHNCQUFVLEVBRlA7QUFHSEMsbUJBQU8sRUFISjtBQUlIQyxtQkFBTyxFQUpKO0FBS0hDLHVCQUFVLEVBQUNDLFVBQVMsQ0FBVixFQUFhQyxXQUFXLEVBQXhCLEVBQTRCQyxhQUFhLENBQXpDLEVBQTRDQyxhQUFhLENB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QUFDSCxpQ0FkRCxNQWNLO0FBQ0RiLGtEQUFJYyxLQUFKLENBQVVOLElBQUk1QixJQUFKLENBQVNtQyxHQUFuQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBRUQ7QUFDSixnQkFBSUUsUUFBUSxJQUFaO0FBQ0FDLGVBQUdDLFVBQUgsQ0FBYztBQUNWQyxxQkFBSyxVQURLO0FBRVZDLHlCQUFTLGlCQUFTYixHQUFULEVBQWE7QUFDbEJTLDBCQUFNbkMsUUFBTixHQUFpQjBCLElBQUk1QixJQUFyQjtBQUNBcUMsMEJBQU1wQixlQUFOLENBQXNCVyxJQUFJNUIsSUFBMUI7QUFDSDtBQUxTLGFBQWQ7QUFPSDs7OzRDQUNrQjtBQUNqQnNDLGVBQUdJLG1CQUFIO0FBQ0Q7Ozt3Q0FDYztBQUNYLGdCQUFJTCxRQUFRLElBQVo7QUFDQSxnQkFBR0EsTUFBTWhDLFNBQU4sQ0FBZ0JDLFFBQWhCLElBQTRCK0IsTUFBTWhDLFNBQU4sQ0FBZ0JJLFdBQS9DLEVBQTJEO0FBQ3ZENkIsbUJBQUdLLFNBQUgsQ0FBYSxFQUFFO0FBQ1hDLDJCQUFPLFNBREU7QUFFVEMsMEJBQU0sU0FGRztBQUdUQyw4QkFBVTtBQUhELGlCQUFiO0FBS0gsYUFORCxNQU1LO0FBQ0RSLG1CQUFHQyxVQUFILENBQWM7QUFDVkMseUJBQUssVUFESztBQUVWQyw2QkFBUyxpQkFBU2IsR0FBVCxFQUFhO0FBQ2xCLDRCQUFHUyxNQUFNcEMsS0FBTixJQUFlLENBQWxCLEVBQW9CO0FBQ2hCb0Msa0NBQU1wQixlQUFOLENBQXNCVyxJQUFJNUIsSUFBMUI7QUFDSCx5QkFGRCxNQUVLO0FBQ0RxQyxrQ0FBTW5CLG9CQUFOLENBQTJCVSxJQUFJNUIsSUFBL0I7QUFDSDtBQUVKO0FBVFMsaUJBQWQ7QUFXSDtBQUNKOzs7O0VBN0crQitDLGVBQUtyQixJOztrQkFBcEI5QixNIiwiZmlsZSI6Im15VGVhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBpbXBvcnQgdGlwIGZyb20gJy4uLy4uLy4uL3V0aWxzL3RpcCc7XHJcbiAgICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xyXG4gICAgaW1wb3J0IE5vRGF0YSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9ub0RhdGEnO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlUZWFtIGV4dGVuZHMgd2VweS5wYWdle1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOWboumYnycsXHJcbiAgICAgICAgICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6dHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBpbmRleDogMCxcclxuICAgICAgICAgICAgc2Vzc19rZXk6ICcnLFxyXG4gICAgICAgICAgICBsaXN0MDogW10sXHJcbiAgICAgICAgICAgIGxpc3QxOiBbXSxcclxuICAgICAgICAgICAgcGFnZV9pbmZvOntjdXJfcGFnZTowLCBwYWdlX3NpemU6IDE1LCB0b3RhbF9pdGVtczogMiwgdG90YWxfcGFnZXM6IDF9LFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIk5vRGF0YVwiOnt9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgTm9EYXRhOiBOb0RhdGFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOiOt+WPluaIkeeahOmCgOivt1xyXG4gICAgICAgIGFzeW5jIGdldHRlYW1Vc2VyTGlzdChzZXNzX2tleSkge1xyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRpcC5sb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLnRlYW1Vc2VyTGlzdCh7bWV0aG9kOidQT1NUJywgcXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzX2tleTpzZXNzX2tleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTpOdW1iZXIodGhhdC5wYWdlX2luZm8uY3VyX3BhZ2UpICsxIHx8IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2Vfc2l6ZTp0aGF0LnBhZ2VfaW5mby5wYWdlX3NpemVcclxuICAgICAgICAgICAgICAgICAgICB9fSlcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gJzAnKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5iaXpvYmouZGF0YSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5saXN0MCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfaW5mbyA9IHtjdXJfcGFnZTowLCBwYWdlX3NpemU6IDE1LCB0b3RhbF9pdGVtczogMiwgdG90YWxfcGFnZXM6IDF9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvLmN1cl9wYWdlICE9IDEgJiYgcmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mby5jdXJfcGFnZSA8PSByZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvLnRvdGFsX3BhZ2VzICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxpc3QwID10aGF0Lmxpc3QwLmNvbmNhdChyZXMuZGF0YS5iaXpvYmouZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubGlzdDAgPSByZXMuZGF0YS5iaXpvYmouZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfaW5mbyA9IHJlcy5kYXRhLmJpem9iai5wYWdlX2luZm87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgICAgICB0aXAubG9hZGVkKClcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5tc2cpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOiOt+WPluaIkeeahOWlluWKsVxyXG4gICAgICAgIGFzeW5jIGdldFVzZXJUZWFtUHJpemVMaXN0KHNlc3Nfa2V5KSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgdGlwLmxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuVXNlclRlYW1Qcml6ZUxpc3Qoe21ldGhvZDonUE9TVCcsIHF1ZXJ5OntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc19rZXk6c2Vzc19rZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6TnVtYmVyKHRoYXQucGFnZV9pbmZvLmN1cl9wYWdlKSArMSB8fCAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlX3NpemU6dGhhdC5wYWdlX2luZm8ucGFnZV9zaXplXHJcbiAgICAgICAgICAgICAgICAgICAgfX0pXHJcbiAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5lcnJvcl9jb2RlID09ICcwJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuYml6b2JqLmRhdGEgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubGlzdDEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wYWdlX2luZm8gPSB7Y3VyX3BhZ2U6MCwgcGFnZV9zaXplOiAxNSwgdG90YWxfaXRlbXM6IDIsIHRvdGFsX3BhZ2VzOiAxfTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mby5jdXJfcGFnZSAhPSAxICYmIHJlcy5kYXRhLmJpem9iai5wYWdlX2luZm8uY3VyX3BhZ2UgPD0gcmVzLmRhdGEuYml6b2JqLnBhZ2VfaW5mby50b3RhbF9wYWdlcyApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5saXN0MSA9dGhhdC5saXN0MS5jb25jYXQocmVzLmRhdGEuYml6b2JqLmRhdGEpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxpc3QxID0gcmVzLmRhdGEuYml6b2JqLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wYWdlX2luZm8gPSByZXMuZGF0YS5iaXpvYmoucGFnZV9pbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLmxvYWRlZCgpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aXAuZXJyb3IocmVzLmRhdGEubXNnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvbkxvYWQoKXtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdzZXNzX2tleScsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNlc3Nfa2V5ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0dGVhbVVzZXJMaXN0KHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uUHVsbERvd25SZWZyZXNoKCl7XHJcbiAgICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBvblJlYWNoQm90dG9tKCl7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmKF90aGlzLnBhZ2VfaW5mby5jdXJfcGFnZSA9PSBfdGhpcy5wYWdlX2luZm8udG90YWxfcGFnZXMpe1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHsgLy/lpoLmnpzlhajpg6jliqDovb3lrozmiJDkuobkuZ/lvLnkuIDkuKrmoYZcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkeS5n+aYr+acieW6lee6v+eahCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3Nlc3Nfa2V5JyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihfdGhpcy5pbmRleCA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdldHRlYW1Vc2VyTGlzdChyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0VXNlclRlYW1Qcml6ZUxpc3QocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIHRhYihpbmRleCl7XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QwID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlX2luZm8gPSB7Y3VyX3BhZ2U6MCwgcGFnZV9zaXplOiAxNSwgdG90YWxfaXRlbXM6IDIsIHRvdGFsX3BhZ2VzOiAxfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldHRlYW1Vc2VyTGlzdCh0aGlzLnNlc3Nfa2V5KTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdDEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VfaW5mbyA9IHtjdXJfcGFnZTowLCBwYWdlX3NpemU6IDE1LCB0b3RhbF9pdGVtczogMiwgdG90YWxfcGFnZXM6IDF9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VXNlclRlYW1Qcml6ZUxpc3QodGhpcy5zZXNzX2tleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4iXX0=