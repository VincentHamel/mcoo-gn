var should = require('should');
var mongoose = require('mongoose');
if(!mongoose.connection.readyState) {
	mongoose.connect('localhost:27017'); //Connect to our database
}

//Unit test
describe('userModel', function() {
  it('Should create a user', function(done) {
    var User = require('../../app/models/user');

    User.find({name:'userTest'}).remove().exec();

    var user = new User();
    user.name = 'userTest';
    user.phone = 'Testland';
    user.email = 'something@something.com';
	user.hashPassword = 'password';
	
    user.save(
      function(err, res){
        done(err);
      });
	  
  });
  
  it('Should create the first user and not the second', function(done) {
    var User = require('../../app/models/user');

    User.find({name:'userTest'}).remove().exec();

    var user = new User();
    user.name = 'userTest';
    user.phone = 'Testland';
    user.email = 'something@something.com';
	user.hashPassword = 'password';

    var newuser = new User();
    newuser.name = 'userTest';
    newuser.phone = 'Testland';
    newuser.email = 'something@something.com';
	newuser.hashPassword = 'psswrd';


    user.save(
      function(err){
        should.not.exist(err);
        newuser.save(
          function(err){
            should.exist(err);
            done();
          });
      });
  });
  
   it('Add characters to user', function(done) {
		var User = require('../../app/models/user');
		var Character = require('../../app/models/character');

		User.find({name:'userTest'}).remove().exec();
		
		var user = new User();
		user.name = 'userCharacterTest';
		user.phone = 'Testland';
		user.email = 'something@something2.com';
		user.hashPassword = 'password';
		user.characters = [];

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
			should.not.exist(err);
			user.characters.push(res._id);
			user.save(function(err, res2){
				should.not.exist(err);
				done();
			});
		});
	});
	
	

  
  after(function(done) {
    var User = require('../../app/models/user');
	var Character = require('../../app/models/character');

    User.find({name:'userTest'}).remove().exec();
	User.find({name:'userCharacterTest'}).remove().exec();
	Character.find({name:'Test'}).remove().exec();
    done();
  });
});
