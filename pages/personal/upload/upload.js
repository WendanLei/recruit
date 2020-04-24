


'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./../../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _api = require('./../../../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _onfire = require('./../../../npm/onfire.js/dist/onfire.min.js');

var _onfire2 = _interopRequireDefault(_onfire);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments);
    return new Promise(function(resolve, reject) {
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
          return Promise.resolve(value).then(function(value) {
            step("next", value);
          }, function(err) {
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



var personalIndex = function(_wepy$page) {
  _inherits(personalIndex, _wepy$page);

  function personalIndex() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, personalIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = personalIndex.__proto__ || Object.getPrototypeOf(personalIndex)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      navigationBarTitleText: '人事档案'
    }, _this2.data = {
      // address_count: null,
      showView: true,
      sess_key: '',
      post_id: null,
      
      // list:[]
      // array: [],
      // com_name:'请选择',
      // comp_id:null,
      // arraylist: [],
      // index: 0,
      // date: "2016-09-01",
      // time: "12:01"
      // 选择图片
    }, _this2.methods = {
      infoSubmit: function(e) {
        var _this = this;
        var reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/;
        console.log(e, _this.comp_id)
        if (e.detail.value.mobile && e.detail.value.arraylist && e.detail.value.address){
          wx.request({
            url: 'https://recruit.czucw.com/api/User/submitBindUser.html',
            method: 'post',
            data: {
              sess_key: _this2.data.sess_key,
              id_num: e.detail.value.num,
              birth: e.detail.value.birth,
              name: e.detail.value.name,
              sex: e.detail.value.sex == "男" ? 1 : 2,
              user_address: e.detail.value.address,
              re_company_id: _this.comp_id,
              mobile: e.detail.value.mobile
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            },
            success: function (res) {
              console.log(res)
             
                wx.showToast({
                  title: '上传成功',
                  icon: 'succes',
                  duration: 2000,
                  mask: true,
                });
                setTimeout(function () {
                  wx.switchTab({
                    url: '/pages/index/index',
                  })
                }, 2000)
                _this2.setData({
                  // showView: false
                })
              
            },
            fail: function (res) {
              console.log(res)
            }
          })
        }
       
        else {
          wx.showToast({
            title: '请完善信息',
            icon: 'none',
            duration: 2000
          });
          
        }
      },
      bindCasPickerChange: function(e) {
        var _this = this
        // console.log(_this)
        // console.log(list)
        console.log(typeof (Number(e.detail.value)), _this2.data.arraylist)
        _this2.data.arraylist = list
        _this2.setData({
          arraylist: list,
          showView:true,
          comp_name: decodeURI(_this2.data.arraylist[e.detail.value].name),
          comp_id: _this2.data.arraylist[e.detail.value].id,
          index: e.detail.value
        })
        _this.comp_id = _this2.data.arraylist[e.detail.value].id;
        _this.$apply();
     
       
      },

      chooseImage: function() {
        var that = this;
        console.log(that)

        var str = "ahji3o3s4e6p8a0sdewqdasj";
        console.log(str.substring(2, 6));

        wx.chooseImage({
          count: 1,
          // sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          // sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function(e) {
            console.log(e.tempFilePaths[0])
            // console.log(that.$parent.globalData.sess_key)

            wx.showToast({
              title: '数据加载中',
              icon: 'loading',
              duration: 2000
            });
            wx.uploadFile({
              url: 'https://recruit.czucw.com/api/User/bindPic2UserInfo',
              filePath: e.tempFilePaths[0],
              header: {
                "content-type": "application/x-www-form-urlencoded"
              },
              name: 'pic_info',
              formData: {
                sess_key: _this2.sess_key,
                pic_info: e.tempFilePaths[0]
              },
              success: function(res) {
                console.log(res, "=================================")
                if (200 == res.statusCode) {
                  var alldata = JSON.parse(res.data)
                  console.log(alldata)
                  if (alldata.error_code > 0) {
                    wx.showModal({
                      title: '提示信息',
                      content: '你选择的图片不符合规格，请重新上传',
                      showCancel: false,
                      confirmText: '确定',
                      success: function(res) {
                        console.log("点击了确定", res)
                        _this2.setData({
                          // showView: false,
                          name: "",
                          address: "",
                          sex: "",
                          nationality: "",
                          num: "",
                          birth: "",
                          address_count: "0/200"
                        })
                      },
                      fail: function(res) {
                        console.log(res)
                      },
                      complete: function(res) {},
                    })
                  } else {
                    var arrs = []
                    var allarrs = []
                    allarrs = alldata.bizobj.data.comp_list
                    alldata.bizobj.data.comp_list.forEach(function(item, index, arr) {
                      arrs.push(decodeURI(item.name))
                    })
                    console.log(arrs);
                    console.log(allarrs)

                    console.log(alldata)
                    list = alldata.bizobj.data.comp_list
                   
                    console.log(that,"//////./////...///")
                    _this2.setData({
                      showView: true,
                      name: decodeURI(alldata.bizobj.data.name),
                      address: alldata.bizobj.data.address,
                      sex: alldata.bizobj.data.sex == 1 ? "男" : "女",
                      nationality: decodeURI(alldata.bizobj.data.nationality),
                      num: alldata.bizobj.data.id_num,
                      birth: alldata.bizobj.data.birth,
                      address: decodeURI(alldata.bizobj.data.user_address),
                      arraylist: allarrs,
                      array: arrs
                    })
                    if (allarrs.length==1){
                      _this2.setData({
                        comp_id: allarrs[0].id
                      })
                    }
                  }



                  // console.log(arr)
                  // that.setData({
                  //   array:arr
                  // })
                  // console.log(alldata.bizobj.data.comp_list)
                  // console.log(that.data.array.length)
                  // if (that.data.array.length>0){
                  //   that.data.pickershow = true
                  // }else{
                  //   that.data.pickershow = false
                  // }

                }
              },
              fail: function(res) {
                console.log(res)
              },
              complete: function(res) {},
            })

          }
        })

      }
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(personalIndex, [{
    key: 'onLoad',
    value: function onLoad(o) {
      var _this = this;
      _this.road = o.road;
      console.log(_this)
      wx.getStorage({
        key: 'sess_key',
        success: function success(res) {
          _this.sess_key = res.data;
        }
      });
      wx.getStorage({
        key: 'user_img',
        success: function success(res) {
          _this.avatar = res.data;
        }
      });
      _onfire2.default.on('loadUserInfo', function() {
        wx.getStorage({
          key: 'sess_key',
          success: function success(res) {
            _this.getuserInfo(res.data);
          }
        });
      });
      _onfire2.default.on('toSearch', function() {
        wx.navigateTo({
          url: '/pages/personal/salary/salarySearch'
        });
      });
      _this.methods.chooseImage()
    }
  }]);

  return personalIndex;
}(_wepy2.default.page);

var list = []
Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(personalIndex, 'pages/personal/upload/upload'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInBlcnNvbmFsSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInVzZXJEYXRhIiwiYXZhdGFyIiwibWV0aG9kcyIsImdvVXJsIiwidXJsIiwicmVzdW1lX2ZpbGwiLCJ3eCIsIm5hdmlnYXRlVG8iLCJzZXNzX2tleSIsInRoYXQiLCJ0aXAiLCJsb2FkaW5nIiwiYXBpIiwidXNlckluZm8iLCJtZXRob2QiLCJxdWVyeSIsInJlcyIsImVycm9yX2NvZGUiLCJiaXpvYmoiLCIkYXBwbHkiLCJsb2FkZWQiLCJlcnJvciIsIm1zZyIsIl90aGlzIiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJnZXR1c2VySW5mbyIsIm9uZmlyZSIsIm9uIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsYTs7Ozs7Ozs7Ozs7Ozs7Mk1BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsU0FHVEMsSSxHQUFPO0FBQ0hDLHNCQUFVLEVBRFA7QUFFSEMsb0JBQVE7QUFFWjtBQUpPLFMsU0ErQ1BDLE8sR0FBVTtBQUNOQyxpQkFETSxpQkFDQUMsR0FEQSxFQUNJO0FBQ04sb0JBQUdBLE9BQU8sOEJBQVAsSUFBeUMsS0FBS0osUUFBTCxDQUFjSyxXQUFkLElBQTZCLENBQXpFLEVBQTJFO0FBQ3ZFQyx1QkFBR0MsVUFBSCxDQUFjO0FBQ1ZILDZCQUFLO0FBREsscUJBQWQ7QUFHQTtBQUNIO0FBQ0RFLG1CQUFHQyxVQUFILENBQWM7QUFDVkgseUJBQUssWUFBVUE7QUFETCxpQkFBZDtBQUdIO0FBWEssUzs7Ozs7O2lHQTFDUUksUTs7Ozs7O0FBQ1ZDLG9DLEdBQU8sSTs7QUFDWEMsOENBQUlDLE9BQUo7O3VDQUNvQkMsY0FBSUMsUUFBSixDQUFhLEVBQUNDLFFBQU8sTUFBUixFQUFnQkMsT0FBTTtBQUMzQ1Asa0RBQVNBO0FBRGtDLHFDQUF0QixFQUFiLEM7OztBQUFaUSxtQzs7QUFHSixvQ0FBR0EsSUFBSWpCLElBQUosQ0FBU2tCLFVBQVQsSUFBdUIsR0FBMUIsRUFBOEI7QUFDMUJSLHlDQUFLVCxRQUFMLEdBQWdCZ0IsSUFBSWpCLElBQUosQ0FBU21CLE1BQVQsQ0FBZ0JuQixJQUFoQztBQUNBVSx5Q0FBS1UsTUFBTDtBQUNBVCxrREFBSVUsTUFBSjtBQUNILGlDQUpELE1BSUs7QUFDRFYsa0RBQUlXLEtBQUosQ0FBVUwsSUFBSWpCLElBQUosQ0FBU3VCLEdBQW5CO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FFRDtBQUNKLGdCQUFJQyxRQUFRLElBQVo7QUFDQWpCLGVBQUdrQixVQUFILENBQWM7QUFDVkMscUJBQUssVUFESztBQUVWQyx5QkFBUyxpQkFBU1YsR0FBVCxFQUFhO0FBQ2xCTywwQkFBTUksV0FBTixDQUFrQlgsSUFBSWpCLElBQXRCO0FBQ0g7QUFKUyxhQUFkO0FBTUFPLGVBQUdrQixVQUFILENBQWM7QUFDVkMscUJBQUssVUFESztBQUVWQyx5QkFBUyxpQkFBU1YsR0FBVCxFQUFhO0FBQ2xCTywwQkFBTXRCLE1BQU4sR0FBZWUsSUFBSWpCLElBQW5CO0FBQ0g7QUFKUyxhQUFkO0FBTUE2Qiw2QkFBT0MsRUFBUCxDQUFVLGNBQVYsRUFBMEIsWUFBWTtBQUNsQ3ZCLG1CQUFHa0IsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLLFVBREs7QUFFVkMsNkJBQVMsaUJBQVNWLEdBQVQsRUFBYTtBQUNsQk8sOEJBQU1JLFdBQU4sQ0FBa0JYLElBQUlqQixJQUF0QjtBQUNIO0FBSlMsaUJBQWQ7QUFNSCxhQVBEO0FBUUE2Qiw2QkFBT0MsRUFBUCxDQUFVLFVBQVYsRUFBc0IsWUFBWTtBQUM5QnZCLG1CQUFHQyxVQUFILENBQWM7QUFDVkgseUJBQUs7QUFESyxpQkFBZDtBQUdILGFBSkQ7QUFLSDs7OztFQWxEc0MwQixlQUFLQyxJOztrQkFBM0JuQyxhIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCB0aXAgZnJvbSAnLi4vLi4vdXRpbHMvdGlwJztcclxuICAgIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vYXBpL2FwaSc7XHJcbiAgICBpbXBvcnQgb25maXJlIGZyb20gJ29uZmlyZS5qcyc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBwZXJzb25hbEluZGV4IGV4dGVuZHMgd2VweS5wYWdle1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlckRhdGE6IHt9LFxyXG4gICAgICAgICAgICBhdmF0YXI6ICcnLFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDojrflj5bkuKrkurrotYTmlplcclxuICAgICAgICBhc3luYyBnZXR1c2VySW5mbyhzZXNzX2tleSkge1xyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRpcC5sb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLnVzZXJJbmZvKHttZXRob2Q6J1BPU1QnLCBxdWVyeTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Nfa2V5OnNlc3Nfa2V5XHJcbiAgICAgICAgICAgICAgICAgICAgfX0pXHJcbiAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5lcnJvcl9jb2RlID09ICcwJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VyRGF0YSA9IHJlcy5kYXRhLmJpem9iai5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgICAgICB0aXAubG9hZGVkKClcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5tc2cpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZCgpe1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3Nlc3Nfa2V5JyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0dXNlckluZm8ocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICd1c2VyX2ltZycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmF2YXRhciA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb25maXJlLm9uKCdsb2FkVXNlckluZm8nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZXNzX2tleScsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0dXNlckluZm8ocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb25maXJlLm9uKCd0b1NlYXJjaCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb25hbC9zYWxhcnkvc2FsYXJ5U2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIGdvVXJsKHVybCl7XHJcbiAgICAgICAgICAgICAgICBpZih1cmwgPT0gJ3BlcnNvbmFsL3NhbGFyeS9zYWxhcnlTZWFyY2gnICYmIHRoaXMudXNlckRhdGEucmVzdW1lX2ZpbGwgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb25hbC9wcm9maWxlL2NlcnRpZmljYXRpb24/cm9hZD1zZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy8nK3VybFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiJdfQ==