
var UserModel = require('../src/User');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;


describe('Create an instance of UserModel', function() {

  beforeAll(function(done) {
    UserModel.remove({}, function(err) {
      console.log('collection removed');
      done();
    });

  });


  it('should save to the database', function(done) {
    var testUser = new UserModel();
    testUser.name = 'Try';
    testUser.email = 'nigel@egypt.com';
    testUser.password = '123456';
    testUser.save(function(err) {
      expect(err).toBeNull();
    });

    done();
  });


  it('can call back data', function(done) {
      // DATABASE QUERY HERE
      done()
  });
});
