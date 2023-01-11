const jwt = require("jsonwebtoken");


 const verifyAuth = (req, res, next) => {
    try {
      const token = req.header("Authorization");
      console.log(token)
      if (!token) {
        return res.status(403).json({
          message: "not Authenticated",
        });
      }

      const verify = verifyToken(token);
      if (verify.message) {
     return res.status(403).json({
          message: verify.message,
          status: "fail",
        });
      }
      console.log(verify);
      req.decoded = verify;
      next();
    } catch (err) {
      res.status(400).json({
        status: "fail",
        messages: err.message,
      })
    }
  };
 
 
  const verifyToken = (token) => {

    try {
     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
   return decoded
    } catch(err) {
         return err
     }
    }


module.exports = {verifyAuth}

// const verifyToken = (token) => {

//     try {
//      const decoded = jwt.verify(token, process.env.JWT_SECRET);
//      console.log(decoded);
//      return decoded
//     } catch(err) {
//         return err
     
 

