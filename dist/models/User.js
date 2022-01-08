"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var UserSchema = _mongoose["default"].Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  createAt: {
    type: Date,
    "default": Date.now()
  },
  updatedAt: {
    type: Date
  }
});

module.exports = _mongoose["default"].model('User', UserSchema);