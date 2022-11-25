// createTodosController
const Todo = require("../../model/TodoModel")

exports.createTodosController = async (req, res) => {
    try {
        const { title } = req.body;
        if (!title) return res.status(400).send("Title is not provided")

        const todo = await Todo.create({
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