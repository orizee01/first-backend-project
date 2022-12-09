const db = require("../config/config");
const queries = require("../queries/user_query");

module.exports = {
    findUserByEmail: async (email) => {
        return await db.any(queries.findByEmail, [email]);
        
    },
    getByEmail: async(email)=> {
        return await db.any(queries.getUserByEmail, [email]);
    }
   
}
