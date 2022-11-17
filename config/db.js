const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db-gamification',
    multipleStatements: true
})

conn.connect((err)=>{
    if(err) throw err;
    console.log("connected to mysql");
})

module.exports=conn;