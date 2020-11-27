
//Utilizar esse trecho se for utulizar mssql 
const sql = require('mssql')

const config = 'mssql://sa:123456@DESKTOP-CCK7J2F/\SQLEXPRESS/star-wars';

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQLServer...');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql, poolPromise
};


//utilizando MYSQL
// const mysql = require('mysql');

// var config =
// {
//     host: 'mydemoserver.mysql.database.azure.com',
//     user: 'myadmin@mydemoserver',
//     password: 'your_password',
//     database: 'star-wars',
//     port: 3306,
//     ssl: true
// };

// const conn = new mysql.createConnection(config);

// conn.connect(
//     function (err) { 
//     if (err) { 
//         console.log("!!! Cannot connect !!! Error:");
//         throw err;
//     }
//     else
//     {
//        console.log("Connection established.");
//            queryDatabase();
//     }   
// });

