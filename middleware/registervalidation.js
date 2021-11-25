
var  registerval=
{
  userval : (req,res,next)=>{
    const data ={
        username : req.body.username,
        password : req.body.password,
        name :req.body.name
    }
    if((data.username != "" ))
    {
        next();
    }
    else{
        console.log("username should not be empty")
        res.send("username shouldnot be empty!")
    }
},
  username:(req,res,next)=>{
    const data ={
   
    name :req.body.name
      }
        if(data.username != data.name){
        next();
    }
    else{
        res.send("username same as name");
    }
},
password:(req,res,next)=>{
    const data = {
        password : req.body.password
    }
    if(data.password.length >=8)
    {
        next();
    }else{
        res.send("password length should be more than 7 characters")
    }
}

    }



module.exports = registerval
