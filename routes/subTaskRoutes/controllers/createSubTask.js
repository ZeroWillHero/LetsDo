const SubTask = require('../../../models/SubTask');
const User = require('../../../models/User');
const Todo = require('../../../models/ToDos');

const createSubTask = async (req,res) => {
 const {title,user,todo} = req.body;

 // cretae a sub task 
 try {
    const subTask = new SubTask({
        title,
        user,
        todo
    })

    await subTask.save();
    res.status(201).json({message : 'Sub Task created successfully'});
 }catch(err){
        res.status(500).json({message : err});
 }
}

module.exports = createSubTask;