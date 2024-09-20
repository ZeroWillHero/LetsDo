const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`${process.env.MONGO_URL}LetsDo`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Database connected');
})
.catch((err) => {
    console.log('Error connecting to database');
    console.log(err);
})

