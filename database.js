/*
Version: 1.2
Last edited by: Natalia Pakhomova
Last edit date: 14/11/2021

Database connection module
*/

const mysql = require('mysql'); // Loads MySQL
const conn = mysql.createConnection({  // Setup connection
    host: process.env.MYSQL_HOSTNANE || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USERNAME || 'cats',
    password: process.env.MYSQL_PASSWORD || 'cats',
    database: process.env.MYSQL_DATABASE || 'cats'
});

conn.connect(function(err) { // Establish connection
    if (err) throw err;
    console.log('Database is connected successfully!');
});

module.exports = conn; // Exports connection