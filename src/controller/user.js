
const db = require("../config/config");
const queries = require("../queries/user_query");
const { generateToken } = require("../services/generateToken");

const fetchUsers = async (req, res) => {
  try {
    const students = await db.any(queries.getUsers);
    return res.status(200).json({
      status: "Success",
      message: "Users returned",
      data: students,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const registerUsers = async (req, res) => {
  try {
    let { firstname, lastname, email } = req.body;
    const data = await db.any(queries.registerUsers, [
      firstname,
      lastname,
      email,
    ]);
    return res.status(200).json({
      status: "success",
      message: "users registered successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
};

const updateUsers = async (req, res) => {
  let { id } = req.params;
  let { firstname, lastname } = req.body;

  try {
    const student = await db.any(queries.updateUsers, [
      firstname,
      lastname,
      id,
    ]);
    return res.status(200).json({
      status: "Success",
      message: "Student Updated",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
};

const deleteUsers = async (req, res) => {
  
  let { id } = req.params;
  try {
    await db.none(queries.deleteUser, [id]);
    return res.status(200).json({
      status: "Success",
      message: "Student Removed",
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const getOneUser = async (req, res) => {
  let { id } = req.params;
  try {
    const student = await db.any(queries.getOneUser, [id]);

    return res.status(200).json({
      status: "Success",
      message: "Student Retrieved",
      data: student,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const login = async (req, res) => {
    
 try{
      const [student] = req.user
      const token = await generateToken(student)
    return res.status(200).json({
      status: "Success",
      message: "login successful",
      data: {
        ...student,
        token
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
};

const helloWorld = async (req, res) => {
  try {
    res.status(200).json({
      status: "Success",
      message: "Hello World",
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
};

module.exports = {
  fetchUsers,
  registerUsers,
  updateUsers,
  deleteUsers,
  getOneUser,
  login,
  helloWorld,
};
