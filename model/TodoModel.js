const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: String,
    tasks: [String],
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' }
}, {
    timestamps: true
})

module.exports = mongoose.model("Todo", TodoSchema)