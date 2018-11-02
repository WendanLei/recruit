'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _city = require('./../../components/common/city.js');

var _city2 = _interopRequireDefault(_city);

var _onfire = require('./../../npm/onfire.js/dist/onfire.min.js');

var _onfire2 = _interopRequireDefault(_onfire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Location = function (_wepy$page) {
    _inherits(Location, _wepy$page);

    function Location() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, Location);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Location.__proto__ || Object.getPrototypeOf(Location)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '筛选城市',
            navigationBarBackgroundColor: '#fff',
            navigationBarTextStyle: 'black'
            //            backgroundTextStyle:"dark"
        }, _this2.$repeat = { "district_list": { "com": "city", "props": "item.sync" }, "city_list": { "com": "city", "props": "item.sync" }, "prov_list": { "com": "city", "props": "item.sync" } }, _this2.$props = { "city": { "xmlns:v-bind": { "value": "", "for": "district_list", "item": "item", "index": "index", "key": "index" }, "v-bind:item.sync": { "value": "item", "type": "item", "for": "prov_list", "item": "item", "index": "index", "key": "index" }, "v-bind:type.sync": { "value": "prov", "for": "prov_list", "item": "item", "index": "index", "key": "index" }, "v-bind:select.sync": { "value": "select_prov", "for": "prov_list", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "district_list", "item": "item", "index": "index", "key": "index" } } }, _this2.$events = { "city": { "v-on:selectChange": "selectChange" } }, _this2.components = {
            city: _city2.default
        }, _this2.data = {
            district: 'district',
            city: 'city',
            prov: 'prov',
            prov_list: [], //省份列表
            city_list: [], //城市列表
            district_list: [], //区域列表
            select_prov: { 'area_name': '', 'areano': '' },
            select_city: { 'area_name': '', 'areano': '' },
            select_district: { 'area_name': '', 'areano': '' },
            select: { 'area_name': '', 'areano': '' }
            //获取省市区
        }, _this2.methods = {
            selectChange: function selectChange(type, item) {
                if (type == "prov") {
                    this.getCityDistrict(item.code, item);
                } else if (type == "city") {
                    this.getCity(item.code, item);
                } else {
                    this.select_district = { "area_name": item.name, "areano": item.code };
                    this.select = { "area_name": this.select_district.area_name, "areano": this.select_prov.areano + '-' + this.select_city.areano + '-' + this.select_district.areano };
                    this.$apply();
                }
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(Location, [{
        key: 'getLocation',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sess_key, latitude, longitude) {
                var that, res, prov_code, prov_name, city_code, city_name, district_name, district_code, i, _i, _i2;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;

                                _tip2.default.loading();
                                _context.next = 4;
                                return _api2.default.defaultDistrict({ method: 'POST', query: {
                                        sess_key: sess_key,
                                        latitude: latitude,
                                        longitude: longitude
                                    } });

                            case 4:
                                res = _context.sent;

                                if (!(res.data.error_code == 0)) {
                                    _context.next = 45;
                                    break;
                                }

                                that.prov_list = res.data.bizobj.data.prov_list;
                                that.city_list = res.data.bizobj.data.city_list;
                                that.district_list = res.data.bizobj.data.district_list;
                                prov_code = '', prov_name = '', city_code = '', city_name = '', district_name = '', district_code = '';
                                i = 0;

                            case 11:
                                if (!(i < that.prov_list.length)) {
                                    _context.next = 19;
                                    break;
                                }

                                if (!(that.prov_list[i].flag == 1)) {
                                    _context.next = 16;
                                    break;
                                }

                                prov_name = that.prov_list[i].name;
                                prov_code = that.prov_list[i].code;
                                return _context.abrupt('break', 19);

                            case 16:
                                i++;
                                _context.next = 11;
                                break;

                            case 19:
                                _i = 0;

                            case 20:
                                if (!(_i < that.city_list.length)) {
                                    _context.next = 28;
                                    break;
                                }

                                if (!(that.city_list[_i].flag == 1)) {
                                    _context.next = 25;
                                    break;
                                }

                                city_name = that.city_list[_i].name;
                                city_code = that.city_list[_i].code;
                                return _context.abrupt('break', 28);

                            case 25:
                                _i++;
                                _context.next = 20;
                                break;

                            case 28:
                                _i2 = 0;

                            case 29:
                                if (!(_i2 < that.district_list.length)) {
                                    _context.next = 37;
                                    break;
                                }

                                if (!(that.district_list[_i2].flag == 1)) {
                                    _context.next = 34;
                                    break;
                                }

                                district_name = that.district_list[_i2].name;
                                district_code = that.district_list[_i2].code;
                                return _context.abrupt('break', 37);

                            case 34:
                                _i2++;
                                _context.next = 29;
                                break;

                            case 37:
                                // console.log(prov_code,city_code,district_name,district_code);
                                that.select_prov = { "area_name": prov_name, "areano": prov_code };
                                that.select_city = { "area_name": city_name, "areano": city_code };
                                that.select_district = { "area_name": district_name, "areano": district_code };
                                that.select = { "area_name": district_name, "areano": prov_code + '-' + city_code + '-' + district_code };
                                that.$apply();
                                _tip2.default.loaded();
                                _context.next = 46;
                                break;

                            case 45:
                                _tip2.default.error(res.data.error_msg);

                            case 46:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getLocation(_x, _x2, _x3) {
                return _ref2.apply(this, arguments);
            }

            return getLocation;
        }()
        //根据省份获取市区

    }, {
        key: 'getCityDistrict',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(prov_code, item) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                that = this;
                                _context2.next = 3;
                                return _api2.default.prov({ method: 'POST', query: {
                                        sess_key: that.sess_key,
                                        prov_code: prov_code
                                    } });

                            case 3:
                                res = _context2.sent;

                                if (res.data.error_code == 0) {
                                    that.city_list = res.data.bizobj.data.city_list;
                                    that.district_list = res.data.bizobj.data.district_list;
                                    that.select_prov = { "area_name": item.name, "areano": item.code };
                                    that.select_city = { "area_name": res.data.bizobj.data.city_list[0] ? res.data.bizobj.data.city_list[0].name : '', "areano": res.data.bizobj.data.city_list[0] ? res.data.bizobj.data.city_list[0].code : '' };
                                    that.select_district = { "area_name": res.data.bizobj.data.district_list[0] ? res.data.bizobj.data.district_list[0].name : '', "areano": res.data.bizobj.data.district_list[0] ? res.data.bizobj.data.district_list[0].code : '' };
                                    that.select = { "area_name": that.select_district.area_name, "areano": that.select_prov.areano + '-' + that.select_city.areano + '-' + that.select_district.areano };
                                    that.$apply();
                                    _tip2.default.loaded();
                                } else {
                                    _tip2.default.error(res.data.error_msg);
                                }

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getCityDistrict(_x4, _x5) {
                return _ref3.apply(this, arguments);
            }

            return getCityDistrict;
        }()
        //根据城市获取区

    }, {
        key: 'getCity',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(city_code, item) {
                var that, res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                that = this;
                                _context3.next = 3;
                                return _api2.default.city({ method: 'POST', query: {
                                        sess_key: that.sess_key,
                                        city_code: city_code
                                    } });

                            case 3:
                                res = _context3.sent;

                                if (res.data.error_code == 0) {
                                    that.district_list = res.data.bizobj.data.district_list;
                                    that.select_city = { "area_name": item.name, "areano": item.code };
                                    that.select_district = { "area_name": res.data.bizobj.data.district_list[0] ? res.data.bizobj.data.district_list[0].name : '', "areano": res.data.bizobj.data.district_list[0] ? res.data.bizobj.data.district_list[0].code : '' };
                                    that.select = { "area_name": that.select_district.area_name, "areano": that.select_prov.areano + '-' + that.select_city.areano + '-' + that.select_district.areano };
                                    that.$apply();
                                    _tip2.default.loaded();
                                } else {
                                    _tip2.default.error(res.data.error_msg);
                                }

                            case 5:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getCity(_x6, _x7) {
                return _ref4.apply(this, arguments);
            }

            return getCity;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var _this = this;
            wx.getStorage({
                key: 'sess_key',
                success: function success(res) {
                    _this.sess_key = res.data;
                    wx.getLocation({
                        type: 'wgs84',
                        success: function success(data) {
                            _this.getLocation(res.data, data.latitude, data.longitude);
                        }
                    });
                }
            });
        }
    }, {
        key: 'onUnload',
        value: function onUnload() {
            _onfire2.default.fire('search', { inputVal: this.select });
        }
    }]);

    return Location;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Location , 'pages/index/location'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLmpzIl0sIm5hbWVzIjpbIkxvY2F0aW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY2l0eSIsImRhdGEiLCJkaXN0cmljdCIsInByb3YiLCJwcm92X2xpc3QiLCJjaXR5X2xpc3QiLCJkaXN0cmljdF9saXN0Iiwic2VsZWN0X3Byb3YiLCJzZWxlY3RfY2l0eSIsInNlbGVjdF9kaXN0cmljdCIsInNlbGVjdCIsIm1ldGhvZHMiLCJzZWxlY3RDaGFuZ2UiLCJ0eXBlIiwiaXRlbSIsImdldENpdHlEaXN0cmljdCIsImNvZGUiLCJnZXRDaXR5IiwibmFtZSIsImFyZWFfbmFtZSIsImFyZWFubyIsIiRhcHBseSIsInNlc3Nfa2V5IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ0aGF0IiwidGlwIiwibG9hZGluZyIsImFwaSIsImRlZmF1bHREaXN0cmljdCIsIm1ldGhvZCIsInF1ZXJ5IiwicmVzIiwiZXJyb3JfY29kZSIsImJpem9iaiIsInByb3ZfY29kZSIsInByb3ZfbmFtZSIsImNpdHlfY29kZSIsImNpdHlfbmFtZSIsImRpc3RyaWN0X25hbWUiLCJkaXN0cmljdF9jb2RlIiwiaSIsImxlbmd0aCIsImZsYWciLCJsb2FkZWQiLCJlcnJvciIsImVycm9yX21zZyIsIl90aGlzIiwid3giLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsImdldExvY2F0aW9uIiwib25maXJlIiwiZmlyZSIsImlucHV0VmFsIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7OztpTUFDakJDLE0sR0FBUztBQUNMQyxvQ0FB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QyxFQUF5Q3RCLEtBQUt1QixTQUE5QztBQUNGO0FBSlUscUJBQWY7QUFNSDtBQVZTLGFBQWQ7QUFhSDs7O21DQUNTO0FBQ042Qiw2QkFBT0MsSUFBUCxDQUFZLFFBQVosRUFBc0IsRUFBRUMsVUFBVSxLQUFLN0MsTUFBakIsRUFBdEI7QUFDSDs7OztFQWxJaUM4QyxlQUFLQyxJOztrQkFBdEJsRSxRIiwiZmlsZSI6ImxvY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICAgIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vYXBpL2FwaSc7XHJcbiAgICBpbXBvcnQgdGlwIGZyb20gJy4uLy4uL3V0aWxzL3RpcCc7XHJcbiAgICBpbXBvcnQgY2l0eSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9jaXR5JztcclxuICAgIGltcG9ydCBvbmZpcmUgZnJvbSAnb25maXJlLmpzJztcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uIGV4dGVuZHMgd2VweS5wYWdle1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+etm+mAieWfjuW4gicsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcclxuLy8gICAgICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOlwiZGFya1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgJHJlcGVhdCA9IHtcImRpc3RyaWN0X2xpc3RcIjp7XCJjb21cIjpcImNpdHlcIixcInByb3BzXCI6XCJpdGVtLnN5bmNcIn0sXCJjaXR5X2xpc3RcIjp7XCJjb21cIjpcImNpdHlcIixcInByb3BzXCI6XCJpdGVtLnN5bmNcIn0sXCJwcm92X2xpc3RcIjp7XCJjb21cIjpcImNpdHlcIixcInByb3BzXCI6XCJpdGVtLnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJjaXR5XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJkaXN0cmljdF9saXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aXRlbS5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwicHJvdl9saXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6dHlwZS5zeW5jXCI6e1widmFsdWVcIjpcInByb3ZcIixcImZvclwiOlwicHJvdl9saXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6c2VsZWN0LnN5bmNcIjp7XCJ2YWx1ZVwiOlwic2VsZWN0X3Byb3ZcIixcImZvclwiOlwicHJvdl9saXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ4bWxuczp2LW9uXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJkaXN0cmljdF9saXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHtcImNpdHlcIjp7XCJ2LW9uOnNlbGVjdENoYW5nZVwiOlwic2VsZWN0Q2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIGNpdHk6Y2l0eVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBkaXN0cmljdDonZGlzdHJpY3QnLFxyXG4gICAgICAgICAgICBjaXR5OidjaXR5JyxcclxuICAgICAgICAgICAgcHJvdjoncHJvdicsXHJcbiAgICAgICAgICAgIHByb3ZfbGlzdDpbXSwvL+ecgeS7veWIl+ihqFxyXG4gICAgICAgICAgICBjaXR5X2xpc3Q6W10sLy/ln47luILliJfooahcclxuICAgICAgICAgICAgZGlzdHJpY3RfbGlzdDpbXSwvL+WMuuWfn+WIl+ihqFxyXG4gICAgICAgICAgICBzZWxlY3RfcHJvdjp7J2FyZWFfbmFtZSc6JycsJ2FyZWFubyc6Jyd9LFxyXG4gICAgICAgICAgICBzZWxlY3RfY2l0eTp7J2FyZWFfbmFtZSc6JycsJ2FyZWFubyc6Jyd9LFxyXG4gICAgICAgICAgICBzZWxlY3RfZGlzdHJpY3Q6eydhcmVhX25hbWUnOicnLCdhcmVhbm8nOicnfSxcclxuICAgICAgICAgICAgc2VsZWN0OnsnYXJlYV9uYW1lJzonJywnYXJlYW5vJzonJ31cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ojrflj5bnnIHluILljLpcclxuICAgICAgICBhc3luYyBnZXRMb2NhdGlvbihzZXNzX2tleSxsYXRpdHVkZSxsb25naXR1ZGUpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aXAubG9hZGluZygpO1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmRlZmF1bHREaXN0cmljdCh7bWV0aG9kOidQT1NUJyxxdWVyeTp7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc19rZXk6IHNlc3Nfa2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOmxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTpsb25naXR1ZGVcclxuICAgICAgICAgICAgICAgIH19KTtcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEuZXJyb3JfY29kZSA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHRoYXQucHJvdl9saXN0ID0gcmVzLmRhdGEuYml6b2JqLmRhdGEucHJvdl9saXN0O1xyXG4gICAgICAgICAgICAgICAgdGhhdC5jaXR5X2xpc3QgPSByZXMuZGF0YS5iaXpvYmouZGF0YS5jaXR5X2xpc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmRpc3RyaWN0X2xpc3QgPSByZXMuZGF0YS5iaXpvYmouZGF0YS5kaXN0cmljdF9saXN0O1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb3ZfY29kZT0nJyxwcm92X25hbWU9JycsY2l0eV9jb2RlPScnLGNpdHlfbmFtZT0nJyxkaXN0cmljdF9uYW1lPScnLGRpc3RyaWN0X2NvZGU9Jyc7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGF0LnByb3ZfbGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGF0LnByb3ZfbGlzdFtpXS5mbGFnID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92X25hbWUgPSB0aGF0LnByb3ZfbGlzdFtpXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92X2NvZGUgPSB0aGF0LnByb3ZfbGlzdFtpXS5jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGF0LmNpdHlfbGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGF0LmNpdHlfbGlzdFtpXS5mbGFnID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaXR5X25hbWUgPSB0aGF0LmNpdHlfbGlzdFtpXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaXR5X2NvZGUgPSB0aGF0LmNpdHlfbGlzdFtpXS5jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGF0LmRpc3RyaWN0X2xpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhhdC5kaXN0cmljdF9saXN0W2ldLmZsYWcgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RyaWN0X25hbWUgPSB0aGF0LmRpc3RyaWN0X2xpc3RbaV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzdHJpY3RfY29kZSA9IHRoYXQuZGlzdHJpY3RfbGlzdFtpXS5jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm92X2NvZGUsY2l0eV9jb2RlLGRpc3RyaWN0X25hbWUsZGlzdHJpY3RfY29kZSk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdF9wcm92ID0ge1wiYXJlYV9uYW1lXCI6cHJvdl9uYW1lLFwiYXJlYW5vXCI6cHJvdl9jb2RlfTtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0X2NpdHkgPSB7XCJhcmVhX25hbWVcIjpjaXR5X25hbWUsXCJhcmVhbm9cIjpjaXR5X2NvZGV9O1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZWxlY3RfZGlzdHJpY3QgPSB7XCJhcmVhX25hbWVcIjpkaXN0cmljdF9uYW1lLFwiYXJlYW5vXCI6ZGlzdHJpY3RfY29kZX07XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdCA9IHtcImFyZWFfbmFtZVwiOmRpc3RyaWN0X25hbWUsXCJhcmVhbm9cIjpwcm92X2NvZGUrJy0nK2NpdHlfY29kZSsnLScrZGlzdHJpY3RfY29kZX07XHJcbiAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgdGlwLmxvYWRlZCgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRpcC5lcnJvcihyZXMuZGF0YS5lcnJvcl9tc2cpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+agueaNruecgeS7veiOt+WPluW4guWMulxyXG4gICAgICAgIGFzeW5jIGdldENpdHlEaXN0cmljdChwcm92X2NvZGUsaXRlbSl7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5wcm92KHttZXRob2Q6J1BPU1QnLHF1ZXJ5OntcclxuICAgICAgICAgICAgICAgICAgICBzZXNzX2tleTogdGhhdC5zZXNzX2tleSxcclxuICAgICAgICAgICAgICAgICAgICBwcm92X2NvZGU6cHJvdl9jb2RlXHJcbiAgICAgICAgICAgICAgICB9fSk7XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmNpdHlfbGlzdCA9IHJlcy5kYXRhLmJpem9iai5kYXRhLmNpdHlfbGlzdDtcclxuICAgICAgICAgICAgICAgIHRoYXQuZGlzdHJpY3RfbGlzdCA9IHJlcy5kYXRhLmJpem9iai5kYXRhLmRpc3RyaWN0X2xpc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdF9wcm92ID0ge1wiYXJlYV9uYW1lXCI6aXRlbS5uYW1lLFwiYXJlYW5vXCI6aXRlbS5jb2RlfTtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0X2NpdHkgPSB7XCJhcmVhX25hbWVcIjpyZXMuZGF0YS5iaXpvYmouZGF0YS5jaXR5X2xpc3RbMF0/cmVzLmRhdGEuYml6b2JqLmRhdGEuY2l0eV9saXN0WzBdLm5hbWU6JycsXCJhcmVhbm9cIjpyZXMuZGF0YS5iaXpvYmouZGF0YS5jaXR5X2xpc3RbMF0/cmVzLmRhdGEuYml6b2JqLmRhdGEuY2l0eV9saXN0WzBdLmNvZGU6Jyd9O1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZWxlY3RfZGlzdHJpY3QgPSB7XCJhcmVhX25hbWVcIjpyZXMuZGF0YS5iaXpvYmouZGF0YS5kaXN0cmljdF9saXN0WzBdP3Jlcy5kYXRhLmJpem9iai5kYXRhLmRpc3RyaWN0X2xpc3RbMF0ubmFtZTonJyxcImFyZWFub1wiOnJlcy5kYXRhLmJpem9iai5kYXRhLmRpc3RyaWN0X2xpc3RbMF0/cmVzLmRhdGEuYml6b2JqLmRhdGEuZGlzdHJpY3RfbGlzdFswXS5jb2RlOicnfTtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0ID0ge1wiYXJlYV9uYW1lXCI6dGhhdC5zZWxlY3RfZGlzdHJpY3QuYXJlYV9uYW1lLFwiYXJlYW5vXCI6dGhhdC5zZWxlY3RfcHJvdi5hcmVhbm8rJy0nK3RoYXQuc2VsZWN0X2NpdHkuYXJlYW5vKyctJyt0aGF0LnNlbGVjdF9kaXN0cmljdC5hcmVhbm99O1xyXG4gICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIHRpcC5sb2FkZWQoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aXAuZXJyb3IocmVzLmRhdGEuZXJyb3JfbXNnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/moLnmja7ln47luILojrflj5bljLpcclxuICAgICAgICBhc3luYyBnZXRDaXR5KGNpdHlfY29kZSxpdGVtKXtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmNpdHkoe21ldGhvZDonUE9TVCcscXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Nfa2V5OiB0aGF0LnNlc3Nfa2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGNpdHlfY29kZTpjaXR5X2NvZGVcclxuICAgICAgICAgICAgICAgIH19KTtcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEuZXJyb3JfY29kZSA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuZGlzdHJpY3RfbGlzdCA9IHJlcy5kYXRhLmJpem9iai5kYXRhLmRpc3RyaWN0X2xpc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdF9jaXR5ID0ge1wiYXJlYV9uYW1lXCI6aXRlbS5uYW1lLFwiYXJlYW5vXCI6aXRlbS5jb2RlfTtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0X2Rpc3RyaWN0ID0ge1wiYXJlYV9uYW1lXCI6cmVzLmRhdGEuYml6b2JqLmRhdGEuZGlzdHJpY3RfbGlzdFswXT9yZXMuZGF0YS5iaXpvYmouZGF0YS5kaXN0cmljdF9saXN0WzBdLm5hbWU6JycsXCJhcmVhbm9cIjpyZXMuZGF0YS5iaXpvYmouZGF0YS5kaXN0cmljdF9saXN0WzBdP3Jlcy5kYXRhLmJpem9iai5kYXRhLmRpc3RyaWN0X2xpc3RbMF0uY29kZTonJ307XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdCA9IHtcImFyZWFfbmFtZVwiOnRoYXQuc2VsZWN0X2Rpc3RyaWN0LmFyZWFfbmFtZSxcImFyZWFub1wiOnRoYXQuc2VsZWN0X3Byb3YuYXJlYW5vKyctJyt0aGF0LnNlbGVjdF9jaXR5LmFyZWFubysnLScrdGhhdC5zZWxlY3RfZGlzdHJpY3QuYXJlYW5vfTtcclxuICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB0aXAubG9hZGVkKCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGlwLmVycm9yKHJlcy5kYXRhLmVycm9yX21zZyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZCgpe1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3Nlc3Nfa2V5JyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2Vzc19rZXkgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB3eC5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0TG9jYXRpb24ocmVzLmRhdGEsZGF0YS5sYXRpdHVkZSxkYXRhLmxvbmdpdHVkZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgb25VbmxvYWQoKXtcclxuICAgICAgICAgICAgb25maXJlLmZpcmUoJ3NlYXJjaCcsIHsgaW5wdXRWYWw6IHRoaXMuc2VsZWN0IH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgc2VsZWN0Q2hhbmdlKHR5cGUsaXRlbSl7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlPT1cInByb3ZcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDaXR5RGlzdHJpY3QoaXRlbS5jb2RlLGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodHlwZT09XCJjaXR5XCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2l0eShpdGVtLmNvZGUsaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdF9kaXN0cmljdCA9IHtcImFyZWFfbmFtZVwiOml0ZW0ubmFtZSxcImFyZWFub1wiOml0ZW0uY29kZX07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QgPSB7XCJhcmVhX25hbWVcIjp0aGlzLnNlbGVjdF9kaXN0cmljdC5hcmVhX25hbWUsXCJhcmVhbm9cIjp0aGlzLnNlbGVjdF9wcm92LmFyZWFubysnLScrdGhpcy5zZWxlY3RfY2l0eS5hcmVhbm8rJy0nK3RoaXMuc2VsZWN0X2Rpc3RyaWN0LmFyZWFub307XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiJdfQ==