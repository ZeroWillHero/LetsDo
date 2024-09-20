const User = require('../../../models/User');
const Todo = require('../../../models/ToDos');

const deleteToDo = async (req,res) => {
    const { id } = req.params;

    try {
        const todo = await Todo.findOneAndDelete({_id : id });
        if (!todo){
            return res.status(404).json({message : 'Todo not found'});
        }
    }catch(err){
        res.status(500).json({message : err});
    }
}

module.exports = deleteToDo;