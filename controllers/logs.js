const moment = require("moment");

const User = require("../models/User");
const Log = require("../models/Log");

const getLogs = async (req, res) => {
  const user = new User(req.user);
  let { from, to, limit } = req.query;
  from = moment(from, "YYYY-MM-DD").isValid()
    ? moment(from, "YYYY-MM-DD").toDate()
    : new Date("1990-1-1");
  to = moment(to, "YYYY-MM-DD").isValid()
    ? moment(to, "YYYY-MM-DD").toDate()
    : moment().add(1000000000000).toDate();

  await User.populate(user, {
    path: "log",
    perDocumentLimit: limit || 0,
    match: {
      date: {
        $gte: from,
        $lte: to
      },
    },
  });

  return res.json({
    _id: user.id,
    username: user.username,
    count: user.log.length,
    log: user.log,
  });
};

module.exports = { getLogs };
