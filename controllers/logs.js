const User = require("../models/User");
const Log = require("../models/Log");

const getLogs = async (req, res) => {
  const user = new User(req.user);
  const { from, to, limit } = req.query;

  await User.populate(user, {
    path: "log",
    perDocumentLimit: limit || 0,
    match: {
      date: [{ $gte: from || 0 }, { $lte: to || 0 }],
    },
  });
  const log = new Log({ user, count: user.log.length });
  return res.json({
    _id: user.id,
    username: user.username,
    count: log.count,
    log: user.log,
  });
};

module.exports = { getLogs };
