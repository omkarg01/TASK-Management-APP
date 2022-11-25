const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: String,
    tasks: [String]
})

module.exports = mongoose.model("Todo", TodoSchema)