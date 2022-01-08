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

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _User = _interopRequireDefault(require("../../../models/User"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
    var input, email, password, userFinded, salt, inputWithUpdatedAt, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input;
            email = input.email, password = input.password;
            _context.prev = 2;
            _context.next = 5;
            return _User["default"].findOne({
              email: email
            });

          case 5:
            userFinded = _context.sent;

            if (!userFinded) {
              _context.next = 8;
              break;
            }

            throw new Error('Este usuario ya está registrado');

          case 8:
            //hash password
            salt = _bcryptjs["default"].genSaltSync(10);
            _context.t0 = _objectSpread;
            _context.t1 = _objectSpread({}, input);
            _context.t2 = {};
            _context.next = 14;
            return _bcryptjs["default"].hash(password, salt);

          case 14:
            _context.t3 = _context.sent;
            _context.t4 = Date.now();
            _context.t5 = {
              password: _context.t3,
              updatedAt: _context.t4
            };
            inputWithUpdatedAt = (0, _context.t0)(_context.t1, _context.t2, _context.t5);
            user = new _User["default"](inputWithUpdatedAt);
            user.save();
            return _context.abrupt("return", user);

          case 23:
            _context.prev = 23;
            _context.t6 = _context["catch"](2);
            throw new _apolloServer.ApolloError(_context.t6);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 23]]);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports["default"] = _default;