"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServer = require("apollo-server");

var _templateObject;

module.exports = (0, _apolloServer.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n\n  type User {\n    _id: ID\n    firstName: String\n    lastName: String\n    email: String\n    password: String\n    createAt: String\n    updatedAt: String\n  }\n\n  type Token {\n    token: String\n  }\n\n  input CreateUserInput {\n    firstName: String!\n    lastName: String!\n    email: String!\n    password: String!\n  }\n\n  input AuthenticateUserInput {\n    email: String!\n    password: String!\n  }\n\n  # QUERIES\n  type Query {\n    getUser(token: String!) : User\n  }\n\n  # MUTATIONS\n\n  type Mutation {\n    createUser(input: CreateUserInput): User\n    authenticateUser(input: AuthenticateUserInput): Token\n  }\n\n"])));