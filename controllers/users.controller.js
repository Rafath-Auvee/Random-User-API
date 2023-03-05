const users = require("../random.json");
const fs = require("fs");

function saveUsersData(users) {
  const jsonData = JSON.stringify(users, null, 2);

  fs.writeFile("/random.json", jsonData, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Users data updated successfully");
    }
  });
}

module.exports.getAllUsers = async (req, res, next) => {
  try {
    // console.log(req.body);
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

module.exports.saveUser = async (req, res, next) => {
  try {
    const { id, gender, name, contact, address, photoUrl } = req.body;
    if (!id || !gender || !name || !contact || !address || !photoUrl) {
      return res.status(400).send("Missing required properties");
    }
    const newUser = {
      id,
      gender,
      name,
      contact,
      address,
      photoUrl,
    };
    users.push(newUser);
    fs.appendFileSync("./random.json", JSON.stringify(users, null, 2) + "\n", {
      flag: "w",
    });
    res.json(newUser);
  } catch (err) {
    res.status(404).send(`Something Went Worng to Save User!`);
  }
};

module.exports.updateOneUser = async (req, res, next) => {
  try {
    const { id, gender, name, contact, address, photoUrl } = req.body;

    console.log(req.body);

    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      return res.status(404).send("User not found");
    }

    users[userIndex].gender = gender;
    users[userIndex].name = name;
    users[userIndex].contact = contact;
    users[userIndex].address = address;
    users[userIndex].photoUrl = photoUrl;

    fs.appendFileSync("./random.json", JSON.stringify(users, null, 2) + "\n", {
      flag: "w",
    });

    res.json(users[userIndex]);
  } catch (err) {
    res.status(404).send(`Something Went Worng to Update One User!`);
  }
};

module.exports.deleteOneUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      return res.status(404).send("User not found");
    }

    const deletedUser = users.splice(userIndex, 1)[0];

    fs.writeFileSync("./random.json", JSON.stringify(users, null, 2) + "\n", {
      flag: "w",
    });

    res.json(deletedUser);
  } catch (err) {
    res.status(404).send(`Something Went Worng to Delete One User!`);
  }
};

module.exports.bulkUpdate = async (req, res, next) => {
  try {
    const { ids } = req.query;
    const userData = req.body;

    for (const id of ids) {
      const userIndex = users.findIndex((u) => u.id === parseInt(id));
      if (userIndex === -1) {
        return res.status(404).send(`User with id ${id} not found`);
      }
    }

    for (let i = 0; i < userData.length; i++) {
      const user = users.find((u) => u.id === userData[i].id);
      if (user && ids.includes(userData[i].id.toString())) {
        // Update the user information based on the data provided in the request body
        user.gender = userData[i].gender || user.gender;
        user.name = userData[i].name || user.name;
        user.contact = userData[i].contact || user.contact;
        user.address = userData[i].address || user.address;
        user.photoUrl = userData[i].photoUrl || user.photoUrl;
      }
    }

    fs.writeFileSync("./random.json", JSON.stringify(users, null, 2));
    res.send("Users updated successfully");
  } catch (err) {
    res.status(404).send(`Something Went Worng to bulk update!`);
  }
};
