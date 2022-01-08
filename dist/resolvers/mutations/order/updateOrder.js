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

var _functions = require("../../../functions");

var _default = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
    var input, id, clientName, phone, comments, details, previewPayment, percentage, _input$isDelivered, isDelivered, oldOrder, subTotal, state, newOrder, order;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input;
            _context.prev = 1;
            id = input.id, clientName = input.clientName, phone = input.phone, comments = input.comments, details = input.details, previewPayment = input.previewPayment, percentage = input.percentage, _input$isDelivered = input.isDelivered, isDelivered = _input$isDelivered === void 0 ? false : _input$isDelivered;
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
              subTotal = (0, _functions.getTotalPrice)(details, "total");
            }

            if (details.every(function (item) {
              return item.completed;
            })) {
              state = 'Listo para entrega';
            }

            if (isDelivered) {
              state = 'Entregado';
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
            _context.next = 16;
            return _Order["default"].findByIdAndUpdate({
              _id: id
            }, newOrder, {
              "new": true
            });

          case 16:
            order = _context.sent;
            return _context.abrupt("return", order);

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](1);
            console.log(e);
            throw new _apolloServer.ApolloError(e);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 20]]);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports["default"] = _default;