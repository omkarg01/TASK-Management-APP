const express = require('express');
const { getTodosController, createTodosController, editTodosController, deleteTodosController } = require('../controller/TodoController');
const router = express.Router();

router.get("/getTodo", getTodosController)
router.post("/createTodo", createTodosController)
router.put("/editTodo/:id", editTodosController)
router.delete("/deleteTodo/:id", deleteTodosController)

module.exports = router;

