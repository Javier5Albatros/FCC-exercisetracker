const User = require("../models/User");

const checkExistingUser = async (req, res, next) => {
  const { _id } = req.params;
  const user = await User.findById(_id);
  console.log(_id)
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(400).json({ error: "Invalid user id" });
  }
};

module.exports = checkExistingUser;
