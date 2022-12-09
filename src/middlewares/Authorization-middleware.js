

const { getByEmail } = require("../services/index");
module.exports = {
  CheckIfUserExist: async (req, res, next) => {
    try {
      const { email } = req.body;
      const user = await getByEmail(email)
      console.log(user)  
      if (user.length < 1 ) {  
        return res.status(400).json({
          status: "fail",
          message: "invalid credentials",
        });
      }
      req.user = user;
      next();
    } catch (err) {
      res.status(400).json({
        status: "fail",
        data: null,
        message: err.message,
      });
    }
  },
};
