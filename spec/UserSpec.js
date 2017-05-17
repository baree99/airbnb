var UserModel = require('../src/User');
var mongoose = require('mongoose');

describe('Create an instance of UserModel', function() {

  beforeAll(function(done) {
    UserModel.remove({}, function(err) {
      console.log('collection removed');
      done();
    });

  });


  it('should save to the database', function(done) {
    var testUser = new UserModel();
    testUser.name = 'nigel';
    testUser.email = 'nigel@egypt.com';
    testUser.password = '123456';
    testUser.save(function(err) {
      expect(err).toBeNull();
    });

    done();
  });


  it('can call back data', function(done) {

    UserModel.find({name: 'nigel'}, function(err, names) {
      done()
      console.log(names[0].name)
    });
  });
});
