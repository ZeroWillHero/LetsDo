const User = require('../../../models/User');
const Todo = require('../../../models/ToDos');

const updateToDo = async (req,res) => {
    const {id} = req.params;
    const {title,description,status,dueDate,priority} = req.body;

    try {
        const todo = await Todo.findOne({_id : id});
        if(!todo){
            return res.status(404).json({message : 'Todo not found'});
        }else {
            todo.updateOne({
                title : title,
                description : description,
                status : status,
                dueDate : dueDate,
                priority : priority
            })
        }
    }catch(err){
        res.status(500).json({message : err});
    }
}

module.exports = updateToDo;