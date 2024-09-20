const express = require('express');
const router = express.Router();

const createToDo = require('./controllers/creatTodo');
const getTodo = require('./controllers/getTodo').getTodo;
const getTodos = require('./controllers/getTodo').getTodos;
const updateTodo = require('./controllers/updateToDo');
const deleteTodo = require('./controllers/deleteToDo');

router.post('/create',createToDo);
router.get('/:id',getTodo);
router.get('/',getTodos);
router.patch('/update/:id',updateTodo);
router.delete('/delete/:id',deleteTodo);


module.exports = router;