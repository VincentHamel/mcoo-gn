var should = require('should');
var assert = require('assert');
var request = require('supertest');
var mongoose = require('mongoose');
if(!mongoose.connection.readyState) {
	mongoose.connect('localhost:27017'); //Connect to our database
}

//Unit test
describe('Server', function() {
    it('should be running mongod', function(done) {
        should.exist(mongoose.connection.readyState);
		done();
    });
});
