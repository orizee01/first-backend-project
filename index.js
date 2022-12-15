const express = require("express");
const dotenv = require("dotenv");
dotenv.config()
const usersRouter = require('./src/routes/user_route')
const port = process.env.PORT || 5000;
// const todoRouter = require('./src/routes/todo_route')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false , limit: '50mb'}));
app.use(usersRouter);
// app.use(todoRouter);


 module.exports = app.listen(port, function(){
    console.log(`application running on port ${port}`)
});
 
