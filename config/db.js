const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'ods12',
  password: '1234',
  database: 'ods12_db'
});

connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

module.exports = connection;