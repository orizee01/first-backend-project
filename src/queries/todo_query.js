module.exports = {

    toDo: `INSERT INTO todo (title, users_id)
    VALUES($1, $2)
    RETURNING *;
    `,
    getTodo: `SELECT * FROM todo where users_id = $1;`,
    updateTodo: `UPDATE todo 
    SET title = $1, 
    status = $2
    WHERE id = $3
     RETURNING *;
    `,
    getOneTodo:`SELECT * FROM todo WHERE id = $1`,
    deleteTodo:`DELETE FROM todo WHERE id = $1
    ;`
} 
            
// UPDATE ratings 
// SET rating = COALESCE (NULLIF($1, 0), rating),
// review = COALESCE (NULLIF($2, ''), review),
// updated_at = NOW()
// WHERE movie_id = $3 AND user_id = $4
// RETURNING *;