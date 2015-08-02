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

module.exports = router;