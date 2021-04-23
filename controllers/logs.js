const User = require("../models/User");
const Log = require("../models/Log");

const getLogs = async (req, res) => {
  const user = req.user;
  await User.populate(user, "log");
  const log = new Log({ user, count: user.log.length });
  return res.json({
    _id: user.id,
    username: user.username,
    count: log.count,
    log: user.log,
  });
};

module.exports = { getLogs };
