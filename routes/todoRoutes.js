const express = require('express');
const { createTaskController } = require('../controller/TaskController.js');
const { editTaskController } = require('../controller/TaskController.js/editTaskController.js');
const { getTodosController, createTodosController, editTodosController, deleteTodosController } = require('../controller/TodoController');
const { protect } = require('../middleware/authMiddleware.js');
const router = express.Router();

router.get("/getTodo", protect, getTodosController)
router.post("/createTodo", protect, createTodosController)
router.put("/editTodo/:id", protect, editTodosController)
router.delete("/deleteTodo/:id", protect, deleteTodosController)

router.post("/createTask/:id", protect, createTaskController)
router.put("/editTask/:id", protect, editTaskController)

module.exports = router;

