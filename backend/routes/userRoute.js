const express = require("express");
const {
  getAllUsers,
  createUser,
  createEvent,
  listEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
  getEventDetails,
} = require("../controllers/userController");

const router = express.Router();

router.route("/user").get(getAllUsers);
router.route("/event").get(getAllEvents);
router.route("/user/new").post(createUser);
router.route("/event").post(createEvent);
router.route("/event/:id").get(getEventDetails);
router.route("/listEventsForUser/:id").get(listEvent);
router.route("/event/:id").put(updateEvent).delete(deleteEvent);

module.exports = router;
