// getTodosController

const Todo = require("../../model/TodoModel")

exports.getTodosController = async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.user._id })
        console.log(req.user)

        res.status(200).json({
            status: true,
            message: "Here are all todos",
            todos
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}