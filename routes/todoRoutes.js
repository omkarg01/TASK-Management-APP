const express = require('express');
const { createTaskController, deleteTaskController } = require('../controller/TaskController.js');
const { editTaskController } = require('../controller/TaskController.js/editTaskController.js');
const { getTodosController, createTodosController, editTodosController, deleteTodosController } = require('../controller/TodoController');
const router = express.Router();

router.get("/getTodo", getTodosController)
router.post("/createTodo", createTodosController)
router.put("/editTodo/:id", editTodosController)
router.delete("/deleteTodo/:id", deleteTodosController)

router.post("/createTask/:id", createTaskController)
router.delete("/deleteTask/:id", deleteTaskController)
router.put("/editTask/:id", editTaskController)

module.exports = router;

