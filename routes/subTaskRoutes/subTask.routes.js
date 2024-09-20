const express = require('express');
const router = express.Router();

const createSubTask = require('./controllers/createSubTask');
const getSubTask = require('./controllers/getSubtasks').getSubtask;
const getSubTasks = require('./controllers/getSubtasks').getSubtasks;
const updateSubTask = require('./controllers/updateSubTask');
const deleteSubTask = require('./controllers/deleteSubTask');

router.post('/create',createSubTask);
router.get('/:id',getSubTask);
router.get('/',getSubTasks);
router.patch('/:id',updateSubTask);
router.delete('/:id',deleteSubTask);



module.exports = router;