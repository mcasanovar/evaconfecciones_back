"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServer = require("apollo-server");

var _Order = _interopRequireDefault(require("../../../models/Order"));

var _default = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
    var year, ordersFinded, actualYear, nextYear;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            year = _ref.year;
            _context.prev = 1;
            ordersFinded = [];
            actualYear = year;
            nextYear = "".concat(year + 1);

            if (year) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return _Order["default"].find({
              isDeleted: false
            });

          case 8:
            ordersFinded = _context.sent;
            return _context.abrupt("return", ordersFinded);

          case 10:
            _context.next = 12;
            return _Order["default"].find({
              isDeleted: false,
              createAt: {
                $gte: "".concat(actualYear, "-01-01"),
                $lte: "".concat(nextYear, "-01-01")
              }
            }).sort({
              createAt: 1
            });

          case 12:
            ordersFinded = _context.sent;
            console.log(ordersFinded);
            return _context.abrupt("return", ordersFinded);

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](1);
            throw new _apolloServer.ApolloError(_context.t0);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 17]]);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports["default"] = _default;