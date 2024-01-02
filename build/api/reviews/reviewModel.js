"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = _mongoose["default"].Schema;
var ReviewSchema = new Schema({
  movieId: {
    type: Number,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  created_at: {
    type: String,
    required: true
  },
  updated_at: {
    type: String,
    required: true
  }
});
ReviewSchema.statics.findByMovieId = function (movieId) {
  return this.findOne({
    movieId: movieId
  });
};
var _default = exports["default"] = _mongoose["default"].model('Review', ReviewSchema);