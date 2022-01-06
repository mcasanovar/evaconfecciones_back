"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getAllCollages = _interopRequireDefault(require("./collage/getAllCollages.js"));

var _getAllClothes = _interopRequireDefault(require("./clothes/getAllClothes.js"));

var _getAllSizes = _interopRequireDefault(require("./size/getAllSizes.js"));

var _getAllItems = _interopRequireDefault(require("./item/getAllItems.js"));

var _getOrders = _interopRequireDefault(require("./order/getOrders.js"));

var _getOrderById = _interopRequireDefault(require("./order/getOrderById.js"));

var _getUser = _interopRequireDefault(require("./user/getUser.js"));

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