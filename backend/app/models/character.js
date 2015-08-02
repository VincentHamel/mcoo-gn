var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Skills = ['ambidextrous', 'berserk', 'meditation', 'estimate', 'decrypt', 'concentration', 'trading', 'hypnosis'];

function validatorSkills(v) {
    return v.every(function(val) {
        return Skills.indexOf(val) >= 0;
    });
}

var CharacterSchema = new Schema({
    name: { type: String, required: true},
    nationality: { type: String, required: true},
    race: {type: String, enum: ['human', 'elf', 'dwarf'], required: true},
    profession: {type: String, enum: ['botanist', 'miner', 'blacksmith', 'scribe', 'trader'], required: true},
    class: {type: String, enum: ['warrior', 'wizard', 'bard', 'priest', 'thief'], required: true},
    belief: { type: String, required: true},
    max_hp: { type: Number, required: true},
    skills: {type: [String], validate: validatorSkills},
    xp: { type: Number, required: true}
});

module.exports = mongoose.model('Character', CharacterSchema);