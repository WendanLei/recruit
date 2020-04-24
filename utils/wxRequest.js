'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var regeneratorRuntime = require('../npm/regenerator-runtime/runtime.js');

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
