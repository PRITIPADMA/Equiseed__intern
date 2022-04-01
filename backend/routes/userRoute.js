const express = require("express");
const { getAllUsers, createUser } = require("../controllers/userController");

const router = express.Router();

router.route("/user").get(getAllUsers);
router.route("/user/new").post(createUser);

module.exports = router;