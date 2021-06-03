

// Create and Save a new Subscriber
exports.create = async (req, res) => {
    // Validate request
    if(!req.body.subscriberemail) {
        return res.status(400).send({
            message: "E-mail content can not be empty"
        });
    }

    // Create a Subscriber
    const hubspot = require('@hubspot/api-client');
    console.log('JavaScript HTTP trigger function processed a request.. setting up HubSpot context through APIKEY from env variable');
    // Setup hubspot context
    const hubspotClient = new hubspot.Client({ apiKey: process.env.HSAPIKEY })
    // Create POST body following https://github.com/HubSpot/hubspot-api-nodejs#example-create-contact-company-and-associate-created-objects
    const contactObj = {
        properties: {
            email: req.body.subscriberemail
        },
    }
    console.log('Trying to add email '+ contactObj.properties.email+'...');
    // Save subscriber in HubSpot, returns Promise
    const createContactResponse = await hubspotClient.crm.contacts.basicApi.create(contactObj)
    .then((results) => {
        console.log("HTTP statusCode is "+results.response.statusCode+": Successfully added "+contactObj.properties.email);
    })
    .catch((err) => {
        console.error("HTTP statusCode is "+err.response.statusCode+": ERROR in adding user, message: "+err.response.body.message);
    });
};
