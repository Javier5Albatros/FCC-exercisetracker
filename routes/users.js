const express = require("express");
const { check } = require("express-validator");
const errorHandler = require("../middlewares/errorHandler");
const { saveUser, getUsers } = require("../controllers/users");
const { saveExerciseByUserId } = require("../controllers/exercises");
const { getLogs } = require("../controllers/logs");
const checkExistingUser = require("../middlewares/checkExistingUser");

const router = express.Router();

router
  .route("/")
  .post([check("username").notEmpty(), errorHandler], saveUser)
  .get(getUsers);

router.use(
  "/:_id/exercises",
  [
    check("_id").isMongoId(),
    check("description").notEmpty(),
    check("duration").isNumeric().notEmpty(),
    errorHandler,
    checkExistingUser,
  ],
  saveExerciseByUserId
);

router.use(
  "/:_id/logs",
  [check("_id").isMongoId(), errorHandler, checkExistingUser],
  getLogs
);

module.exports = router;
