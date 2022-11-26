// deleteTodosController
const Todo = require("../../model/TodoModel")

exports.deleteTodosController = async (req, res) => {
    try {

        const todo = await Todo.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: true,
            message: "Todo has been deleted",
            todo
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}