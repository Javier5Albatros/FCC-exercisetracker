const User = require("../models/User");
const Log = require("../models/Log");

const getLogs = async (req, res) => {
  const user = req.user;
  await User.populate(user, "log");
  const log = new Log({ user, count: user.log.length });
  return res.json(log);
};

module.exports = { getLogs };
