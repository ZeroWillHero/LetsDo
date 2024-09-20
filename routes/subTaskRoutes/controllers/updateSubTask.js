const SubTask = require('../../../models/SubTask');

const updateSubTask = async (req, res) => {
    const { id } = req.params;
    const { title, status } = req.body;

    try {
        const subtask = await SubTask.findOne({ _id: id });
        if (!subtask) {
            res.status(404).json({ message: "Subtask not found" });
        }

        subtask.title = title;
        subtask.status = status;

        await subtask.save();
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports = updateSubTask;