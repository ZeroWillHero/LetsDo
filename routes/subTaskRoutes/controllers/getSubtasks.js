const User = require('../../../models/User');
const SubTask = require('../../../models/SubTask');


const getSubtasks = async (req,res) => {
    const subtasks = await SubTask.find();
    res.status(200).json(subtasks);

}

const getSubtask = async (req,res) => {
    const {id} =req.params;

    try {
        const subtask = await SubTask.findOne({_id:id});
        if (!subtask) {
            res.status(404).json({message:"Subtask not found"});
        }

        res.status(200).json(subtask);
    }catch(err){
        res.status(404).json({message:err.message});
    }

}

module.exports = {getSubtasks,getSubtask};