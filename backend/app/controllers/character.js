var express    = require('express');        // call express
var router = express.Router();              // get an instance of the express Router
var Character = require('../models/character');

router.route('/')
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
      res.json({ message: err.message, name: err.name });
    }
    else
      res.json({ message: 'Character created!' });
  });
});

router.route('/:id')
  .get(function(req, res) {
  Character.findOne({_id : req.params.id}, function(err, character) {
    if(!character || err) {
      res.status(404);
      res.json({message: "Character not found"});
    } else
      res.json(character);
  });
});

router.route('/')
// patch character (accessed at put http://localhost:8080/character)
  .patch(function(req, res) {

  if(!req.body._id){
    res.status(422);
    res.json({message: "Character missing id"});
    return;
  }
  Character.findOne({_id : req.body._id}, function(err, character) {
    if(!character || err) {
      res.status(404);
      res.json({message: "Character not found"});
      return;
    }

    if (req.body.name)character.name = req.body.name;
    if (req.body.nationality)character.nationality = req.body.nationality;
    if (req.body.race)character.race = req.body.race;
    if (req.body.profession)character.profession = req.body.profession;
    if (req.body.class)character.class = req.body.class;
    if (req.body.belief)character.belief = req.body.belief;
    if (req.body.max_hp)character.max_hp = req.body.max_hp;
    if (req.body.skills)character.skills = req.body.skills;
    if (req.body.xp)character.xp = req.body.xp;

    character.save(function(err, res2) {
      if (err) {
        res.status(400);
        res.json({ message: err.message, name: err.name});
      }
      else
        res.json({ message: 'Character updated!' , character: res2});
    });
  });
});

router.route('/:id')
// delete character (accessed at delete)
  .delete(function(req, res) {
  Character.findOne({_id : req.params.id}).remove(  function(err, character) {
    if(!character || err || character.result.n <= 0) {
      res.status(404);
      res.json({message: "Character not found"});
    } else{

      res.json({ message: 'Character deleted' });
    }
  });
});

module.exports = router;