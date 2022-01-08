"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var ItemsSchema = _mongoose["default"].Schema({
  collage: {
    type: String,
    required: true,
    trim: true
  },
  clothes: {
    type: String,
    required: true,
    trim: true
  },
  size: {
    type: String,
    required: true,
    trim: true
  },
  isDeleted: {
    type: Boolean
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  createAt: {
    type: Date,
    "default": Date.now()
  }
});

module.exports = _mongoose["default"].model("Items", ItemsSchema);