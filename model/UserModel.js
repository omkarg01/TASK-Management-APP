const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        require: [true, "Name is Required"],
        trim: true,
        maxlength: [25, "Name must be 20 Ch Long"],
    },
    email: {
        type: String,
        require: [true, "Email is Required"],
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,

});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

module.exports = mongoose.model("User", userSchema);
