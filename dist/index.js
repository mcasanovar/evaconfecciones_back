"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _apolloServer = require("apollo-server");

var _apolloServerCore = require("apollo-server-core");

var _index = _interopRequireDefault(require("./types/index.js"));

var _index2 = _interopRequireDefault(require("./resolvers/index.js"));

var _db = _interopRequireDefault(require("./config/db.js"));

var _index3 = require("./libs/index.js");

require('dotenv').config({
  path: ".env"
}); //libs


var verifyToken = _index3.JsonWebToken.verifyToken; //db

(0, _db["default"])(); //server

var server = new _apolloServer.ApolloServer({
  typeDefs: _index["default"],
  resolvers: _index2["default"],
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