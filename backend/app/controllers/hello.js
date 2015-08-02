var express    = require('express');        // call express
var router = express.Router();              // get an instance of the express Router
var HelloWorld = require('../models/hello');

router.route('/')
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

router.route('/:name')
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

module.exports = router;