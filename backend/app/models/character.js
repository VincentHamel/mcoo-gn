var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Skills = ['ambidextrous', 'berserk', 'meditation', 'estimate', 'decrypt', 'concentration', 'trading', 'hypnosis'];

function validatorSkills(v) {
    return v.every(function(val) {
        return Skills.indexOf(val) >= 0;
    });
}

var CharacterSchema = new Schema({
    name: {type: String, unique: true},
    nationality: String,
    race: {type: String, enum: ['humain', 'elf', 'dwarf']},
    profession: {type: String, enum: ['botanist', 'miner', 'forgeron', 'scribe', 'trader']},
    class: {type: String, enum: ['warrior', 'wizard', 'bard', 'priest', 'thief']},
    belief: String,
    max_hp: Number,
    skills: {type: [String], validate: validatorSkills},
    xp: Number
});

module.exports = mongoose.model('Character', CharacterSchema);