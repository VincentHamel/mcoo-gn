// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

//Mongo
var mongoose   = require('mongoose');
mongoose.connect('localhost:27017'); // connect to our database
var HelloWorld = require('./app/models/hello');
var Character = require('./app/models/character');

//Foo bar
var foo = require('./app/models/foo');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());

var port = 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.get('/foo', function(req, res) {
    res.json({message : foo()});
});

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
                res.json(hello);
        });
    });
	
router.route('/character')
    // create character (accessed at POST http://localhost:8080/character)
    .post(function(req, res) {
        var character = new Character();
        character.name = req.body.name;
		character.nationality = req.body.nationality;
		character.race = req.body.race;
		character.profession = req.body.profession;
		character.class = req.body.class;
		character.belief = req.body.belief;
		character.max_hp = req.body.max_hp;
		character.skills = req.body.skills;
		character.xp = req.body.xp;

        // save the character and check for errors
        character.save(function(err) {

            if (err) {
				res.status(400);
                res.json({ message: err.message, name: err.name })
			}
            else
                res.json({ message: 'Character created!' });
        });
    });
	
router.route('/character/:name')
    .get(function(req, res) {
        Character.findOne({name : req.params.name}, function(err, character) {
            if(err)
                res.send(err);
            else if(!character) {
                res.status(404);
                res.json({message: "Character not found"});
            } else
                res.json(character);
        });
    });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
