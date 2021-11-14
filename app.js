/*
Version: 1.2
Last edited by: Natalia Pakhomova
Last edit date: 14/11/2021

Main application file
*/
const express = require('express'); // Loads express
const cors = require('cors'); // Load cors
const app = express(); // Create app
const hostname = process.env.HOSTNAME || "http://localhost:3000"; // Define hostname URL
const port = process.env.PORT || 3000; // Define hostname port
const catsRouter = require('./routes/cats'); // Load cats router

app.use(cors()); // Init app

app.use('/', catsRouter); // Use cats router

app.listen(port, () => { // Setup app
    console.log(`App is listening at ${hostname}`);
});

module.exports = app; // Export app