var express    = require('express');        // call express
var router = express.Router();              // get an instance of the express Router
var foo = require('../models/foo');

router.get('/', function(req, res) {
  res.json({message : foo()});
});

module.exports = router;