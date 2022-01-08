"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getAllCollages = _interopRequireDefault(require("./collage/getAllCollages"));

var _getAllClothes = _interopRequireDefault(require("./clothes/getAllClothes"));

var _getAllSizes = _interopRequireDefault(require("./size/getAllSizes"));

var _getAllItems = _interopRequireDefault(require("./item/getAllItems"));

var _getOrders = _interopRequireDefault(require("./order/getOrders"));

var _getOrderById = _interopRequireDefault(require("./order/getOrderById"));

var _getUser = _interopRequireDefault(require("./user/getUser"));

//collage
//clothes
//size
//item
//order
//user
module.exports = {
  getAllCollages: _getAllCollages["default"],
  getUser: _getUser["default"],
  getAllClothes: _getAllClothes["default"],
  getAllSizes: _getAllSizes["default"],
  getAllItems: _getAllItems["default"],
  getOrders: _getOrders["default"],
  getOrderById: _getOrderById["default"]
};