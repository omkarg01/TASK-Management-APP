const express = require('express');
const { createTaskController, deleteTaskController } = require('../controller/TaskController.js');
const { editTaskController } = require('../controller/TaskController.js/editTaskController.js');
const { getTodosController, createTodosController, editTodosController, deleteTodosController } = require('../controller/TodoController');
const { protect } = require('../middleware/authMiddleware.js');
const router = express.Router();

router.get("/getTodo",protect, getTodosController)
router.post("/createTodo", protect, createTodosController)
router.put("/editTodo/:id", protect, editTodosController)
router.delete("/deleteTodo/:id",protect, deleteTodosController)

router.post("/createTask/:id",protect, createTaskController)
router.delete("/deleteTask/:id",protect, deleteTaskController)
router.put("/editTask/:id",protect, editTaskController)

module.exports = router;

