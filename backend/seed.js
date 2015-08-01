var mongoose = require('mongoose');
if(!mongoose.connection.readyState) {
	mongoose.connect('localhost:27017'); //Connect to our database
}
var Character = require('./app/models/character');
var User = require('./app/models/user');

Character.find({}).remove().exec();
User.find({}).remove().exec();

var user1 = new User();
var character1 = new Character();
var character2 = new Character();
var character3 = new Character();

var user2 = new User();
var character4 = new Character();
var character5 = new Character();
var character6 = new Character();

user1.name = 'Mr Unicorn';
user1.phone = '1-555-555-5555';
user1.email = 'mrgn@gn.com';
user1.hashPassword = 'password';
user1.characters = [];

character1.name = 'Elfie';
character1.nationality = 'Elfland';
character1.race = 'elf';
character1.profession = 'botanist';
character1.class = 'bard';
character1.belief = 'Gaïa';
character1.max_hp = 1;
character1.skills = ['berserk', 'decrypt'];
character1.xp = 10;

character2.name = 'Dwarfie';
character2.nationality = 'Dwarfland';
character2.race = 'dwarf';
character2.profession = 'miner';
character2.class = 'warrior';
character2.belief = 'Money over everything';
character2.max_hp = 55;
character2.skills = ['estimate', 'trading'];
character2.xp = 456;

character3.name = 'Humie';
character3.nationality = 'Humanland';
character3.race = 'human';
character3.profession = 'scribe';
character3.class = 'priest';
character3.belief = 'something';
character3.max_hp = 20;
character3.skills = ['meditation', 'concentration', 'hypnosis'];
character3.xp = 700;

user2.name = 'Mrs Bicorn';
user2.phone = '1-888-888-8888';
user2.email = 'mrsgn@gn.com';
user2.hashPassword = 'password';
user2.characters = [];

character4.name = 'Jack';
character4.nationality = 'Midland';
character4.race = 'human';
character4.profession = 'trader';
character4.class = 'thief';
character4.belief = 'Crime rules';
character4.max_hp = 5847;
character4.skills = ['ambidextrous', 'decrypt'];
character4.xp = 47358;

character5.name = 'Jules';
character5.nationality = 'Midland';
character5.race = 'human';
character5.profession = 'botanist';
character5.class = 'wizard';
character5.belief = 'Money over everything';
character5.max_hp = 55;
character5.skills = [];
character5.xp = 456;

// Lol
character1.save(function(err, res) {
	user1.characters.push(res._id);
	character2.save(function(err, res) {
		user1.characters.push(res._id);
		character3.save(function(err, res) {
			user1.characters.push(res._id);
			user1.save(function(err, res2){
				character4.save(function(err, res) {
					user2.characters.push(res._id);
					character5.save(function(err, res) {
						user2.characters.push(res._id);
						user2.save(function(err, res2){
							mongoose.disconnect();
						});
					});
				});
			});
		});
	});
});

