// editTodosController
const Todo = require("../../model/TodoModel")

exports.editTodosController = async (req, res) => {
    try {
        const { title } = req.body;
        if (!title) return new Error("Title is not provided")

        const todo = await Todo.findByIdAndUpdate(req.params.id, {
            title
        })

        res.status(200).json({
            status: true,
            message: "Todo has been updated",
            todo
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}