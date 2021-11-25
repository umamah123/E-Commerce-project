var prodval =
{
    skuval : (req,res,next)=> {
    const data={
    SKU:req.body.SKU
}
if ((data.SKU >= '0' && data.SKU <='9') &&(data.SKU != "") ){
    next();
}else{
   // console.log("invalid credentials")
    res.send("SKU number is not valid ");
}
},
   priceval :(req,res,next)=>{
       const data ={
           Price : req.body.Price
       }
       if(data.Price >10000){
    next();
}
else{
    res.send("price should not be less than 10000")
}
}
}
module.exports = prodval;