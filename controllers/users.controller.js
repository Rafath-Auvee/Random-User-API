const users = require("../public/random.json");

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || users.length;
    const usersSubset = users.slice(0, limit);
    res.status(200).json(usersSubset);
  } catch (err) {
    res.status(404).send("Something Went Worng to Get All User Data!");
  }
};

