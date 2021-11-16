/*
Version: 1.2
Last edited by: Natalia Pakhomova
Last edit date: 14/11/2021

Mailgun API module
*/

const mailgun = require('mailgun-js')({ // Loads maigun module and setup the connection
    apiKey: process.env.MAILGUN_API_KEY || 'MAILGUN_API_KEY',
    domain: process.env.MAILGUN_DOMAIN_NAME || 'MAILGUN_DOMAIN_NAME'
});

module.exports = mailgun; // Export mailgun