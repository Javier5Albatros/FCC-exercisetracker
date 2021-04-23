const mongoose = require("mongoose");

const logSchema = mongoose.Schema(
  {
    count: {
      type: Number,
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { versionKey: false }
);

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
