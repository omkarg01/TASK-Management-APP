const express = require('express');
const { getTodosController, createTodosController, editTodosController } = require('../controller/TodoController');
const router = express.Router();

router.get("/getTodo", getTodosController)
router.post("/createTodo", createTodosController)
router.put("/editTodo/:id", editTodosController)

module.exports = router;

