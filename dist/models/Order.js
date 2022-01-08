"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var previusPaymentSchema = _mongoose["default"].Schema({
  createAt: {
    type: Date,
    "default": Date.now()
  },
  price: {
    type: Number,
    required: true
  }
});

var detailSchema = _mongoose["default"].Schema({
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
  uniquePrice: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
});

var OrderSchema = _mongoose["default"].Schema({
  createAt: {
    type: Date,
    "default": Date.now()
  },
  updatedAt: {
    type: Date,
    required: true
  },
  estimatedDeliveryDate: {
    type: Date,
    required: true
  },
  isDeleted: {
    type: Boolean
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  clientName: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  subTotal: {
    type: Number,
    required: true
  },
  previewPayment: {
    type: Number,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
  details: [detailSchema],
  comments: {
    type: String
  },
  state: {
    type: String,
    required: true
  },
  percentage: {
    type: Number
  }
});

module.exports = _mongoose["default"].model("Order", OrderSchema);