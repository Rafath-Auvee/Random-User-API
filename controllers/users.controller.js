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

module.exports.getOneUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const user = users.find((u) => u.id === id);
    console.log(id);
    console.log(user);
    if (!user) {
      return res.status(404).send("User not found");
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(404).send(`Something Went Worng to Get One User Data!`);
  }
};
