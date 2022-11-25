require("dotenv").config()
const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const todoRoutes = require("./routes/todoRoutes")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", todoRoutes)

module.exports = app;
