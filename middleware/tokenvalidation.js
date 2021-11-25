
  const jwt  = require("jsonwebtoken");
 

    
 var vat = (req,res,next) => {
      var token = req.headers.authorization
         if(!token)
         {
           res.send("Un authorized ");
         } 
      else{
        jwt.verify(token,'qwe123',(err,result) => {
          if(err){
            res.send("In valid token");
          }else{
           console.log(result);
           req.user = result;
         
          next();
          }
        });
      }
    
     }
     module.exports = vat;