const express = require("express");
const router = express.Router();

const userController = require("../../controllers/users.controller.js");

router.route("/random").get(userController.getRandomUser);
router.route("/all").get(userController.getAllUsers);
router.route("/save").post(userController.saveUser);
router.route("/one/:id").get(userController.getOneUser);
router.route("/update/:id").patch(userController.updateOneUser);
router.route("/delete/:id").delete(userController.deleteOneUser);

module.exports = router;
