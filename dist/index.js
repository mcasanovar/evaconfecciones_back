"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _apolloServer = require("apollo-server");

var _apolloServerCore = require("apollo-server-core");

var _types = _interopRequireDefault(require("./types"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _db = _interopRequireDefault(require("./config/db"));

var _libs = require("./libs");

require('dotenv').config({
  path: ".env"
}); //libs


var verifyToken = _libs.JsonWebToken.verifyToken; //db

(0, _db["default"])(); //server

var server = new _apolloServer.ApolloServer({
  typeDefs: _types["default"],
  resolvers: _resolvers["default"],
  context: function context(_ref) {
    var req = _ref.req;
    var token = req.headers['authorization'] || '';

    if (token) {
      try {
        var userLogged = verifyToken(token, process.env.SECRET_JWT);
        return {
          userLogged: userLogged
        };
      } catch (error) {
        console.log("Hubo un error al encontrar el usuario logeado");
        console.log(error);
      }
    }
  },
  plugins: [(0, _apolloServerCore.ApolloServerPluginLandingPageGraphQLPlayground)()]
});
server.listen({
  port: process.env.PORT || 4000
}).then(function (_ref2) {
  var url = _ref2.url;
  console.log("Server running on ".concat(url));
});