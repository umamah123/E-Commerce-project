var mysqlConnection = require('../model/connection')


var productinfo =  (req, res) => {
   
    var db = "select users.id,users.username,users.email,users.name,product.name,product.Description,product.Price,product.createdBy from users inner join product on users.id =product.id where users.id =' "+`${req.user.id}`+"'";
    mysqlConnection.query(db, (err, rows) => {

        if (!err){
            console.log(rows);
          res.send(rows)
        
        }
        else{
            console.log(err);
            res.send(err);
        }
    })
};

module.exports = productinfo;