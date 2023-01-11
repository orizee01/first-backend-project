

const { getByEmail } = require("../services/index");
module.exports = {
  CheckIfUserWithEmailExist: async (req, res, next) => {
    try {
      const { email } = req.body;
      const user = await getByEmail(email)
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
