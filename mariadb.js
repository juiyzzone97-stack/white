// Get the client
// import mysql from 'mysql2/promise';

// // Create the connection to database
// const connection = await mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'Youtube',
//   dateStrings : true
// });

// module.exports = connection
// A simple SELECT query
// try {
//   const [results, fields] = await connection.query(
//     'SELECT * FROM `users`'
//   );

//   console.log(results); // results contains rows returned by server
//   console.log(fields); // fields contains extra meta data about results, if available
// } catch (err) {
//   console.log(err);
// }

// Using placeholders
// try {
//   const [results] = await connection.query(
//     'SELECT * FROM `users`',
//   );
//   var {id, name, email, created_at} = results[0];
//   console.log(id);
//   console.log(name);
//   console.log(email);
//   console.log(created_at);
// } catch (err) {
//   console.log(err);
// }

const mysql = require('mysql2');

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'root',
   database: 'Youtube',
   dateStrings : true
});


   module.exports = connection