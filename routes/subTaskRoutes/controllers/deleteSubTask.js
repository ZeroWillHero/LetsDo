const SubTask = require('./../../../models/SubTask');

const deleteSubTask = async (req, res) => {
    const { id } = req.params;

    try {
        const subTask = await SubTask.findOne({ _id: id });
        if (!subTask) {
            res.status(404).json({ message: "Subtask not found" });
        }

        await subTask.remove();
        res.status(200).json({ message: "Subtask deleted successfully" });

    }catch(err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports = deleteSubTask;