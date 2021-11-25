var jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();
var mysqlConnection = require('../model/connection')


router.post('/', (req, res) => {
    const Username = req.body.username;
    const Password = req.body.password;
    
    const data= "select * from users where username = '"+Username+"' and Password = '"+Password+"'"
    console.log(data);
    mysqlConnection.query(data, (err,rows) => {
        if (!err){
          const token = jwt.sign({ id:rows[0].id},'qwe123')
          res.send({token})
        }
        else
            console.log("error");
            res.send(err);
    })
});

module.exports = router;