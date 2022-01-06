"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServer = require("apollo-server");

var _Order = _interopRequireDefault(require("../../../models/Order.js"));

var _default = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
    var input, idOrder, price, orderFinded, order;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input;
            idOrder = input.idOrder, price = input.price;
            _context.prev = 2;
            _context.next = 5;
            return _Order["default"].findOne({
              _id: idOrder,
              isDeleted: false
            });

          case 5:
            orderFinded = _context.sent;

            if (orderFinded) {
              _context.next = 8;
              break;
            }

            throw new Error('No se ha encontrado la orden');

          case 8:
            _context.next = 10;
            return _Order["default"].findOneAndUpdate({
              _id: idOrder
            }, {
              $set: {
                balance: orderFinded.balance - price,
                previewPayment: orderFinded.previewPayment + price
              },
              $push: {
                previusPayments: {
                  price: price
                }
              }
            }, {
              "new": true
            });

          case 10:
            order = _context.sent;
            return _context.abrupt("return", order);

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            throw new _apolloServer.ApolloError(_context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports["default"] = _default;