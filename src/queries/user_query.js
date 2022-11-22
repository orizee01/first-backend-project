const queries = {
    registerUsers: `
            INSERT INTO Users (firstname, lastname, email)
            VALUES ($1, $2, $3) 
            RETURNING *;
    `,
    updateUsers: `
        UPDATE Users SET email = $1, firstname = $2, lastname = $3 WHERE        
        id = $4;
    `,

    getUsers: `SELECT * FROM  Users;`,
    getOneUser: `SELECT * FROM  Users WHERE id = $1`,
    getUserByEmail: `SELECT * FROM Users WHERE email = $1`,
    deleteUser: `DELETE FROM  Users WHERE id = $1`,
    findByEmail: `SELECT email FROM  Users WHERE email = $1;`

}

module.exports = queries;

