const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Mount the body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Export the app
module.exports = app;
































 module.exports = app;
