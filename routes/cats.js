/*
Version: 1.2
Last edited by: Natalia Pakhomova
Last edit date: 14/11/2021

Main cats router module
*/

const express = require('express'); // Loads express module
const mysql = require('mysql'); // Loads MySQL module
const hostname = process.env.HOSTNAME || "http://localhost:3000"; // Setup hostname
const router = express.Router(); // Create router object
const db = require('../database'); // Loads DB module
const mailgun = require('../mailgun'); // Loads Mailgun module
const bodyParser = require('body-parser'); // Loads POST body parser
const parseUrlencoded = bodyParser.urlencoded({ extended: false }); // Setup post body parser

function formatResult(data) {
    /* Helper function to format result array and add hostname to photo URL */
    for (let i=0; i<data.length;i++) {
        if (data[i].photo) {
            data[i].photo = `${hostname}/` + data[i].photo;
        }
    }
    return data;
}

router.get('/list', function(req, res) {
    /*
    ROUTE: /list (GET) - returns the list of all cats
    PARAMETERS:
        limit - amount of results to return (int, 0...100, default 20, optional)
        from - offset first X results (int, 0..., default 0, optional)
    RESPONSE:
        array of cat objects: [{
            id: int (Cat's ID),
            name: string (Cat's name),
            breed: string (Cat's breed),
            color: string (Cat's colour),
            gender: string (Cat's sex),
            age: string (Cat's age),
            photo: string (Cat's photo URL),
            description: text (Cat's description/notes)
        }]
    */
    // Get today's date to filter out cats that had been already adopted today
    let today = new Date().toISOString().split('T')[0];
    // Get limit
    let limit = parseInt(req.query.limit);
    if (!limit || limit <= 0 || limit > 100) limit = 20;
    // Get from
    let from = parseInt(req.query.from);
    if (!from) from = 0;
    // Build query
    let sql = `SELECT *
               FROM cats
               WHERE adopted < '${today}'
               LIMIT ${from}, ${limit}`;
    // Execute query
    db.query(sql, function (err, data) {
        // Read and return the result
        if (err) throw err;
        else res.json(formatResult(data));
    });
});

router.post('/search', parseUrlencoded, function(req, res) {
    /*
    ROUTE: /search (POST) - performs a search in cats data and return result. For a successful search at least one of
                            these parameters should be passed: name, min_age, max_age, breed, gender, color
    PARAMETERS:
        name - cat's name (string, optional)
        breed - cat's breed (string, optional)
        gender - cat's sex (string, optional)
        color - cat's color (string, optional)
        min_age - cat's min age (int, 0..., default 0, optional)
        max_age - cat's max age (int, 0..., default 0, optional)
        limit - amount of results to return (int, 0...100, default 20)
        from - offset first X results (int, 0..., default 0)
    RESPONSE:
        array of cat objects: [{
            id: int (Cat's ID),
            name: string (Cat's name),
            breed: string (Cat's breed),
            color: string (Cat's colour),
            gender: string (Cat's sex),
            age: string (Cat's age),
            photo: string (Cat's photo URL),
            description: text (Cat's description/notes)
        }]
    */
    // Get today's date to filter out cats that had been already adopted today
    let today = new Date().toISOString().split('T')[0];
    // Get name
    let name = req.body.name;
    if (!name) name = "";
    // Get min age
    let min_age = parseInt(req.body.min_age);
    if (!min_age || isNaN(min_age)) min_age = 0;
    // Get max age
    let max_age = parseInt(req.body.max_age);
    if (!max_age || isNaN(max_age)) max_age = 0;
    // Get breed
    let breed = req.body.breed;
    if (!breed) breed = "";
    // Get gender
    let gender = req.body.gender;
    if (!gender) gender = "";
    // Get color
    let color = req.body.color;
    if (!color) color = "";
    // Get limit
    let limit = parseInt(req.body.limit);
    if (!limit || limit <= 0 || limit > 100) limit = 20;
    // Get from
    let from = parseInt(req.body.from);
    if (!from) from = 0;
    // Check if at least one option had been passed
    if (!(name || min_age || max_age || breed || gender || color )) {
        res.json({
            result: false,
            error: "Please provide at leas one search criteria!"
        });
    } else {
        // Build query
        let query = "";
        if (name) query += ` AND name LIKE ${mysql.escape(name + "%")}`;
        if (min_age) query += ` AND age >= ${min_age}`;
        if (max_age) query += ` AND age <= ${max_age}`;
        if (breed) query += ` AND breed like ${mysql.escape(breed + "%")}`;
        if (gender)  query += ` AND gender like ${mysql.escape(gender + "%")}`;
        if (color)  query += ` AND color like ${mysql.escape(color + "%")}`;
        let sql = `SELECT *
                   FROM cats
                   WHERE adopted < '${today}'
                       ${query}
                   LIMIT ${from}, ${limit}`;
        // Execute query
        db.query(sql, function (err, data) {
            if (err) throw err;
            // Read and return the result
            else res.json(formatResult(data))
        });
    }
});

router.get('/options', function(req, res) {
    /*
    ROUTE: /options (GET) - returns the list of breeds, min age and max age for all un-adopted cats
    PARAMETERS:
        none
    RESPONSE:
        {
            result: true,
            breeds: [...] (Array of breed names),
            min_age: int (Min age of cats),
            max_age: int (Max age of cats)
        }
    */
    // Init variable
    let breeds = [];
    let min_age = 0;
    let max_age = 0;
    // Get today's date to filter out cats that had been already adopted today
    let today = new Date().toISOString().split('T')[0];
    // Build query to get all breed options of all un-adopted cats
    let sql = `SELECT DISTINCT breed
               FROM cats
               WHERE adopted < '${today}'
               ORDER BY BREED`;
    // Execute query
    db.query(sql, function (err, data) {
        if (err) throw err;
        // Read data and build breeds array
        for (let i = 0; i < data.length; i++) {
            breeds.push(data[i].breed);
        }
        // Build query to get min and max age of all un-adopted cats
        sql = `SELECT MIN(age) AS min_age, MAX(age) AS max_age
               FROM cats
               WHERE adopted < '${today}'`;
        // Execute query
        db.query(sql, function (err, data) {
            if (err) throw err;
            // Read min and max age
            min_age = data[0].min_age;
            max_age = data[0].max_age;
            // return data
            res.json({result:true,breeds:breeds, min_age:min_age, max_age:max_age});
        });
    });
});

router.post('/adopt', parseUrlencoded, function(req, res) {
    /*
    ROUTE: /adopt (post) - Save cat as adopted, sends email to admin
    PARAMETERS:
        id: int - cat ID in database,
        first_name: string - First name of the adopter,
        last_name: string - Last name of the adopter,
        email: string - Email of the adopter,
        phone: string - Phone of the adopter,
        message: string - Message from the adopter,
    RESPONSES:
        Successful adoption:
        {
            result: true,
            id: int - ID of the cat,
        }
        Unsuccessful adoption
        {
            result: true,
            id: int - ID of the cat,
            error: Reason for failure
        }
    */
    // Get today's date to filter out cats that had been already adopted today
    let today = new Date().toISOString().split('T')[0];
    // Get cat's id
    let id = parseInt(req.body.id);
    // Get adopter's first name
    let first_name = req.body.first_name;
    // Get adopter's last name
    let last_name = req.body.last_name;
    // Get adopter's email
    let email = req.body.email;
    // Get adopter's phone
    let phone = req.body.phone;
    // Get adopter's message
    let message = req.body.message;
    // Build query to get the cat from the database by ID (if not yet adopted)
    let sql = `SELECT name
               FROM cats
               WHERE id = ${id} AND adopted < '${today}'`;
    // Execute query
    db.query(sql, function (err, data) {
        if (err) throw err;
        if (data.length) { // A cat found
            // Get cat's name
            let cat_name = data[0].name;
            // Build email
            let email_data = {
                from: 'Owl Cats <info@owlphotography.com.au>',
                to: 'info@owlphotography.com.au',
                subject: 'Cat adoption request',
                text: `A cat had been adopted!
Cat Name: ${cat_name}
Client First Name: ${first_name}
Client Last Name: ${last_name}
Client Phone: ${phone}
Client Email: ${email}
Client Message:
${message}`
            }
            // Send email
            mailgun.messages().send(email_data);
            // Build query to save cat as adopted
            sql = `UPDATE cats
                   SET adopted = '${today}'
                   WHERE id = '${id}'`;
            // Execute query
            db.query(sql);
            // Return confirmation
            res.json(formatResult({
                result: true,
                id: id
            }));
        } else { // Cat not found or already adopted
            // Return error
            res.json(formatResult({
                result: false,
                id: id,
                error: 'Not found or already adopted!'
            }));
        }
    });
})

module.exports = router; // Export router
