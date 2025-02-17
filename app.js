// The version of Faker that Colt uses in this course is no longer stable.
// You will need to use the following syntax when you install and require faker in your project:
// - Run this command in the terminal to install the package:
// npm install @faker-js/faker
// - Enter this code in your file to require it:
// var { faker } = require('@faker-js/faker');


var { faker } = require('@faker-js/faker');
var mysql = require('mysql2');


// function generateAddress() {
//     console.log(faker.date.past());
//     console.log(faker.internet.email());
//     console.log(faker.location.streetAddress());
//     console.log(faker.location.city());
//     console.log(faker.location.state());
// }

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'join_us'
  });

var q = 'SELECT CURDATE() as time, CURDATE() AS date, NOW() AS now';

connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].time);  
  console.log(results[0].date);
  console.log(results[0].now);

});


connection.query('SELECT 1 + 5 AS answer', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  });

connection.end();   // This line is used to close the connection to the database.