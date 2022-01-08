"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServer = require("apollo-server");

var _User = _interopRequireDefault(require("../../../models/User"));

var _libs = require("../../../libs");

require('dotenv').config({
  path: ".env"
});

var _default = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
    var token, verifyToken, userTokenizate, userFinded;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = _ref.token;
            verifyToken = _libs.JsonWebToken.verifyToken;
            _context.prev = 2;
            userTokenizate = verifyToken(token, process.env.SECRET_JWT);
            console.log("user id", userTokenizate);

            if (userTokenizate) {
              _context.next = 7;
              break;
            }

            throw new Error('Ha ocurrido un error con el token al verificar el usuario');

          case 7:
            _context.next = 9;
            return _User["default"].findOne({
              _id: userTokenizate._id
            });

          case 9:
            userFinded = _context.sent;

            if (userFinded) {
              _context.next = 12;
              break;
            }

            throw new Error('No se ha encontrado un usuario con el ID obtenido');

          case 12:
            return _context.abrupt("return", userFinded);

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](2);
            throw new _apolloServer.ApolloError(_context.t0);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 15]]);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports["default"] = _default;