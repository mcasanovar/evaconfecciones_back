"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _authenticateUser = _interopRequireDefault(require("./user/authenticateUser.js"));

var _createUser = _interopRequireDefault(require("./user/createUser.js"));

var _createCollage = _interopRequireDefault(require("./collage/createCollage.js"));

var _deleteCollage = _interopRequireDefault(require("./collage/deleteCollage.js"));

var _createClothes = _interopRequireDefault(require("./clothes/createClothes.js"));

var _deleteClothes = _interopRequireDefault(require("./clothes/deleteClothes.js"));

var _createSize = _interopRequireDefault(require("./size/createSize.js"));

var _deleteSize = _interopRequireDefault(require("./size/deleteSize.js"));

var _createItem = _interopRequireDefault(require("./item/createItem.js"));

var _deleteItem = _interopRequireDefault(require("./item/deleteItem.js"));

var _createOrder = _interopRequireDefault(require("./order/createOrder.js"));

var _updateOrder = _interopRequireDefault(require("./order/updateOrder.js"));

var _addPreviewPayment = _interopRequireDefault(require("./order/addPreviewPayment.js"));

var _removePreviewPayment = _interopRequireDefault(require("./order/removePreviewPayment.js"));

var _addItemToOrder = _interopRequireDefault(require("./order/addItemToOrder.js"));

var _removeItemToOrder = _interopRequireDefault(require("./order/removeItemToOrder.js"));

//user
//collages
//clothes
//sizes
//items
//orders
module.exports = {
  createCollage: _createCollage["default"],
  createUser: _createUser["default"],
  authenticateUser: _authenticateUser["default"],
  deleteCollage: _deleteCollage["default"],
  createClothes: _createClothes["default"],
  deleteClothes: _deleteClothes["default"],
  createSize: _createSize["default"],
  deleteSize: _deleteSize["default"],
  createItem: _createItem["default"],
  deleteItem: _deleteItem["default"],
  createOrder: _createOrder["default"],
  updateOrder: _updateOrder["default"],
  addPreviewPayment: _addPreviewPayment["default"],
  removePreviewPayment: _removePreviewPayment["default"],
  addItemToOrder: _addItemToOrder["default"],
  removeItemToOrder: _removeItemToOrder["default"]
};