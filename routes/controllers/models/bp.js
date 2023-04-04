const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
    enum: ["Morning", "Evening"],
  },
  high: {
    type: Number,
    required: true,
  },
  low: {
    type: Number,
    required: true,
  },
});

const BP = mongoose.model("BP", schema);

module.exports = BP;
