const express = require("express");
const router = express.Router();
const limiter = require("../../middleware/limiter");
const userController = require("../../controllers/users.controller.js");

router.route("/random").get(limiter, userController.getRandomUser);
router.route("/all").get(limiter, userController.getAllUsers);
router.route("/save").post(limiter, userController.saveUser);
router.route("/one/:id").get(limiter, userController.getOneUser);
router.route("/update/:id").patch(limiter, userController.updateOneUser);
router.route("/bulk-update").patch(limiter, userController.bulkUpdate);
router.route("/delete/:id").delete(limiter, userController.deleteOneUser);

module.exports = router;
