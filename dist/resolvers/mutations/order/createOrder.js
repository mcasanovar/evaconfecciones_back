"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServer = require("apollo-server");

var _Order = _interopRequireDefault(require("../../../models/Order.js"));

var _functions = require("../../../functions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
    var input, details, previewPayment, isDirectBuy, _objectSpread2, subTotal, timestamp, code, balance, state, percentage, detailsMapped, order;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input;
            details = input.details, previewPayment = input.previewPayment, isDirectBuy = input.isDirectBuy;
            _context.prev = 2;
            subTotal = 0;
            timestamp = new Date().getTime();
            code = "E".concat(timestamp);

            if (!!details.length) {
              subTotal = (0, _functions.getTotalPrice)(details, "total");
            }

            balance = subTotal - previewPayment;
            state = 'Pendiente';
            percentage = 0;
            detailsMapped = details;

            if (isDirectBuy) {
              balance = subTotal;
              state = 'Entregado';
              percentage = 100;
              detailsMapped = details.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  completed: true
                });
              });
            }

            order = new _Order["default"](_objectSpread(_objectSpread({}, input), {}, (_objectSpread2 = {
              previewPayment: isDirectBuy ? 0 : previewPayment,
              details: detailsMapped,
              updatedAt: Date.now(),
              isDeleted: false,
              code: code,
              subTotal: subTotal
            }, (0, _defineProperty2["default"])(_objectSpread2, "previewPayment", previewPayment), (0, _defineProperty2["default"])(_objectSpread2, "balance", balance), (0, _defineProperty2["default"])(_objectSpread2, "state", state), (0, _defineProperty2["default"])(_objectSpread2, "percentage", percentage), _objectSpread2)));
            order.save();
            return _context.abrupt("return", order);

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            throw new _apolloServer.ApolloError(_context.t0);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 17]]);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports["default"] = _default;