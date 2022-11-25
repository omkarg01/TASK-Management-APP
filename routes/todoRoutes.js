const express = require('express');
const { createTodosController } = require('../controller/TodoController/createTodoController');
const router = express.Router();

router.post("/createTodo", createTodosController)

module.exports = router;

