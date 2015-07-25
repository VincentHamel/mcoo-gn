var should = require('should');
var mongoose = require('mongoose');
if(!mongoose.connection.readyState) {
	mongoose.connect('localhost:27017'); //Connect to our database
}

//Unit test
describe('characterModel', function() {
  it('Should create a character', function(done) {
    var Character = require('../../app/models/character');

    Character.find({name:'Test'}).remove().exec();

    var character = new Character();
    character.name = 'Test';
    character.nationality = 'Testland';
    character.race = 'elf';
    character.profession = 'botanist';
    character.class = 'bard';
    character.belief = 'something';
    character.max_hp = 1;
    character.skills = ['berserk', 'decrypt'];
    character.xp = 10;

    character.save(
      function(err){
        done(err);
      });
  });

  it('Should create a character and verify it exists', function(done) {
    var Character = require('../../app/models/character');

    Character.find({name:'Test'}).remove().exec();

    var character = new Character();
    character.name = 'Test';
    character.nationality = 'Testland';
    character.race = 'elf';
    character.profession = 'botanist';
    character.class = 'bard';
    character.belief = 'something';
    character.max_hp = 1;
    character.skills = ['berserk', 'decrypt'];
    character.xp = 10;

    character.save(
      function(err, res){
        should.not.exist(err);
        Character.find({_id:res._id}, function(err, res){
          should.not.exist(err);
          should.exist(res);
          done();
        });
      });
  });

  it('Should create the first character and not the second', function(done) {
    var Character = require('../../app/models/character');

    Character.find({name:'Test'}).remove().exec();

    var character = new Character();
    character.name = 'Test';
    character.nationality = 'Testland';
    character.race = 'elf';
    character.profession = 'botanist';
    character.class = 'bard';
    character.belief = 'something';
    character.max_hp = 1;
    character.skills = ['berserk', 'decrypt'];
    character.xp = 10;

    var newcharacter = new Character();
    newcharacter.name = 'Test';
    newcharacter.nationality = 'Testland';
    newcharacter.race = 'elf';
    newcharacter.profession = 'botanist';
    newcharacter.class = 'bard';
    newcharacter.belief = 'something';
    newcharacter.max_hp = 10;
    newcharacter.skills = ['berserk', 'decrypt'];
    newcharacter.xp = 10;


    character.save(
      function(err){
        should.not.exist(err);
        newcharacter.save(
          function(err){
            should.exist(err);
            done();
          });
      });



  });

  it('Should fail creation of a character due to skills', function(done) {
    var Character = require('../../app/models/character');

    Character.find({name:'Test'}).remove().exec();

    var character = new Character();
    character.name = 'Test';
    character.nationality = 'Testland';
    character.race = 'elf';
    character.profession = 'botanist';
    character.class = 'bard';
    character.belief = 'something';
    character.max_hp = 1;
    character.skills = ['berserk', 'something'];
    character.xp = 10;

    character.save(
      function(err){
        should.exist(err);
        done();
      });
  });

  after(function(done) {
    var Character = require('../../app/models/character');

    Character.find({name:'Test'}).remove().exec();
    done();
  });
});
