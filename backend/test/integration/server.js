var should = require('should');
var assert = require('assert');
var request = require('supertest');

//Unit test
describe('Server', function() {
    it('should be running mongod', function(done) {
        var mongoose = require('mongoose');
        mongoose.connection.on('error', function(err) {
            done(err);
        });
        mongoose.connection.on('open', function() {
            done();
        });
        mongoose.connect('localhost:27017');
    });
});
