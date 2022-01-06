"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var ClothesSchema = _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  isDeleted: {
    type: Boolean
  },
  createAt: {
    type: Date,
    "default": Date.now()
  }
});

module.exports = _mongoose["default"].model('Clothes', ClothesSchema);