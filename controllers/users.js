const User = require("../models/User");

const saveUser = async (req, res) => {
  const { username } = req.body;
  const user = new User({ username });
  const savedUser = await user.save();
  res.json( user );
};

const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

module.exports = {
  saveUser,
  getUsers,
};
