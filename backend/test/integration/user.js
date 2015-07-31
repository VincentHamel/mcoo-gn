var should = require('should');
var assert = require('assert');
var request = require('supertest');
var mongoose = require('mongoose');
if(!mongoose.connection.readyState) {
  mongoose.connect('localhost:27017'); //Connect to our database
}

var User = require('../../app/models/user');

var url = 'localhost:8080';
/*
  Create : 
    missing field
    wrong email
    good
  Read :
    wrong
    good
  Update :
    wrong email
    wrong id
    good
  Delete
    good
    wrong
*/
describe('User', function() {
  describe('Create', function() {
    beforeEach(function() {
      User.find({name:'testUser'}).remove().exec();
    });
    afterEach(function() {
      User.find({name:'testUser'}).remove().exec();
    });
    
    it('should return error trying to create a user missing an attribute', function(done) {
      var profile = {
        "name" : "testUser",
        "password" : "wow",
        "email" : "legit@legit.com",
        "characters" : []
      };
      request(url)
        .post('/user')
        .send(profile)
        .expect(400) //Status code
        .end(function(err, res) {
          should.not.exist(err);
          res.body.should.have.property('message', 'User validation failed');
          res.body.should.have.property('name', 'ValidationError');
          done();
      });
    });
    
    it('should return error trying to create a user with wrong email', function(done) {
      
      var profile = {
        "name" : "testUser",
        "phone" : "514 ",
        "password" : "wow",
        "email" : "legit@com",
        "characters" : []
      };
      request(url)
        .post('/user')
        .send(profile)
        .expect(400) //Status code
        .end(function(err, res) {
          should.not.exist(err);
          res.body.should.have.property('message', 'User validation failed');
          res.body.should.have.property('name', 'ValidationError');
          done();
      });
    });
    
    it('should succeed user creation', function(done) {
      var profile = {
        "name" : "testUser",
        "phone" : "514 ",
        "password" : "wow",
        "email" : "legit@legit.com",
        "characters" : []
      };
      request(url)
        .post('/user')
        .send(profile)
        .expect(200) //Status code
        .end(function(err, res) {
          should.not.exist(err);
          res.body.should.have.property('message', 'User created!');
          done();
      });
    });
    
  });
  
  describe('Read', function() {
    var userId = null;
    before(function(done) {
      var user = new User();
      user.name = 'testUser';
      user.phone = 'Testland';
      user.email = 'something@something.com';
      user.hashPassword = 'password';
        user.save(
          function(err, res){
            userId = res._id;
            should.not.exist(err);
            done();
          });
    });
    after(function() {
      User.find({name:'testUser'}).remove().exec();
    });
    
    it('should return error trying to read wrong id', function(done) {
      request(url)
        .get('/user/lol')
        .expect(404) //Status code
        .end(function(err, res) {
          should.not.exist(err);
          res.body.should.have.property('message', 'User not found');
          done();
      });
    });
    
    it('should succeed user read', function(done) {
      request(url)
        .get('/user/' + userId)
        .expect(200) //Status code
        .end(function(err, res) {
          should.not.exist(err);
          should.exist(res);
          done();
      });
    });
  });
  
  describe('Patch', function() {
    var userId = null;
    before(function(done) {
      var user = new User();
      user.name = 'testUser';
      user.phone = 'Testland';
      user.email = 'something@something.com';
      user.hashPassword = 'password';
        user.save(
          function(err, res){
            userId = res._id;
            should.not.exist(err);
            done();
          });
    });
    after(function() {
      User.find({name:'testUser'}).remove().exec();
    });

    it('should be able to patch the user', function(done) {
      request(url)
        .patch('/user/')
        .send({"email" : "yolo@yolo.com", "_id" : userId})
        .expect(200) //Status code
        .end(function(err, res) {
          should.not.exist(err);
          should.exist(res);
          res.body.user.should.have.property('email', 'yolo@yolo.com');
          done();
      });
    });
    
     it('should not be able to patch the user with a wrong email', function(done) {
      request(url)
        .patch('/user/')
        .send({"email" : "yoloyolo.com", "_id" : userId})
        .expect(400) //Status code
        .end(function(err, res) {
          should.not.exist(err);
          should.exist(res);
          res.body.should.have.property('message', 'User validation failed');
          res.body.should.have.property('name', 'ValidationError');
          done();
      });
    });
     it('should not be able to patch the user with a wrong email', function(done) {
      request(url)
        .patch('/user/')
        .send({_id: "yolo"})
        .expect(404) //Status code
        .end(function(err, res) {
          should.not.exist(err);
          should.exist(res);
          res.body.should.have.property('message', 'User not found');
          done();
      });
    });
  });

  describe('Patch', function() {
    var userId = null;
    before(function(done) {
      var user = new User();
      user.name = 'testUser';
      user.phone = 'Testland';
      user.email = 'something@something.com';
      user.hashPassword = 'password';
        user.save(
          function(err, res){
            userId = res._id;
            should.not.exist(err);
            done();
          });
    });
    after(function() {
      User.find({name:'testUser'}).remove().exec();
    });

    it('should not be able to delete a character with a wrong id', function(done) {
      request(url)
        .delete('/user/yooooolloooo')
        .expect(404) //Status code
        .end(function(err, res) {
          should.not.exist(err);
          should.exist(res);
          res.body.should.have.property('message', 'User not found');
          done();
      });
    });
    it('should able to delete a character', function(done) {
      request(url)
        .delete('/user/'+ userId)
        .expect(200) //Status code
        .end(function(err, res) {
          should.not.exist(err);
          should.exist(res);
          res.body.should.have.property('message', 'User deleted');
          done();
      });
    });
    
  });
});
