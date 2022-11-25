const express = require('express');
const { getTodosController } = require('../controller/TodoController/getTodosController');
const router = express.Router();

router.get("/", getTodosController)

module.exports = router;

