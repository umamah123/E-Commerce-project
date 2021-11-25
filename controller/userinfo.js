var mysqlConnection = require('../model/connection')

var userinfo=(req, res) => {
   
    mysqlConnection.query(`select * from users where id = ${req.user.id}`, (err, rows) => {
        if (!err){
          res.send(rows)
          
        }
        else{
            console.log(err);
            res.send(err);
        }
    })
};
module.exports = userinfo;