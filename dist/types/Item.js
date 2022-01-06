"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServer = require("apollo-server");

var _templateObject;

module.exports = (0, _apolloServer.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n\n  type Item {\n    _id: ID!\n    collage: String!,\n    clothes: String!,\n    size: String!,\n    isDeleted: Boolean,\n    price: Int!,\n    createAt: String\n  }\n\n  input CreateItemInput {\n    collage: String!,\n    clothes: String!,\n    size: String!,\n    price: Int!,\n  }\n\n  # QUERIES\n\n  type Query {\n    getAllItems: [Item]\n  }\n\n  # MUTATIONS\n\n  type Mutation {\n    createItem(input: CreateItemInput!): Item!\n    deleteItem(id: ID!): String\n  }\n"])));