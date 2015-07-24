var should = require('should');
var assert = require('assert');
var request = require('supertest');

  var url = 'localhost:8080';
  describe('Character', function() {
    it('should return error trying to create badly form character', function(done) {
    
      var profile = {
        "name" : "testCharacter",
		"nationality" : "American",
		"race" : "humain",
		"profession" : "miner",
		"class" : "warrior",
		"belief" : "catholism",
		"max_hp" : "12",
		"skills" : ["hhdhd"],
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
	
	it('should return a valid character', function(done) {
	var Character = require('../../app/models/character');
	
    Character.find({name:'testChar2'}).remove().exec();
      var profile = {
        "name" : "testChar2",
		"nationality" : "Canadian",
		"race" : "humain",
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
