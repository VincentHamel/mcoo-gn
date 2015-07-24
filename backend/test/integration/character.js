var should = require('should');
var assert = require('assert');
var request = require('supertest');
var mongoose = require('mongoose');
if(!mongoose.connection.readyState) {
	mongoose.connect('localhost:27017'); //Connect to our database
}

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
		
		Character.find({name:'testChar2'}).remove(function() {
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

	it('should return error trying to create a player already exists', function(done) {
    
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
    
    .expect(400) //Status code
		.end(function(err, res) {
			should.not.exist(err);
			// this is should.js syntax, very clear
			res.body.should.have.property('message', 'E11000 duplicate key error index: test.characters.$name_1 dup key: { : \"testChar2\" }');
			res.body.should.have.property('name', 'MongoError');
			done();
        });
    });
	
	
	//GET
	it('should return error trying to get non-existing character', function(done) {
		request(url)
		.get('/character/nonExistingCharacter')
		.expect(404)
		.end(function(err, res) {
			  if (err) {
				throw err;
			  }
			  // this is should.js syntax, very clear
			  res.body.should.have.property('message', 'Character not found');
			  done();
		});
    });
	
	it('should return a valid character character', function(done) {
		request(url)
		.get('/character/testChar2')
		.expect(200)
		.end(function(err, res) {
			  if (err) {
				throw err;
			  }
			  // this is should.js syntax, very clear
			  should.exist(res.body);
			  done();
		});
    });
});
