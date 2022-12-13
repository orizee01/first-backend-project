
const db  = require("../config/config")
const queries = require("../queries/todo_query");
module.exports = {
   getAlltodo: async (id) => {
    return  await db.oneOrNone(queries.getOneTodo, [id]);
   }

}