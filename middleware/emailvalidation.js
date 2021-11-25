

var emailval = (req,res,next)=>{

    var email = req.body.email
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if((email.length >=13) && (email.length <=30)){
        if(reg.test(email)){
            next();
        }
        else{
            res.send('Not a valid mail')
        }
    }
        else{
            res.send("given mail is not in given range i.e.,13 to 30 ")
        }
    }

module.exports = emailval;