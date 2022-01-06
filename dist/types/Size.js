"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServer = require("apollo-server");

var _templateObject;

module.exports = (0, _apolloServer.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n\n  type Size {\n    _id: ID!\n    isDeleted: Boolean\n    name: String!\n  }\n\n  input CreateSizeInput {\n    name: String!\n  }\n\n  # QUERIES\n\n  type Query {\n    getAllSizes: [Size]\n  }\n\n  # MUTATIONS\n\n  type Mutation {\n    createSize(input: CreateSizeInput!): Size!\n    deleteSize(id: ID!): String\n  }\n"])));