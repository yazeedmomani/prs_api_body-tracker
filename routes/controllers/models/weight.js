const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  date: {
    type: Date,
    requied: true,
  },
  weight: {
    type: Number,
    required: true,
  },
});

const Weight = mongoose.model("Weight", schema);

module.exports = Weight;
