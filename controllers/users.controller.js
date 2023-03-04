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
    // console.log(id);
    // console.log(user);
    console.log(req.params);
    if (!user) {
      return res.status(404).send("User not found");
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(404).send(`Something Went Worng to Get One User Data!`);
  }
};

module.exports.getRandomUser = async (req, res, next) => {
  try {
    const randomIndex = Math.floor(Math.random() * users.length);
    const randomUser = users[randomIndex];
    console.log(req.params);
    console.log(users.length);
    console.log(randomIndex);
    console.log(randomUser);
    res.status(200).json(randomUser);
  } catch (err) {
    res.status(404).send(`Something Went Worng to Get Random User!`);
  }
};
