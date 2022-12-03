// createTodosController
const Todo = require("../../model/TodoModel")

exports.createTodosController = async (req, res) => {
    try {
        
        const { title } = req.body;
        if (!title) return new Error("Title is not provided")
        
        const todo = await Todo.create({
            user: req.user._id,
            title
        })

        res.status(200).json({
            status: true,
            message: "Todo has created",
            todo
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}