module.exports = (app) => {
    const subscriber = require('../controllers/subscriber.controller.js');
    
    // Create a new Note
    app.post('/subscriber', subscriber.create );
}