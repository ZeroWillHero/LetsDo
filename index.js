const express = require('express');

// app 
const app = express();

const userRoutes = require('./routes/userRoutes/user.routes');
const toDoRoutes = require('./routes/todoRoutes/toDo.routes');
const subTaskRoutes = require('./routes/subTaskRoutes/subTask.routes')
// Connect to the database 
require('./Database/Connection');

// middleware 
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use((req,res,next) => {
    console.log('Middleware');
    console.log(req.body,":)");
    console.log(req.url,":)");

    next();
})

// Routes 
app.use('/apiV1/user', userRoutes);
app.use('/apiV1/todo', toDoRoutes);
app.use('/apiV1/subtask', subTaskRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})