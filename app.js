
//var jwt = require('jsonwebtoken');
const express = require('express');
var mysqlConnection = require('./model/connection')
var registerRouter = require('./routes/register')
var pro = require('./controller/products')
var loginRouter = require('./routes/login')
var vat = require('./middleware/tokenvalidation')
var prodval = require('./middleware/productvalidation')
var userinfo = require('./controller/userinfo')
var productinfo = require('./controller/productinfo')
var registerval = require('./middleware/registervalidation')
var emailval = require('./middleware/emailvalidation')
const app = express();

app.use(express.json());

app.use('/register',[registerval.userval,registerval.username,registerval.password],emailval,registerRouter);
app.use('/login',[registerval.userval,registerval.password],loginRouter)


app.get('/userinfo',vat,userinfo)
app.post('/products',vat,[prodval.skuval,prodval.priceval],pro)

app.get('/productinfo',vat,productinfo)



app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});

