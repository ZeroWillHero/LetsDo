const Todo = require('./../../../models/ToDos');
const User = require('./../../../models/User');

const createToDo = async (req,res) => {
    try {
        const {title,description,dueDate,priority,id} = req.body;

        const user = await User.findOne({_id : id});

        if(!user) {
            return res.status(404).json({
                message : 'User not found'
            })
        }
        
        const todo = new Todo({
            title,
            description,
            dueDate,
            priority,
            user : id
        })

        await todo.save();
        res.status(201).json({
            message : 'Todo created successfully',
            todo,
            user : user
        });

    }catch(err) {
        res.status(400).json({
            message : err
        })
    }
}

module.exports = createToDo;