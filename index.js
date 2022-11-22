const express = require("express");
const todoRouter = require('./src/routes/user_route')
const dotenv = require("dotenv");
const port = process.env.PORT


dotenv.config()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false , limit: '50mb'}));
app.use(todoRouter);


 app.listen(port, function(){
    console.log(`application running on port ${port}`)
});
 
