var express    = require('express');        // call express
var router = express.Router();              // get an instance of the express Router
var User = require('../models/user');

router.route('/')
// create character (accessed at POST http://localhost:8080/user)
  .post(function(req, res) {
  var user = new User();
  user.name = req.body.name;
  user.phone = req.body.phone;
  user.hashPassword = req.body.password;
  user.email = req.body.email;
  user.characters = req.body.characters;

  // save the character and check for errors
  user.save(function(err) {

    if (err) {
      res.status(400);
      res.json({ message: err.message, name: err.name })
    }
    else
      res.json({ message: 'User created!' });
  });
});

router.route('/:id')
// get character (accessed at get)
  .get(function(req, res) {
  User.findOne({_id : req.params.id}, function(err, user) {
    if(!user || err) {
      res.status(404);
      res.json({message: "User not found"});
    } else{
		user.hashPassword = undefined;
		res.json(user);
	}
  });
});

router.route('/')
// patch character (accessed at put http://localhost:8080/user)
  .patch(function(req, res) {
	  
  if(!req.body._id){
    res.status(422);
    res.json({message: "User missing id"});
    return;
  }
	User.findOne({_id : req.body._id}, function(err, user) {
     if(!user || err) {
      res.status(404);
      res.json({message: "User not found"});
      return;
    } 
    
    if (req.body.name)user.name = req.body.name;
    if (req.body.phone)user.phone = req.body.phone;
    if (req.body.password)user.hashPassword = req.body.password;
    if (req.body.email)user.email = req.body.email;
    if (req.body.characters)user.characters = req.body.characters;
    
    user.save(function(err, res2) {
      if (err) {
        res.status(400);
        res.json({ message: err.message, name: err.name})
      }
      else
        res.json({ message: 'User updated!' , user: res2});
    });
  });
});

router.route('/:id')
// delete character (accessed at delete)
  .delete(function(req, res) {
  User.findOne({_id : req.params.id}).remove(  function(err, user) {
    if(!user || err || user.result.n <= 0) {
      res.status(404);
      res.json({message: "User not found"});
    } else{
      
      res.json({ message: 'User deleted' });
    }
	
  });
});

module.exports = router;