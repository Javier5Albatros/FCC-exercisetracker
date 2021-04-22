const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connect = require("./db/connect");
const router = require("./routes/index");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/api", router);

const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + port);
  connect();
});
