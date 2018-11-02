'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var wxRequest = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var url = arguments[1];
    var data, res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _tip2.default.loading();
            data = params.query || {};
            _context.next = 4;
            return _wepy2.default.request({
              url: url,
              method: params.method || 'GET',
              data: data,
              header: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

          case 4:
            res = _context.sent;

            _tip2.default.loaded();
            return _context.abrupt('return', res);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function wxRequest() {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  wxRequest: wxRequest
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJ0aXAiLCJsb2FkaW5nIiwiZGF0YSIsInF1ZXJ5Iiwid2VweSIsInJlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXIiLCJyZXMiLCJsb2FkZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUE7QUFBQSxxRUFBWTtBQUFBLFFBQU1DLE1BQU4sdUVBQWUsRUFBZjtBQUFBLFFBQW1CQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJDLDBCQUFJQyxPQUFKO0FBQ0lDLGdCQUZZLEdBRUxKLE9BQU9LLEtBQVAsSUFBZ0IsRUFGWDtBQUFBO0FBQUEsbUJBR0FDLGVBQUtDLE9BQUwsQ0FBYTtBQUMzQk4sbUJBQUtBLEdBRHNCO0FBRTNCTyxzQkFBUVIsT0FBT1EsTUFBUCxJQUFpQixLQUZFO0FBRzNCSixvQkFBTUEsSUFIcUI7QUFJM0JLLHNCQUFRLEVBQUUsZ0JBQWdCLG1DQUFsQjtBQUptQixhQUFiLENBSEE7O0FBQUE7QUFHWkMsZUFIWTs7QUFTaEJSLDBCQUFJUyxNQUFKO0FBVGdCLDZDQVVURCxHQVZTOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7QUFjQUUsT0FBT0MsT0FBUCxHQUFpQjtBQUNmZDtBQURlLENBQWpCIiwiZmlsZSI6Ind4UmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgdGlwIGZyb20gJy4vdGlwJ1xyXG5cclxuY29uc3Qgd3hSZXF1ZXN0ID0gYXN5bmMocGFyYW1zID0ge30sIHVybCkgPT4ge1xyXG4gIHRpcC5sb2FkaW5nKCk7XHJcbiAgbGV0IGRhdGEgPSBwYXJhbXMucXVlcnkgfHwge307XHJcbiAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICB1cmw6IHVybCxcclxuICAgIG1ldGhvZDogcGFyYW1zLm1ldGhvZCB8fCAnR0VUJyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBoZWFkZXI6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXHJcbiAgfSk7XHJcbiAgdGlwLmxvYWRlZCgpO1xyXG4gIHJldHVybiByZXM7XHJcbn07XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgd3hSZXF1ZXN0XHJcbn1cclxuIl19