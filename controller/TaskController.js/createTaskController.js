// createTaskController
const Todo = require("../../model/TodoModel")

exports.createTaskController = async (req, res) => {
    try {
        const { task } = req.body;
        if (!task) return res.status(400).send("Task is not provided")

        const todoId = req.params.id
        const todo = await Todo.findById(todoId)
        if (!todo) return res.status(400).send('No todo exists')
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