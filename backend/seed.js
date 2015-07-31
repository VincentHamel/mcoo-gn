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

user1.name = 'Mr Unicorn';
user1.phone = '1-555-555-5555';
user1.email = 'gn@gn.com';
user1.hashPassword = 'user1user1password';
user1.characters = [];

character1.name = 'Elfie';
character1.nationality = 'Testland';
character1.race = 'elf';
character1.profession = 'botanist';
character1.class = 'bard';
character1.belief = 'Gaïa';
character1.max_hp = 1;
character1.skills = ['berserk', 'decrypt'];
character1.xp = 10;

character2.name = 'Dwarfie';
character2.nationality = 'Testland';
character2.race = 'dwarf';
character2.profession = 'miner';
character2.class = 'warrior';
character2.belief = 'Money over everything';
character2.max_hp = 55;
character2.skills = ['estimate', 'trading'];
character2.xp = 456;

character3.name = 'Humie';
character3.nationality = 'Testland';
character3.race = 'elf';
character3.profession = 'scribe';
character3.class = 'priest';
character3.belief = 'something';
character3.max_hp = 55;
character3.skills = ['meditation', 'concentration', 'hypnosis'];
character3.xp = 456;

character1.save(function(err, res) {
	user1.characters.push(res._id);
	character2.save(function(err, res) {
		user1.characters.push(res._id);
		character3.save(function(err, res) {
			user1.characters.push(res._id);
			user1.save(function(err, res2){
				mongoose.disconnect();
			});
		});
	});
});

