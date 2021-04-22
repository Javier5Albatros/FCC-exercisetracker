const getLogs = async (req, res) => {
    const user = req.user;
    return res.json(await user.populate("logs"));
};

module.exports = { getLogs };
