const express = require('express');
const todos = require('../controller/todo');
const router = express.Router();
const { todoValidator } = require('../../validations/todoValidation')
const { verifyAuth } = require('../middlewares/verifyTokenMiddle')

 router.post('/todo',verifyAuth,todoValidator,todos.createTodo);               
 router.get('/todo',todos.getTodo);                            
 router.patch('/todo',verifyAuth, todos.updateTodo);
 router.get('/todo',verifyAuth,todos.getOneTodo);              
 router.delete('/todo',verifyAuth,todos.deleteTodo); 
       
 module.exports = router;