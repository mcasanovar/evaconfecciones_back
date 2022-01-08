"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServer = require("apollo-server");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _libs = require("../../../libs");

var _User = _interopRequireDefault(require("../../../models/User"));

require('dotenv').config({
  path: ".env"
});

var _default = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
    var input, createToken, email, password, userFinded, isRightPassword;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input;
            createToken = _libs.JsonWebToken.createToken;
            _context.prev = 2;
            email = input.email, password = input.password;
            _context.next = 6;
            return _User["default"].findOne({
              email: email
            });

          case 6:
            userFinded = _context.sent;

            if (userFinded) {
              _context.next = 9;
              break;
            }

            throw new Error('No se ha encontrado el usuario');

          case 9:
            _context.next = 11;
            return _bcryptjs["default"].compare(password, userFinded.password);

          case 11:
            isRightPassword = _context.sent;

            if (isRightPassword) {
              _context.next = 14;
              break;
            }

            throw new Error('La contraseña es incorrecta');

          case 14:
            return _context.abrupt("return", {
              token: createToken(userFinded, process.env.SECRET_JWT, '48h')
            });

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](2);
            throw new _apolloServer.ApolloError(_context.t0);

          case 20:
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