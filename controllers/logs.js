const moment = require("moment");

const User = require("../models/User");
const Log = require("../models/Log");

const getLogs = async (req, res) => {
  const user = new User(req.user);
  let { from, to, limit } = req.query;
  from = moment(from, "YYYY-MM-DD").isValid() ? moment(from, "YYYY-MM-DD") : 0;
  to = moment(to, "YYYY-MM-DD").isValid()
    ? moment(to, "YYYY-MM-DD")
    : moment().add(1000000000000);

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
