const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();
const {
  addTask,
  deleteTask,
  getTasks,
  markStatus,
  updateTask,
} = require("../controllers/todoController");

router.get("/", auth, getTasks);

router.post("/", auth, addTask);

router.put("/:id", auth, updateTask);

router.patch("/:id", auth, markStatus);

router.delete("/:id", auth, deleteTask);

module.exports = router;
