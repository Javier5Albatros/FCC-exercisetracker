const Exercise = require("../models/Exercise");

const saveExerciseByUserId = async (req, res) => {
  const { description, duration, date } = req.body;
  const user = req.user;
  const exercise = new Exercise({
    description,
    duration,
    date: date ? date : new Date(),
  });
  await exercise.save();

  user.log.push(exercise);
  await user.save();

  return res.json({
    _id: user.id,
    username: user.username,
    date: exercise.date.toDateString(),
    duration: Number(exercise.duration),
    description,
  });
};

module.exports = {
  saveExerciseByUserId,
};
