var should = require('should');
var assert = require('assert');
var request = require('supertest');

//Unit test
describe('Foo', function() {
    it('should be returning bar', function() {
        var foo = require('../app/models/foo');
        foo().should.equal('bar');
    });
});
