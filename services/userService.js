const db = require("../config/dbConfig");
exports.register = (data, callback)=>{
    db.query(
        `INSERT INTO user (firstName, lastName, emailId, password) VALUES (?,?,?,?)`,
        [data.firstName, data.lastName, data.emailId, data.password],
        (error, results, fields)=>{
            if(error){
                return callback(error);
            }
            return callback(null, `Registration successful`);
        }
    );
};

exports.login = (data, callback)=>{
    db.query(
        `SELECT id FROM user WHERE emailId = ? AND password=?`,
        [data.emailId, data.password],
        (error, results, fields)=>{
            if(error){
                return callback(error);
            }
            if(results.length > 0){
                return callback(null, "Login success");
            }
            else{
                callback("Invalid credentials");
            }
        }
    );
};