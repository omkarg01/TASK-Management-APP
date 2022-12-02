// createTaskController
const Todo = require("../../model/TodoModel")

exports.createTaskController = async (req, res) => {
    try {
        const { task } = req.body;
        if (!task) return new Error("Task is not provided")

        const todoId = req.params.id
        const todo = await Todo.findById(todoId)
        if (!todo) return new Error('No todo exists')
        todo.tasks.push(task)
        await todo.save()

        res.status(200).json({
            status: true,
            message: "Task has been created",
            todo
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}