const TodoModel = require("../../model/TodoModel")
const UserModel = require("../../model/UserModel")

exports.getUserProfile = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user._id)
        const todo = await TodoModel.find({ user: req.user._id })

        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                todo
            })
        } else {
            res.status(404)
            throw new Error('User not found')
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}