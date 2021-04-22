const express = require("express");
const { check } = require("express-validator");
const errorHandler = require("../middlewares/errorHandler");
const { saveUser, getUsers } = require("../controllers/users");

const router = express.Router();

router
  .route("/")
  .post([check("username").notEmpty(), errorHandler], saveUser)
  .get(getUsers);

module.exports = router;
