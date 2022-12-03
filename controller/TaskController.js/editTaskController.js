const Todo = require("../../model/TodoModel")

exports.editTaskController = async (req, res) => {
    try {
        const { key, task } = req.body;

        const todo = await Todo.findById(req.params.id);

        if (todo.tasks.length === 0) return new Error('No tasks exists')
        todo.tasks[key] = task;
        
        const updatedTask = await todo.save()

        res.status(200).json({
            status: true,
            message: "Todo has been updated",
            updatedTask
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}