module.exports = {

    toDo: `INSERT INTO todo (title, users_id)
    VALUES($1, $2)
    RETURNING *;
    `,
    getTodo: `SELECT * FROM todo where users_id = $1;`,
    updateTodo: `UPDATE todo SET title = $1
     WHERE id = $2 
     RETURNING *;
    `,
    getOneTodo:`SELECT * FROM todo WHERE id = $1`,
    deleteTodo:`DELETE FROM todo WHERE id = $1
    ;`
} 
             