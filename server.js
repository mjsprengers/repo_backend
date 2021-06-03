const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup CORS when in development
if (process.env.NODE_ENV === 'dev') {
    // CORS settings
    var cors = require('cors');
    app.use(cors());
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to API. You can only create a subscriber via a POST request."});
});

require('./api/routes/subscriber.routes.js')(app);

// listen for requests
app.listen(80, () => {
    console.log("Server is listening on port 80");
});
