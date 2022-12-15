

const {findUserByEmail} = require("../services");

module.exports = {
    checkIfUserExists: async (req, res, next) => {
        try {
            let { email } = req.body;
            const existingEmail = await findUserByEmail(email);
            if (existingEmail.length > 0) {
              return res.status(400).json({
                status: "Failed",
                message: "Email already exists",
              });
            }
            next();
        } catch (err) {
            return res.status(400).json({
                status: "Failed",
                message: err.message,
              });
        }
    },

//     checkIfUserWithEmailExist: async(req, res, next) => {
//         try {
//              let { email } = req.body;
//     const student = await getByEmail(email);
//     if (student.length < 1) {
//       return res.status(404).json({
//         status: "Failed",
//         message: "No user with email",
//       });
//     }
//     next();
// } catch (error) {
//     return res.status(500).json({
//       status: "Failed",
//       message: error.message,
//     });
//   }
// }
}
