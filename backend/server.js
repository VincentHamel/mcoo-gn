// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

//Mongo
var mongoose   = require('mongoose');
mongoose.connect('localhost:27017'); // connect to our database

//Config file
var config = require('./config/routes.json');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());

var port = 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

for (var index in config) {
	router.use(config[index].route, require('./app/controllers/' + config[index].controller));
}

// REGISTER OUR ROUTES -------------------------------
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
