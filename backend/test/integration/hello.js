var should = require('should');
var assert = require('assert');
var request = require('supertest');


//Testing API
describe('Routing', function() {
  var url = 'localhost:8080';
  // use describe to give a title to your test suite, in this case the tile is "Account"
  // and then specify a function in which we are going to declare all the tests
  // we want to run. Each test starts with the function it() and as a first argument
  // we have to provide a meaningful title for it, whereas as the second argument we
  // specify a function that takes a single parameter, "done", that we will use
  // to specify when our test is completed, and that's what makes easy
  // to perform async test!
  describe('HelloWorld', function() {
    it('should return error trying to get non-existing helloworld', function(done) {
    // once we have specified the info we want to send to the server via POST verb,
    // we need to actually perform the action on the resource, in this case we want to
    // POST on /api/profiles and we want to send some info
    // We do this using the request object, requiring supertest!
    request(url)
    .get('/hello/foobar42')
    .expect(404)
    .end(function(err, res) {
          if (err) {
            throw err;
          }
          // this is should.js syntax, very clear
          res.body.should.have.property('message', 'Hello not found');
          done();
        });
    });
    it('should create a hello', function(done) {
      var profile = {
        name: 'foo'
      };
    request(url)
    .post('/hello')
    .send(profile)
    // end handles the response
    .expect(200) //Status code
    .end(function(err, res) {
          if (err) {
            throw err;
          }
          // this is should.js syntax, very clear
          res.body.should.have.property('message', 'Hello created!');
          done();
        });
    });

    it('should return an object', function(done){
    request(url)
        .get('/hello/foo')
        .expect('Content-Type', /json/)
        .expect(200) //Status code
        .end(function(err,res) {
            if (err) {
                throw err;
            }
            // Should.js fluent syntax applied
            res.body.should.have.property('_id');
            res.body.name.should.equal('foo');
            done();
        });
    });
  });
});
