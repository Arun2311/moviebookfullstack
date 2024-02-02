const mongoose = require("mongoose");

// MovieSchema
const MovieSchema = mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  duration: {
    required: true,
    type: String,
  },
  genre: {
    required: true,
    type: String,
  },

  language: {
    required: true,
    type: String,
  },
  releaseDate: {
    required: true,
    type: String,
  },
  poster: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("movies", MovieSchema);
