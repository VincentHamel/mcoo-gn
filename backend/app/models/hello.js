var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var HelloWorldSchema = new Schema({
        name: String
});

module.exports = mongoose.model('HelloWorld', HelloWorldSchema);
