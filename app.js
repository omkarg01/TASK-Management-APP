require("dotenv").config()
const connect = require("./config/db")
const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const todoRoutes = require("./routes/todoRoutes")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

connect()
app.use("/", todoRoutes)

module.exports = app;
