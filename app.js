const mtjwxsdk = require('./utils/mtj-wx-sdk.js');
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _api = require('./api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

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
      "tabBar": {
        "color": "#7E7E7E",
        "selectedColor": "#5B8DFA ",
        "backgroundColor": "#ffffff",
        "borderStyle": "black",
        "list": [{
          "pagePath": "pages/index/index",
          "text": "首页",
          "iconPath": "images/tab_home_unselected.png",
          "selectedIconPath": "images/tab_home_onselected.png"
        }, {
          "pagePath": "pages/work/index",
          "text": "岗位",
          "iconPath": "images/tab_gw_unselected.png",
          "selectedIconPath": "images/tab_gw_onselected.png"
        }, {
          "pagePath": "pages/personal/index",
          "text": "我的",
          "iconPath": "images/tab_me_unselected.png",
          "selectedIconPath": "images/tab_me_onselected.png"
        }]
      }
    },_this.method={
      formSubmit1:function(e){
        console.log(e);
      },
      formSubmit2: function (e) {
        console.log(e);
      },
      formSubmit3: function (e) {
        console.log(e);
      },
      formSubmit4: function (e) {
        console.log(e);
      }
    };
    _this.globalData = {
      sess_key: '122233'

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

                console.log(data);

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJnbG9iYWxEYXRhIiwic2Vzc19rZXkiLCJ1c2UiLCJ0ZXN0QXN5bmMiLCJ0aGF0Iiwib3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJkYXRhIiwiY2IiLCJ3ZXB5IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwidXNlckluZm8iLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFxRUUsc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQWxFZkEsTUFrRWUsR0FsRU47QUFDUEMsYUFBTyxDQUNMLHNCQURLLEVBRUwsbUJBRkssRUFHTCxrQkFISyxFQUlMLG9CQUpLLEVBS0wsc0JBTEssRUFNTCw4QkFOSyxFQU9MLDZCQVBLLEVBUUwsNEJBUkssRUFTTCxtQ0FUSyxFQVVMLGtDQVZLLEVBV0wsa0NBWEssRUFZTCw0QkFaSyxFQWFMLDhDQWJLLEVBY0wsMEJBZEssRUFlTCxvQ0FmSyxFQWdCTCxvQ0FoQkssRUFpQkwscUNBakJLLEVBa0JMLDBDQWxCSyxFQW1CTCwwQkFuQkssRUFvQkwsc0JBcEJLLEVBcUJMLGtCQXJCSyxFQXNCTCx3QkF0QkssRUF1QkwsbUJBdkJLLEVBd0JMLDBCQXhCSyxFQXlCTCxzQ0F6QkssRUEwQkwsb0JBMUJLLENBREE7QUE2QlBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0IsT0FKbEI7QUFLTkMsK0JBQXVCO0FBTGpCLE9BN0JEO0FBb0NQLGdCQUFVO0FBQ1IsaUJBQVMsU0FERDtBQUVSLHlCQUFpQixVQUZUO0FBR1IsMkJBQW1CLFNBSFg7QUFJUix1QkFBZSxPQUpQO0FBS1IsZ0JBQVEsQ0FBQztBQUNQLHNCQUFZLG1CQURMO0FBRVAsa0JBQVEsSUFGRDtBQUdQLHNCQUFZLGdDQUhMO0FBSVAsOEJBQW9CO0FBSmIsU0FBRCxFQUtMO0FBQ0Qsc0JBQVksa0JBRFg7QUFFRCxrQkFBUSxJQUZQO0FBR0Qsc0JBQVksOEJBSFg7QUFJRCw4QkFBb0I7QUFKbkIsU0FMSyxFQVdOO0FBQ0Usc0JBQVksc0JBRGQ7QUFFRSxrQkFBUSxJQUZWO0FBR0Usc0JBQVksOEJBSGQ7QUFJRSw4QkFBb0I7QUFKdEIsU0FYTTtBQUxBO0FBcENILEtBa0VNO0FBQUEsVUFMZkMsVUFLZSxHQUxGO0FBQ1hDLGdCQUFVOztBQURDLEtBS0U7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhhO0FBSWQ7Ozs7K0JBRVU7QUFDVCxXQUFLQyxTQUFMO0FBQ0EsVUFBSUMsT0FBTyxJQUFYO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7OzJCQUNNQyxPLEVBQVE7QUFDWEMsY0FBUUMsR0FBUixDQUFZRixPQUFaLEVBQW9CLE9BQXBCO0FBQ0g7OzswQkFFTUcsQyxFQUFHO0FBQ1IsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLGtCQUFRLGtCQUFSO0FBQ0QsU0FGRCxFQUVHRixJQUFJLElBRlA7QUFHRCxPQUpNLENBQVA7QUFLRDs7Ozs7Ozs7Ozs7dUJBR29CLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQjs7QUFDTlIsd0JBQVFDLEdBQVIsQ0FBWU8sSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUdVQyxFLEVBQUk7QUFDZCxVQUFNWCxPQUFPLElBQWI7QUFDQSxVQUFJLEtBQUtKLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCLGVBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDRDs7QUFFRGUscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1o7QUFDRWYsZUFBS0osVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkIsUUFBM0I7QUFDRmMsZ0JBQU1BLEdBQUdJLElBQUlDLFFBQVAsQ0FBTjtBQUNEO0FBTGMsT0FBakI7QUFPRDs7OztFQS9HMEJKLGVBQUtLLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nO1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi9hcGkvYXBpJztcclxuICBpbXBvcnQgdGlwIGZyb20gJy4vdXRpbHMvdGlwJztcclxuXHJcbiAgaW1wb3J0IHsgc2V0U3RvcmUgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgcGFnZXM6IFtcclxuICAgICAgICAncGFnZXMvcGVyc29uYWwvbG9naW4nLFxyXG4gICAgICAgICdwYWdlcy9pbmRleC9pbmRleCcsXHJcbiAgICAgICAgJ3BhZ2VzL2luZGV4L2JvbGUnLFxyXG4gICAgICAgICdwYWdlcy9pbmRleC9zZWFyY2gnLFxyXG4gICAgICAgICdwYWdlcy9pbmRleC9sb2NhdGlvbicsXHJcbiAgICAgICAgJ3BhZ2VzL3BlcnNvbmFsL3Byb2ZpbGUvaW5kZXgnLFxyXG4gICAgICAgICdwYWdlcy9wZXJzb25hbC93YWxsZXQvaW5kZXgnLFxyXG4gICAgICAgICdwYWdlcy9wZXJzb25hbC93YWxsZXQvY2FzaCcsXHJcbiAgICAgICAgJ3BhZ2VzL3BlcnNvbmFsL3dhbGxldC9jYXNoU3VjY2VzcycsXHJcbiAgICAgICAgJ3BhZ2VzL3BlcnNvbmFsL3dhbGxldC9jYXNoUmVjb3JkJyxcclxuICAgICAgICAncGFnZXMvcGVyc29uYWwvd2FsbGV0L2Z1bmREZXRhaWwnLFxyXG4gICAgICAgICdwYWdlcy9wZXJzb25hbC90ZWFtL215VGVhbScsXHJcbiAgICAgICAgJ3BhZ2VzL3BlcnNvbmFsL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uUmVjb3JkJyxcclxuICAgICAgICAncGFnZXMvcGVyc29uYWwvbmVlZC9uZWVkJyxcclxuICAgICAgICAncGFnZXMvcGVyc29uYWwvc2FsYXJ5L3NhbGFyeVNlYXJjaCcsXHJcbiAgICAgICAgJ3BhZ2VzL3BlcnNvbmFsL3NhbGFyeS9zYWxhcnlEZXRhaWwnLFxyXG4gICAgICAgICdwYWdlcy9wZXJzb25hbC9zYWxhcnkvc2FsYXJ5QWR2YW5jZScsXHJcbiAgICAgICAgJ3BhZ2VzL3BlcnNvbmFsL2NvbXBsYWludC9jb21wbGFpbnRBZHZpY2UnLFxyXG4gICAgICAgICdwYWdlcy9wZXJzb25hbC9jb2RlL2NvZGUnLFxyXG4gICAgICAgICdwYWdlcy9wZXJzb25hbC9pbmRleCcsXHJcbiAgICAgICAgJ3BhZ2VzL3dvcmsvaW5kZXgnLFxyXG4gICAgICAgICdwYWdlcy93b3JrL3dvcmtEZXRhaWxzJyxcclxuICAgICAgICAncGFnZXMvc2tpbGwvaW5kZXgnLFxyXG4gICAgICAgICdwYWdlcy9za2lsbC9za2lsbERldGFpbHMnLFxyXG4gICAgICAgICdwYWdlcy9wZXJzb25hbC9wcm9maWxlL2NlcnRpZmljYXRpb24nLFxyXG4gICAgICAgICdwYWdlcy9pbmRleC9jaXJjbGUnXHJcbiAgICAgIF0sXHJcbiAgICAgIHdpbmRvdzoge1xyXG4gICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyM0QzgwRjUnLFxyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXHJcbiAgICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIFwidGFiQmFyXCI6IHtcclxuICAgICAgICBcImNvbG9yXCI6IFwiIzdFN0U3RVwiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRDb2xvclwiOiBcIiM1QjhERkEgXCIsXHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgXCJib3JkZXJTdHlsZVwiOiBcImJsYWNrXCIsXHJcbiAgICAgICAgXCJsaXN0XCI6IFt7XHJcbiAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvaW5kZXgvaW5kZXhcIixcclxuICAgICAgICAgIFwidGV4dFwiOiBcIummlumhtVwiLFxyXG4gICAgICAgICAgXCJpY29uUGF0aFwiOiBcImltYWdlcy90YWJfaG9tZV91bnNlbGVjdGVkLnBuZ1wiLFxyXG4gICAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiaW1hZ2VzL3RhYl9ob21lX29uc2VsZWN0ZWQucG5nXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvd29yay9pbmRleFwiLFxyXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwi5bKX5L2NXCIsXHJcbiAgICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL3RhYl9nd191bnNlbGVjdGVkLnBuZ1wiLFxyXG4gICAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiaW1hZ2VzL3RhYl9nd19vbnNlbGVjdGVkLnBuZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL3BlcnNvbmFsL2luZGV4XCIsXHJcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIuaIkeeahFwiLFxyXG4gICAgICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL3RhYl9tZV91bnNlbGVjdGVkLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZXMvdGFiX21lX29uc2VsZWN0ZWQucG5nXCJcclxuICAgICAgICAgIH1dXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnbG9iYWxEYXRhID0ge1xyXG4gICAgICBzZXNzX2tleTogJzEyMjIzMycsXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgc3VwZXIoKVxyXG4gICAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxyXG4gICAgfVxyXG5cclxuICAgIG9uTGF1bmNoKCkge1xyXG4gICAgICB0aGlzLnRlc3RBc3luYygpO1xyXG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgLy8gd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgLy8gICAgICdrZXknOidzZXNzX2tleScsXHJcbiAgICAgICAgLy8gICAgICdkYXRhJzonMTIyMTEyJ1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gICAgb25Mb2FkKG9wdGlvbnMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMsJ2FhYWFhJylcclxuICAgIH1cclxuXHJcbiAgICBzbGVlcCAocykge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXHJcbiAgICAgICAgfSwgcyAqIDEwMDApXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdGVzdEFzeW5jICgpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcclxuICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnNlc3Nfa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS5zZXNzX2tleVxyXG4gICAgICB9XHJcblxyXG4gICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcclxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgIC8vIHRoYXQuZ2xvYmFsRGF0YS5zZXNzX2tleSA9IHJlcy5zZXNzX2tleVxyXG4gICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEuc2Vzc19rZXkgPSAnMTIyMjEyJztcclxuICAgICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=