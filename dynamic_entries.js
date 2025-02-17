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

  // to count the total number of users in the database:
  var q = 'SELECT COUNT(*) AS total FROM users ';
  connection.query(q, function (error, results, fields) {
    if (error) throw error;
    console.log(results[0].total);
  });

// inserting dynamically generated data into the database:

// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };
 
// var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });


// The code to insert 500 random users into the database:
var data = [];
for(var i = 0; i < 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
 
var q = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});

connection.end();   // This line is used to close the connection to the database.