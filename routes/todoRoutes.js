const express = require('express');
const { getTodosController, createTodosController } = require('../controller/TodoController');
const router = express.Router();

router.get("/getTodo", getTodosController)
router.post("/createTodo", createTodosController)

module.exports = router;

