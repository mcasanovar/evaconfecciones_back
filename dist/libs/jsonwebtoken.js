"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var createToken = function createToken(user, secret, expiresIn) {
  var _id = user._id,
      firstName = user.firstName,
      lastName = user.lastName,
      email = user.email;
  return _jsonwebtoken["default"].sign({
    _id: _id,
    firstName: firstName,
    lastName: lastName,
    email: email
  }, secret, {
    expiresIn: expiresIn
  });
};

var verifyToken = function verifyToken(token, secret) {
  return _jsonwebtoken["default"].verify(token, secret);
};

var _default = {
  createToken: createToken,
  verifyToken: verifyToken
};
exports["default"] = _default;