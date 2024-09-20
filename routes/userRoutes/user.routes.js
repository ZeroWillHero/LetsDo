const express = require('express');
const router = express.Router();

const register = require('./controllers/register');
const logIn = require('./controllers/logIn');
const getUser = require('./controllers/getUser').getUser;
const getUsers = require('./controllers/getUser').getUsers;
const updateUser = require('./controllers/updateUser');
const deleteUser = require('./controllers/deleteUser');


router.post('/register', register);
router.post('/login',logIn);
router.get('/:id', getUser);
router.get('/', getUsers);
router.patch('/:id',updateUser);
router.delete('/:id',deleteUser);

module.exports = router;
