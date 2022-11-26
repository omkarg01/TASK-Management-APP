// deleteTaskController
const Todo = require("../../model/TodoModel")

exports.deleteTaskController = async (req, res) => {
    try {
        s(400).send("Task is not provided")

        const todoId = req.params.id
        const todo = await Todo.findByIdAndDelete(todoId)

        res.status(200).json({
            status: true,
            message: "Task has been deleted",
            todo
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}