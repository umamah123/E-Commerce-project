var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();
var mysqlConnection = require('../model/connection')


router.post('/', (req, res) => {
  const data={username:req.body.username,password:req.body.password,email:req.body.email,name:req.body.name,role:req.body.role}
  mysqlConnection.query('INSERT INTO users SET ?', data ,(err, rows) => {
    console.log("...")
      if (!err){
              const transport = nodemailer.createTransport({
                service :'gmail',
                auth : {
                  user :"umamaheshp3@gmail.com",
                  pass :"8639264343"
                }
              })
              const mailOptions ={
                from :"umamaheshp3@gmail.com",
                to:"umamaheshp3@gmail.com",
                subject :"Thank You for registering",
                text : `Hi ${req.body.name} thank you for registering`
              }
              transport.sendMail(mailOptions,(err,res)=>{
                if(err){
                  console.log(err);

                }
                else{
                  console.log("Mail  sent succesfull")
                }
              })
          res.send("user registered ");
       //  res.send("user details added");
  }
      else{
     
        res.send("Not registered");
      }
    
  })
});


module.exports = router;