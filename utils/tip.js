"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 提示与加载工具类
 */
var Tips = function () {
    function Tips() {
        _classCallCheck(this, Tips);

        this.isLoading = false;
    }
    /**
     * 弹出提示框
     */

    _createClass(Tips, null, [{
        key: "success",
        value: function success(title) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

            setTimeout(function () {
                wx.showToast({
                    title: title,
                    icon: "success",
                    mask: true,
                    duration: duration
                });
            }, 300);
            if (duration > 0) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        resolve();
                    }, duration);
                });
            }
        }

        /**
         * 弹出确认窗口
         */

    }, {
        key: "confirm",
        value: function confirm(text) {
            var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "提示";

            return new Promise(function (resolve, reject) {
                wx.showModal({
                    title: title,
                    content: text,
                    showCancel: true,
                    success: function success(res) {
                        if (res.confirm) {
                            resolve(payload);
                        } else if (res.cancel) {
                            reject(payload);
                        }
                    },
                    fail: function fail(res) {
                        reject(payload);
                    }
                });
            });
        }
    }, {
        key: "toast",
        value: function toast(title, onHide) {
            var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "success";

            setTimeout(function () {
                wx.showToast({
                    title: title,
                    icon: icon,
                    mask: true,
                    duration: 500
                });
            }, 300);

            // 隐藏结束回调
            if (onHide) {
                setTimeout(function () {
                    onHide();
                }, 500);
            }
        }

        /**
         * 警告框
         */

    }, {
        key: "alert",
        value: function alert(title) {
            wx.showToast({
                title: title,
                image: "../images/alert.png",
                mask: true,
                duration: 1500
            });
        }

        /**
         * 错误框
         */

    }, {
        key: "error",
        value: function error(title, onHide) {
            wx.showToast({
                title: title,
                icon: "none",
                mask: true,
                duration: 1500
            });
            // 隐藏结束回调
            if (onHide) {
                setTimeout(function () {
                    onHide();
                }, 500);
            }
        }

        /**
         * 弹出加载提示
         */

    }, {
        key: "loading",
        value: function loading() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "加载中";

            if (Tips.isLoading) {
                return;
            }
            Tips.isLoading = true;
            wx.showLoading({
                title: title,
                mask: true
            });
        }

        /**
         * 加载完毕
         */

    }, {
        key: "loaded",
        value: function loaded() {
            if (Tips.isLoading) {
                Tips.isLoading = false;
                wx.hideLoading();
            }
        }
    }, {
        key: "share",
        value: function share(title, url, desc) {
            return {
                title: title,
                path: url,
                desc: desc,
                success: function success(res) {
                    Tips.toast("分享成功");
                }
            };
        }
    }]);

    return Tips;
}();

/**
 * 静态变量，是否加载中
 */


exports.default = Tips;
Tips.isLoading = false;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpcC5qcyJdLCJuYW1lcyI6WyJUaXBzIiwiaXNMb2FkaW5nIiwidGl0bGUiLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJtYXNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0ZXh0IiwicGF5bG9hZCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJjYW5jZWwiLCJmYWlsIiwib25IaWRlIiwiaW1hZ2UiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwidXJsIiwiZGVzYyIsInBhdGgiLCJ0b2FzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7SUFHcUJBLEk7QUFDakIsb0JBQWM7QUFBQTs7QUFDVixhQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0g7QUFDRDs7Ozs7O2dDQUllQyxLLEVBQXVCO0FBQUEsZ0JBQWhCQyxRQUFnQix1RUFBTCxHQUFLOztBQUNsQ0MsdUJBQVcsWUFBTTtBQUNiQyxtQkFBR0MsU0FBSCxDQUFhO0FBQ1RKLDJCQUFPQSxLQURFO0FBRVRLLDBCQUFNLFNBRkc7QUFHVEMsMEJBQU0sSUFIRztBQUlUTCw4QkFBVUE7QUFKRCxpQkFBYjtBQU1ILGFBUEQsRUFPRyxHQVBIO0FBUUEsZ0JBQUlBLFdBQVcsQ0FBZixFQUFrQjtBQUNkLHVCQUFPLElBQUlNLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENQLCtCQUFXLFlBQU07QUFDYk07QUFDSCxxQkFGRCxFQUVHUCxRQUZIO0FBR0gsaUJBSk0sQ0FBUDtBQUtIO0FBQ0o7O0FBRUQ7Ozs7OztnQ0FHZVMsSSxFQUFrQztBQUFBLGdCQUE1QkMsT0FBNEIsdUVBQWxCLEVBQWtCO0FBQUEsZ0JBQWRYLEtBQWMsdUVBQU4sSUFBTTs7QUFDN0MsbUJBQU8sSUFBSU8sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ04sbUJBQUdTLFNBQUgsQ0FBYTtBQUNUWiwyQkFBT0EsS0FERTtBQUVUYSw2QkFBU0gsSUFGQTtBQUdUSSxnQ0FBWSxJQUhIO0FBSVRDLDZCQUFTLHNCQUFPO0FBQ1osNEJBQUlDLElBQUlDLE9BQVIsRUFBaUI7QUFDYlQsb0NBQVFHLE9BQVI7QUFDSCx5QkFGRCxNQUVPLElBQUlLLElBQUlFLE1BQVIsRUFBZ0I7QUFDbkJULG1DQUFPRSxPQUFQO0FBQ0g7QUFDSixxQkFWUTtBQVdUUSwwQkFBTSxtQkFBTztBQUNUViwrQkFBT0UsT0FBUDtBQUNIO0FBYlEsaUJBQWI7QUFlSCxhQWhCTSxDQUFQO0FBaUJIOzs7OEJBRVlYLEssRUFBT29CLE0sRUFBMEI7QUFBQSxnQkFBbEJmLElBQWtCLHVFQUFYLFNBQVc7O0FBQzFDSCx1QkFBVyxZQUFNO0FBQ2JDLG1CQUFHQyxTQUFILENBQWE7QUFDVEosMkJBQU9BLEtBREU7QUFFVEssMEJBQU1BLElBRkc7QUFHVEMsMEJBQU0sSUFIRztBQUlUTCw4QkFBVTtBQUpELGlCQUFiO0FBTUgsYUFQRCxFQU9HLEdBUEg7O0FBU0E7QUFDQSxnQkFBSW1CLE1BQUosRUFBWTtBQUNSbEIsMkJBQVcsWUFBTTtBQUNia0I7QUFDSCxpQkFGRCxFQUVHLEdBRkg7QUFHSDtBQUNKOztBQUVEOzs7Ozs7OEJBR2FwQixLLEVBQU87QUFDaEJHLGVBQUdDLFNBQUgsQ0FBYTtBQUNUSix1QkFBT0EsS0FERTtBQUVUcUIsdUJBQU8scUJBRkU7QUFHVGYsc0JBQU0sSUFIRztBQUlUTCwwQkFBVTtBQUpELGFBQWI7QUFNSDs7QUFFRDs7Ozs7OzhCQUlhRCxLLEVBQU9vQixNLEVBQVE7QUFDeEJqQixlQUFHQyxTQUFILENBQWE7QUFDVEosdUJBQU9BLEtBREU7QUFFVEssc0JBQU0sTUFGRztBQUdUQyxzQkFBTSxJQUhHO0FBSVRMLDBCQUFVO0FBSkQsYUFBYjtBQU1BO0FBQ0EsZ0JBQUltQixNQUFKLEVBQVk7QUFDUmxCLDJCQUFXLFlBQU07QUFDYmtCO0FBQ0gsaUJBRkQsRUFFRyxHQUZIO0FBR0g7QUFDSjs7QUFFRDs7Ozs7O2tDQUc4QjtBQUFBLGdCQUFmcEIsS0FBZSx1RUFBUCxLQUFPOztBQUMxQixnQkFBSUYsS0FBS0MsU0FBVCxFQUFvQjtBQUNoQjtBQUNIO0FBQ0RELGlCQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0FJLGVBQUdtQixXQUFILENBQWU7QUFDWHRCLHVCQUFPQSxLQURJO0FBRVhNLHNCQUFNO0FBRkssYUFBZjtBQUlIOztBQUVEOzs7Ozs7aUNBR2dCO0FBQ1osZ0JBQUlSLEtBQUtDLFNBQVQsRUFBb0I7QUFDaEJELHFCQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0FJLG1CQUFHb0IsV0FBSDtBQUNIO0FBQ0o7Ozs4QkFFWXZCLEssRUFBT3dCLEcsRUFBS0MsSSxFQUFNO0FBQzNCLG1CQUFPO0FBQ0h6Qix1QkFBT0EsS0FESjtBQUVIMEIsc0JBQU1GLEdBRkg7QUFHSEMsc0JBQU1BLElBSEg7QUFJSFYseUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNuQmxCLHlCQUFLNkIsS0FBTCxDQUFXLE1BQVg7QUFDSDtBQU5FLGFBQVA7QUFRSDs7Ozs7O0FBR0w7Ozs7O2tCQXRJcUI3QixJO0FBeUlyQkEsS0FBS0MsU0FBTCxHQUFpQixLQUFqQiIsImZpbGUiOiJ0aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5o+Q56S65LiO5Yqg6L295bel5YW357G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXBzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOW8ueWHuuaPkOekuuahhlxyXG4gICAgICovXHJcblxyXG4gICAgc3RhdGljIHN1Y2Nlc3ModGl0bGUsIGR1cmF0aW9uID0gNTAwKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICBpZiAoZHVyYXRpb24gPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBkdXJhdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8ueWHuuehruiupOeql+WPo1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY29uZmlybSh0ZXh0LCBwYXlsb2FkID0ge30sIHRpdGxlID0gXCLmj5DnpLpcIikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0LFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChwYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0b2FzdCh0aXRsZSwgb25IaWRlLCBpY29uID0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGljb246IGljb24sXHJcbiAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAzMDApO1xyXG5cclxuICAgICAgICAvLyDpmpDol4/nu5PmnZ/lm57osINcclxuICAgICAgICBpZiAob25IaWRlKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25IaWRlKCk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K2m5ZGK5qGGXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhbGVydCh0aXRsZSkge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiLi4vaW1hZ2VzL2FsZXJ0LnBuZ1wiLFxyXG4gICAgICAgICAgICBtYXNrOiB0cnVlLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZSZ6K+v5qGGXHJcbiAgICAgKi9cclxuXHJcbiAgICBzdGF0aWMgZXJyb3IodGl0bGUsIG9uSGlkZSkge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgaWNvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyDpmpDol4/nu5PmnZ/lm57osINcclxuICAgICAgICBpZiAob25IaWRlKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25IaWRlKCk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5by55Ye65Yqg6L295o+Q56S6XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBsb2FkaW5nKHRpdGxlID0gXCLliqDovb3kuK1cIikge1xyXG4gICAgICAgIGlmIChUaXBzLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFRpcHMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295a6M5q+VXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBsb2FkZWQoKSB7XHJcbiAgICAgICAgaWYgKFRpcHMuaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIFRpcHMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaGFyZSh0aXRsZSwgdXJsLCBkZXNjKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICBwYXRoOiB1cmwsXHJcbiAgICAgICAgICAgIGRlc2M6IGRlc2MsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgVGlwcy50b2FzdChcIuWIhuS6q+aIkOWKn1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpnZnmgIHlj5jph4/vvIzmmK/lkKbliqDovb3kuK1cclxuICovXHJcblRpcHMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiJdfQ==