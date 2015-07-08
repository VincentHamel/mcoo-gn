// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

//Mongo
var mongoose   = require('mongoose');
mongoose.connect('localhost:27017'); // connect to our database
var HelloWorld = require('./app/models/hello.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.route('/hello')
    // create hello (accessed at POST http://localhost:8080/hello)
    .post(function(req, res) {
        var hello = new HelloWorld();
        hello.name = req.body.name;

        // save the hello and check for errors
        hello.save(function(err) {
            if (err)
                res.send(err);
            else
                res.json({ message: 'Hello created!' });
        });
    });

router.route('/hello/:name')
    .get(function(req, res) {
        HelloWorld.findOne({name : req.params.name}, function(err, hello) {
            if(err)
                res.send(err);
            else if(!hello) {
                res.status(404);
                res.json({message: "Hello not found"});
            } else
                res.send(hello);
        });
    });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
