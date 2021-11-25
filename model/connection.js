const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  
    host: 'localhost',
    user: 'root', 
    password: 'password',
    port:"3306", 
    database: 'www'
});

mysqlConnection.connect((err) => {
    if(err) 
        console.error("Something went wrong connecting to the database ...");
   else {
       console.log("connected to db");
   } 
   
});
   module.exports = mysqlConnection;