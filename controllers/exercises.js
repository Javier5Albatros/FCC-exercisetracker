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

  user.exercises.push(exercise);
  await user.save();

  return res.json({ 
      _id: user.id,
      username: user.username,
      description,
      duration,
      date: exercise.date.toDateString()
  });
};


module.exports = {
  saveExerciseByUserId,
};
