const Todo = require('../../../models/ToDos');
const User = require('../../../models/User');

const getTodo = async (req,res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message : 'User not found'});
        }
        const todos = await Todo.find({user : id});
        res.status(200).json({todos});
    }catch(err){
        res.status(500).json({message : err});
    }
}

const getTodos = async (req,res) => {
    const user = await User.find();
    res.status(200).json({user});
}

module.exports ={ getTodo,getTodos };