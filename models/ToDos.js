const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const toDoSchema = new Schema ({
    title : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    status : {
        type : String,
        required : true,
        default : 'pending'
    },

    dueDate : {
        type : Date,
        required : true
    },

    priority : {
        type : String,
        required : true,
        default : 'low',
        enum : ['low','medium','high']
    },

    user : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
},
    { timestamps : true }
)



const Todo = mongoose.model('Todo', toDoSchema);

module.exports = Todo;

