"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _users = _interopRequireDefault(require("./api/users"));
require("./db");
var _errHandler = _interopRequireDefault(require("./errHandler"));
var _movies = _interopRequireDefault(require("./api/movies"));
var _authenticate = _interopRequireDefault(require("./authenticate"));
var _actors = _interopRequireDefault(require("./api/actors"));
var _reviews = _interopRequireDefault(require("./api/reviews"));
var _genres = _interopRequireDefault(require("./api/genres"));
require("./seedData");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//import movies router

_dotenv["default"].config();
var app = (0, _express["default"])();
var port = process.env.PORT;
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use('/api/users', _users["default"]);
app.use('/api/movies', _movies["default"]); //ADD THIS BEFORE THE DEFAULT ERROR HANDLER.
// app.use('/api/movies',authenticate,  moviesRouter);
app.use('/api/actors', _actors["default"]);
app.use('/api/reviews', _reviews["default"]);
app.use('/api/genres', _genres["default"]);
app.use(_errHandler["default"]);
var server = app.listen(port, function () {
  console.info("Server running at ".concat(port));
});
module.exports = server;