const mysql= require('../node_modules/mysql');

const mysqlConnection=mysql.createConnection({
    host:'sql5.freemysqlhosting.net',
    user:'sql5393435',
    password:'Y8QSHB4l3x',
    database: 'sql5393435'
});
mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB is connected');
    }
});
module.exports=mysqlConnection;