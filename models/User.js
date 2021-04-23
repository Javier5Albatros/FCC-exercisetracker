const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    log: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exercise" }],
  },
  { versionKey: false }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
