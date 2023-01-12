const { getAlltodo } = require("../services/todoservice");


  const CheckIfTodoExist = async (req, res, next) => {
    try {
      const { id } = req.params;
      const todo = await getAlltodo(id);
      if (todo === null) {
        return res.status(403).json({
          status: "fail",
          message: "todo does not exist",
        });
      }
      req.todo = todo;

      next();
    } catch (err) {
      console.log(err.message, "chex");
      res.status(400).json({
        status: "fail",
        data: null,
        message: err.message,
      });
    }
  }

   const CheckIfTodoBelongsToUser = async (req, res, next) => {
    try {
      const userId = req.todo.users_id;
      const id = req.decoded.id;
      if (userId !== id) {
        return res.status(403).json({
          status: "fail",
          message: "todo does not Belong to the user",
        });
      }

      next();
    } catch (err) {
      res.status(400).json({
        status: "fail",
        data: null,
        message: err.message,
      });
    }
  }
module.exports = {
  CheckIfTodoBelongsToUser, 
  CheckIfTodoExist
}
