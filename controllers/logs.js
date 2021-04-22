const User = require("../models/User");

const getLogs = async (req, res) => {
    const user = req.user;
    await User.populate(user, "logs")
    
    return res.json(user);
};

module.exports = { getLogs };
