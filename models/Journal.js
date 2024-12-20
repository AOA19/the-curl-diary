const mongoose = require("mongoose");

const JournalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  entry: {
    type: String,
    required: true,
  },
  createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
});


module.exports = mongoose.model("Journal", JournalSchema);