const mongoose = require("mongoose");

// MovieSchema
const TheatreSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },

  isActive: {
    default: false,
    type: Boolean,
  },
});

module.exports = mongoose.model("theatre", TheatreSchema);
