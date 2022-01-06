"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServer = require("apollo-server");

var _Items = _interopRequireDefault(require("../../../models/Items.js"));

var _default = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
    var id, itemFinded;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.id;
            _context.prev = 1;
            _context.next = 4;
            return _Items["default"].findOne({
              _id: id
            });

          case 4:
            itemFinded = _context.sent;

            if (itemFinded) {
              _context.next = 7;
              break;
            }

            throw new Error('No se ha encontrado el item a eliminar');

          case 7:
            _context.next = 9;
            return _Items["default"].findOneAndUpdate({
              _id: id
            }, {
              $set: {
                isDeleted: true
              }
            });

          case 9:
            return _context.abrupt("return", 'Item eliminado correctamente');

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            throw new _apolloServer.ApolloError(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports["default"] = _default;