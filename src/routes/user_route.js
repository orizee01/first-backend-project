const express = require("express");
const users = require("../controller/user");
const {checkIfUserExists,checkIfUserWithEmailExist}= require("../middlewares");
const router = express.Router();
const {loginValidator, signupValidator, } = require("../../validations/userValidation")
const { CheckIfUserExist} = require(".././middlewares/Authorization-middleware");
 

router.get("/",users.helloWorld);
router.get("/users", users.fetchUsers);
router.get("/users/:id", users.getOneUser);
router.post("/users", signupValidator, checkIfUserExists, users.registerUsers);
router.post("/users/login",loginValidator,  CheckIfUserExist, users.login);
router.patch("/users/:id", users.updateUsers);
router.delete("/users/:id", users.deleteUsers);

module.exports = router;
