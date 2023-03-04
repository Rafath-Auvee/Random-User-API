const express = require("express");
const router = express.Router();

const userController = require("../../controllers/users.controller.js");

router.route("/all").get(userController.getAllUsers);


module.exports = router;