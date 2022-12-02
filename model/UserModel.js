const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    require: [true, "Name is Required"],
    trim: true,
    maxlength: [25, "Name must be 25 Ch Long"],
  },
  email: {
    type: String,
    require: [true, "Email is Required"],
    unique: true,
  },
});
module.exports = mongoose.model("User", userSchema);
