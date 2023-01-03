const express = require("express");
const dotenv = require("dotenv");
dotenv.config()
const usersRouter = require('./src/routes/user_route')
const todoRouter = require('./src/routes/todo_route');
const port = process.env.PORT || 5000;
const cors = require('cors');
const app = express();
const morgan = require('morgan')
const corsOptions = {
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false , limit: '50mb'}));
app.use(morgan('combined'))
app.use(usersRouter);
app.use(todoRouter);


 module.exports = app.listen(port, function(){
    console.log(`application running on port ${port}`)
});
 
