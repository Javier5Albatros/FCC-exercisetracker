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

  user.logs.push(exercise);
  await user.save();

  return res.json({ 
      username: user.username,
      description,
      duration,
      _id,
      date: exercise.date.toDateString()
  });
};


module.exports = {
  saveExerciseByUserId,
};
