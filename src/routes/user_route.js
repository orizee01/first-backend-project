const express = require('express');
const users = require('../controller/user');
const { helloWorld, hello } = require('../middlewares');
const router = express.Router();

router.get(
    '/',
    helloWorld,
    hello,
    users.helloWorld,
)
router.get('/users', users.fetchUsers);
router.get('/users/:id', users.getOneUser);
router.post('/users', users.registerUsers);
router.post('/users/login', users.login);
router.patch('/users/:id', users.updateUsers);
router.delete('/users/:id', users.deleteUsers);

module.exports = router;


