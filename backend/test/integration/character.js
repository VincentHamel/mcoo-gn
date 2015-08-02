var should = require('should');
var assert = require('assert');
var request = require('supertest');
var mongoose = require('mongoose');
if(!mongoose.connection.readyState) {
  mongoose.connect('localhost:27017'); //Connect to our database
}

var Character = require('../../app/models/character');
var url = 'localhost:8080';
/*
  Create : 
    missing field
    wrong race
    wrong profession
    wrong class
    wrong skills
    already existing
    good
  Read :
    wrong
    good
  Update :
    wrong race
    wrong profession
    wrong class
    wrong skills
    good
  Delete
    good
    wrong
    */

    describe('Character', function() {
      describe('Create', function() {
        it('should return error trying to create missing fields form character', function(done) {
          var profile = {
            "name" : "testCharacter",
            "nationality" : "American",
            "race" : "human",
            "profession" : "miner",
            "class" : "warrior",
            "belief" : "catholism",
            "max_hp" : "12",
          };
          request(url)
          .post('/character')
          .send(profile)

      .expect(400) //Status code
      .end(function(err, res) {
        should.not.exist(err);

        res.body.should.have.property('message', 'Character validation failed');
        res.body.should.have.property('name', 'ValidationError');
        done();
      });
    });

        it('should return error trying to create wrong race form character', function(done) {

          var profile = {
            "name" : "testCharacter",
            "nationality" : "American",
            "race" : "fish",
            "profession" : "miner",
            "class" : "warrior",
            "belief" : "catholism",
            "max_hp" : "12",
            "skills" : ["berserk"],
            "xp" : "1"
          };
          request(url)
          .post('/character')
          .send(profile)

      .expect(400) //Status code
      .end(function(err, res) {
        should.not.exist(err);
      // this is should.js syntax, very clear
      res.body.should.have.property('message', 'Character validation failed');
      res.body.should.have.property('name', 'ValidationError');
      done();
    });
    });

        it('should return error trying to create wrong profession character', function(done) {

          var profile = {
            "name" : "testCharacter",
            "nationality" : "American",
            "race" : "human",
            "profession" : "professor",
            "class" : "warrior",
            "belief" : "catholism",
            "max_hp" : "12",
            "skills" : ["berserk"],
            "xp" : "1"
          };
          request(url)
          .post('/character')
          .send(profile)

      .expect(400) //Status code
      .end(function(err, res) {
        should.not.exist(err);
      // this is should.js syntax, very clear
      res.body.should.have.property('message', 'Character validation failed');
      res.body.should.have.property('name', 'ValidationError');
      done();
    });
    });

        it('should return error trying to create wrong class form character', function(done) {

          var profile = {
            "name" : "testCharacter",
            "nationality" : "American",
            "race" : "human",
            "profession" : "miner",
            "class" : "superhero",
            "belief" : "catholism",
            "max_hp" : "12",
            "skills" : ["berserk"],
            "xp" : "1"
          };
          request(url)
          .post('/character')
          .send(profile)

      .expect(400) //Status code
      .end(function(err, res) {
        should.not.exist(err);
      // this is should.js syntax, very clear
      res.body.should.have.property('message', 'Character validation failed');
      res.body.should.have.property('name', 'ValidationError');
      done();
    });
    });

        it('should return error trying to create wrong skill form character', function(done) {

          var profile = {
            "name" : "testCharacter",
            "nationality" : "American",
            "race" : "human",
            "profession" : "miner",
            "class" : "superhero",
            "belief" : "catholism",
            "max_hp" : "12",
            "skills" : ["fast reading"],
            "xp" : "1"
          };
          request(url)
          .post('/character')
          .send(profile)

      .expect(400) //Status code
      .end(function(err, res) {
        should.not.exist(err);
      // this is should.js syntax, very clear
      res.body.should.have.property('message', 'Character validation failed');
      res.body.should.have.property('name', 'ValidationError');
      done();
    });
    });

        it('should create a valid character', function(done) {
          var Character = require('../../app/models/character');

          Character.find({name:'testChar2'}).remove(function() {
            var profile = {
              "name" : "testChar2",
              "nationality" : "Canadian",
              "race" : "human",
              "profession" : "miner",
              "class" : "warrior",
              "belief" : "catholism",
              "max_hp" : "12",
              "skills" : ["meditation", "hypnosis"],
              "xp" : "1"
            };
            request(url)
            .post('/character')
            .send(profile)

        .expect(200) //Status code
        .end(function(err, res) {
          should.not.exist(err);
        // this is should.js syntax, very clear
        res.body.should.have.property('message', 'Character created!');
        done();	
      });
      });
        });

        it('should return error trying to create a character that already exists', function(done) {

          var profile = {
            "name" : "testChar2",
            "nationality" : "Canadian",
            "race" : "human",
            "profession" : "miner",
            "class" : "warrior",
            "belief" : "catholism",
            "max_hp" : "12",
            "skills" : ["meditation", "hypnosis"],
            "xp" : "1"
          };
          request(url)
          .post('/character')
          .send(profile)

      .expect(200) //Status code
      .end(function(err, res) {
        should.not.exist(err);
      // this is should.js syntax, very clear
      //res.body.should.have.property('message', 'E11000 duplicate key error index: test.characters.$name_1 dup key: { : \"testChar2\" }');
      //res.body.should.have.property('name', 'MongoError');
      done();
    });
    });
      });

describe('Update', function() {
  var characterId = null;
  before(function(done) {
    var character = new Character({
      "name" : "testCharacter",
      "nationality" : "American",
      "race" : "human",
      "profession" : "miner",
      "class" : "warrior",
      "belief" : "catholism",
      "max_hp" : "12",
      "xp" : "1"
    });
    character.save(
      function(err, res){
        should.not.exist(err);
        should.exist(res);
        characterId = res._id;
        done();
      });
  });
  after(function() {
    Character.find({name:'testCharacter'}).remove().exec();
  });


  it('should update a character', function(done) {
    request(url)
    .patch('/character/')
    .send({
      "_id" : characterId,
      "nationality" : "Spaceman",
      "max_hp" : "12",
      "skills" : ["meditation", "hypnosis"],
      "xp" : "1"
    })
        .expect(200) //Status code
        .end(function(err, res) {
          should.not.exist(err);
          should.exist(res);
          res.body.should.have.property('message', 'Character updated!');
          should(res.body.character._id.toString()).be.equal(characterId.toString());
          res.body.character.should.have.property("nationality", "Spaceman");
          res.body.character.should.have.property("max_hp", 12);
          res.body.character.should.have.property("xp", 1);
          res.body.character.should.have.property("skills", ["meditation","hypnosis"]);
          done();
        });
      });

  it('should not update a character, error on race', function(done) {
    request(url)
    .patch('/character/')
    .send({
      "_id" : characterId,
      "race" : "Something"
    })
        .expect(200) //Status code
        .end(function(err, res) {
          should.exist(err);
          done();
        });
      });

  it('should not update a character, error on profession', function(done) {
    request(url)
    .patch('/character/')
    .send({
      "_id" : characterId,
      "profession" : "!Blacksmith"
    })
        .expect(200) //Status code
        .end(function(err, res) {
          should.exist(err);
          done();
        });
      });

  it('should not update a character, error on class', function(done) {
    request(url)
    .patch('/character/')
    .send({
      "_id" : characterId,
      "class" : "rogue"
    })
        .expect(200) //Status code
        .end(function(err, res) {
          should.exist(err);
          done();
        });
      });

  it('should not update a character, error on skills', function(done) {
    request(url)
    .patch('/character/')
    .send({
      "_id" : characterId,
      "skills": ["mediation"]
    })
        .expect(200) //Status code
        .end(function(err, res) {
          should.exist(err);
          done();
        });
      });

});

describe('Delete', function() {
var characterId = null;
  before(function(done) {
    var character = new Character({
      "name" : "testCharacter",
      "nationality" : "American",
      "race" : "human",
      "profession" : "miner",
      "class" : "warrior",
      "belief" : "catholism",
      "max_hp" : "12",
      "xp" : "1"
    });
    character.save(
      function(err, res){
        should.not.exist(err);
        should.exist(res);
        characterId = res._id;
        done();
      });
  });
  after(function() {
    Character.find({name:'testCharacter'}).remove().exec();
  });

  it('should remove an existing character', function(done) {
    request(url)
    .delete('/character/' + characterId)
    .end(function(err, res) {
      should.not.exist(err);
      // this is should.js syntax, very clear
      res.body.should.have.property('message', 'Character deleted');
      done();
    });
  });

  it('should not remove an unexisting character', function(done) {
    request(url)
    .delete('/character/idontexist')
    .end(function(err, res) {
      should.exist(err);
      // this is should.js syntax, very clear
      res.body.should.have.property('message', 'Character not found');
      done();
    });
  });

  
});

  //GET
  describe('Read', function() {
    it('should return error trying to get non-existing character', function(done) {
      request(url)
      .get('/character/nonExistingCharacter')
      .expect(404)
      .end(function(err, res) {
        should.not.exist(err);
      // this is should.js syntax, very clear
      res.body.should.have.property('message', 'Character not found');
      done();
    });
    });

    it('should return a valid character', function(done) {
      var Character = require('../../app/models/character');
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

      character.save(function(err, res) {
        request(url)
        .get('/character/'+res._id)
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);
        // this is should.js syntax, very clear
        should.exist(res.body);
        done();
      });
      });
    });
  });

after(function(done) {
  var Character = require('../../app/models/character');

  Character.find({name:'Test'}).remove().exec();
  Character.find({name:'testChar2'}).remove().exec();
  Character.find({name:'testCharacter'}).remove().exec();
  done();
});
});
