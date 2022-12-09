const db = require("../config/config");
const queries = require("../queries/todo_query");

const createTodo = async (req, res) => {
  try {
    let { title } = req.body;
    const user = req.decoded;
    console.log(user.id)
    const toDo = await db.any(queries.toDo, [title, user.id]);
    return res.status(200).json({
      status: "success",
      message: "todo Created",
      data: toDo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: "fail",
    });
  }
};

const getTodo = async (req, res) => {
  try {
    const toDo = await db.any(queries.getTodo);
    return res.status(200).json({
      status: "success",
      message: "Todo gotten",
      data: toDo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: "fail",
    });
  }
};

const updateTodo = async (req, res) => {
  
  let { title } = req.body;
  try {
    const toDo = await db.any(queries.updateTodo, [title, user.id]);
    return res.status(200).json({
      status: "success",
      message: "Todo updated",
      data: toDo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: "fail",
    });
  }
};

const getOneTodo = async (req, res) => {
  
  try {
    const toDo = await db.any(queries.getOneTodo, [user.id]);
    return res.status(200).json({
      status: "Success",
      message: "Accessment Retrieved",
      data: toDo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: "fail",
    });
  }
};

const deleteTodo = async (req, res) => {
  let user = req.decoded;
  console.log(user)
  try {
    db.none(queries.deleteTodo, [user.id]);
    return res.status(200).json({
      status: "Success",
      message: "Batch Removed",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: "fail",
    });
  }
};

module.exports = {
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
  getOneTodo,
};
