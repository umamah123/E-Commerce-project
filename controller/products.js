
//var express = require('express');
//var router = express.Router();
var mysqlConnection = require('../model/connection')


//router.post('/',(req, res) => {
    var pro = (req,res)=>{
    const data={
        
        name:req.body.name,
        SKU:req.body.SKU,
        Description:req.body.Description,
        Price:req.body.Price,
        createdAt:req.body.createdAt,
        createdBy:req.body.createdBy
    }
    mysqlConnection.query('INSERT INTO product SET ?', data ,(err, rows) => {
      console.log("...")
        if (!err){
               console.log(rows)
            res.send(rows);
  }
        else{

          res.send(err);
        }
    })
  };

  
module.exports = pro;