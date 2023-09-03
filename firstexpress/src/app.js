const express = require('express');
const app = express();
const apiRouter = require('./src/Routes/api'); // Adjust the path as needed

// Middleware and other app configurations go here

app.use('/api', apiRouter); // Mount the API router under '/api' path

module.exports = app;