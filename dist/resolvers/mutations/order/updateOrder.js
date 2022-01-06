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

var _index = require("../../../../functions/index.js");

var _default = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
    var input, id, clientName, phone, comments, details, previewPayment, percentage, oldOrder, subTotal, state, newOrder, order;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input;
            _context.prev = 1;
            id = input.id, clientName = input.clientName, phone = input.phone, comments = input.comments, details = input.details, previewPayment = input.previewPayment, percentage = input.percentage;
            _context.next = 5;
            return _Order["default"].findById(id);

          case 5:
            oldOrder = _context.sent;

            if (oldOrder) {
              _context.next = 8;
              break;
            }

            throw new Error('No se ha encontrado la orden');

          case 8:
            subTotal = 0;
            state = 'Pendiente';

            if (!!details.length) {
              subTotal = (0, _index.getTotalPrice)(details, "total");
            }

            if (details.every(function (item) {
              return item.completed;
            })) {
              state = 'Listo para entrega';
            }

            newOrder = {
              updatedAt: Date.now(),
              clientName: clientName,
              phone: phone,
              comments: comments,
              subTotal: subTotal,
              previewPayment: previewPayment,
              balance: subTotal - previewPayment,
              details: details,
              state: state,
              percentage: percentage
            };
            _context.next = 15;
            return _Order["default"].findByIdAndUpdate({
              _id: id
            }, newOrder, {
              "new": true
            });

          case 15:
            order = _context.sent;
            return _context.abrupt("return", order);

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](1);
            console.log(e);
            throw new _apolloServer.ApolloError(e);

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 19]]);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports["default"] = _default;