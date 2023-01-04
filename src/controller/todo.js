const db = require("../config/config");
const queries = require("../queries/todo_query");

const createTodo = async (req, res) => {
  try {
    let { title } = req.body;
    const user = req.decoded;
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
  console.log('UserID', req.decoded);
  try {
    const toDo = await db.any(queries.getTodo, [req.decoded.id]);
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
   let { title } = req.body
  let { id } = req.params;
  try {
    const toDo = await db.any(queries.updateTodo, [title, id]);
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
    const todo = req.todo
    console.log(todo)
    return res.status(200).json({
      status: "Success",
      message: "todo Retrieved",
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: "fail",
    });
  }
};

const deleteTodo = async (req, res) => {

  let todo = req.todo;
  console.log(todo)
  try {
    db.none(queries.deleteTodo, [todo.id]);
    return res.status(200).json({
      status: "Success",
      message: "Todo Removed",
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
