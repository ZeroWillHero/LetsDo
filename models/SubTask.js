const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const subTaskSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true,
        default : 'pending',
        enum : ['pending','completed']
    },

    user : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    
    },

    todo : {
        type : Schema.Types.ObjectId,
        ref : 'Todo'
    }
},
    { timestamps : true }
)

const SubTask = mongoose.model('SubTask',subTaskSchema);

module.exports = SubTask;