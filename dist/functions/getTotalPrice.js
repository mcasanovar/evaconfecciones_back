"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getTotalPrice = function getTotalPrice(items, value) {
  if (!items.length) return 0;
  if (!value) return 0;
  return items.reduce(function (acc, current) {
    return acc + current[value];
  }, 0);
};

var _default = getTotalPrice;
exports["default"] = _default;