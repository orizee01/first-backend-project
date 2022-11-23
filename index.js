const express = require("express");
const dotenv = require("dotenv");
dotenv.config()
const todoRouter = require('./src/routes/user_route')
const port = process.env.PORT


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false , limit: '50mb'}));
app.use(todoRouter);


app.listen(port, function(){
    console.log(`application running on port ${port}`)
});
 
