const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  const db = await mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected to db!");
      }
    }
  );
};

module.exports = connect;
