const User = require("../models/User");

const getLogs = async (req, res) => {
    let user = req.user;
    await User.populate(user, "log")
    const count = user.log.length;
    user["count"] = count
    return res.json(user);
};

module.exports = { getLogs };
