const express = require("express");
const users = require("../controller/user");
const {checkIfUserExists} = require("../middlewares/index");
const router = express.Router();
const {loginValidator, signupValidator, } = require("../../validations/userValidation")
const { CheckIfUserWithEmailExist} = require("../middlewares/Authorization-middleware");
 const { verifyAuth } =  require('..//middlewares/verifyTokenMiddle')

router.get("/",users.helloWorld);

router.get(
 "/users",
  verifyAuth, 
   users.fetchUsers
);

router.get(
    "/users/:id",
    verifyAuth, 
    users.getOneUser
    );

router.post(
    "/users",
     verifyAuth,
      signupValidator,
       checkIfUserExists,
        users.registerUsers
        );


router.post(
    "/users/login",
    verifyAuth, loginValidator, 
     CheckIfUserWithEmailExist, 
     users.login
     );


router.patch(
    "/users/:id",
      verifyAuth, 
       users.updateUsers
     );

router.delete(
     "/users/:id",
       verifyAuth, 
         users.deleteUsers
    );

module.exports = router;
