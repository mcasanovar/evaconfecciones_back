"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _authenticateUser = _interopRequireDefault(require("./user/authenticateUser"));

var _createUser = _interopRequireDefault(require("./user/createUser"));

var _createCollage = _interopRequireDefault(require("./collage/createCollage"));

var _deleteCollage = _interopRequireDefault(require("./collage/deleteCollage"));

var _createClothes = _interopRequireDefault(require("./clothes/createClothes"));

var _deleteClothes = _interopRequireDefault(require("./clothes/deleteClothes"));

var _createSize = _interopRequireDefault(require("./size/createSize"));

var _deleteSize = _interopRequireDefault(require("./size/deleteSize"));

var _createItem = _interopRequireDefault(require("./item/createItem"));

var _deleteItem = _interopRequireDefault(require("./item/deleteItem"));

var _createOrder = _interopRequireDefault(require("./order/createOrder"));

var _updateOrder = _interopRequireDefault(require("./order/updateOrder"));

var _addPreviewPayment = _interopRequireDefault(require("./order/addPreviewPayment"));

var _removePreviewPayment = _interopRequireDefault(require("./order/removePreviewPayment"));

var _addItemToOrder = _interopRequireDefault(require("./order/addItemToOrder"));

var _removeItemToOrder = _interopRequireDefault(require("./order/removeItemToOrder"));

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