const express = require('express');
const todos = require('../controller/todo');
const router = express.Router();
const { todoValidator } = require('../../validations/todoValidation');
const { verifyAuth } = require('../middlewares/verifyTokenMiddle');
const { CheckIfTodoExist, CheckIfTodoBelongsToUser} = require('../middlewares/todo');


 router.post(
    '/todo',
    verifyAuth,
    todoValidator,
    todos.createTodo
);

 router.get('/todo',
   verifyAuth,
  todos.getTodo
  ); 

 router.patch(
    '/todo/:id', 
  verifyAuth, 
 CheckIfTodoExist,
  CheckIfTodoBelongsToUser,
  todos.updateTodo
 );

 router.get(
    '/todo/:id', 
  verifyAuth,
  CheckIfTodoExist,
  CheckIfTodoBelongsToUser,
  todos.getOneTodo

 ); 

 router.delete(
    '/todo/:id', 
   verifyAuth,
   CheckIfTodoExist,
    CheckIfTodoBelongsToUser,
   todos.deleteTodo
 ); 
       
 module.exports = router;