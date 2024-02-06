const mongoose = require("mongoose");

// MovieSchema
const showSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: Date,
  },
  time: {
    required: true,
    type: String,
  },
  movie: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "movies",
  },
  ticketPrice: {
    required: true,
    type: Number,
  },
  totalSeats: {
    required: true,
    type: Number,
  },

  // bookedSeats: {
  //   required: true,
  //   type: String,
  // },

  theatre: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "theatres",
  },
});

module.exports = mongoose.model("shows", showSchema);
