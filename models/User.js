const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exercise" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
