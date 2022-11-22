const jwt = require("jsonwebtoken");
const db = require('../config/config');
const queries = require('../queries/user_query');

const fetchUsers = async (req, res) => {
    try {
        const students = await db.any(queries.getUsers)
        return res.status(200).json({
            status: 'Success',
            message: 'Users returned',
            data: students
        })
    } catch (err) {
        console.log(err)
        return err;
    }
}

const registerUsers = async (req, res) => {
    let { firstname, lastname, email, } = req.body;
    console.log(req.body);
    try {
        const existingEmail = await db.any(queries.findByEmail, [email]);
       if (existingEmail.length > 0) {
             return res.status(400).json({
                 status: 'Failed',
                message: 'Email already exists'
            })
        }
        const data = await db.any(queries.registerUsers, [firstname, lastname, email]);
        return res.status(200).json({
            status: 'success',
            message: 'users registered successfully',
            data,
       })
       
    } catch (err) {
        console.log(err)
        return err
     }
}

const updateUsers = async (req, res) => {
   let { id } = req.params;
   let { firstname, lastname} = req.body;
    
    try {
        const student = await db.any(queries.updateUsers, [firstname,  lastname, id])
        return res.status(200).json({
            status: 'Success',
             message: 'Student Updated',
            data: student
         })
     } catch (err) {
         if (err) {
            console.log(err)
          return err;
        }
     }
 }

const deleteUsers = async (req, res) => {
    let { id } = req.params;
    try {
        await db.none(queries.deleteUser, [id])
        return res.status(200).json({
            status: 'Success',
            message: 'Student Removed',
        })
    } catch (err) {
        console.log(err)
        return err;
    }
}

const getOneUser = async (req, res) => {
    let { id } = req.params;
    try {
        const student = await db.any(queries.getOneUser, [id])
    
        return res.status(200).json({
            status: 'Success',
            message: 'Student Retrieved',
            data: student
        })
    } catch (err) {
        console.log(err)
        return err;
    }
}

const login = async (req, res) => {
    let { email} = req.body;
    try {
        const student = await db.any(queries.getUserByEmail, [email]);
        console.log(student)
        if (student.length < 1) {
            return res.status(404).json({
                status: 'Failed',
                message: 'No user with email'
            })
        }

      
    
             const sessionToken = jwt.sign(
          {
                student_id: student.id,
                email: student.email,
                name: student.name,
            },
            process.env.JWT_SECRET_KEY
        );
    
        return res.status(200).json({
            status: 'Success',
            message: "login successful",
            data: {
                student,
                token: sessionToken
            }
        })
        

}
 catch (err) {
        console.log(err)
        return err;

 }
}
 module.exports = {
  fetchUsers,
  registerUsers,
   updateUsers,
  deleteUsers,
  getOneUser,
   login
}