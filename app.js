require("dotenv").config()
const connect = require("./config/db")
const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const todoRoutes = require("./routes/todoRoutes")
const userRoutes = require("./routes/userRoutes")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

connect()
app.use("/", todoRoutes, userRoutes)

module.exports = app;
