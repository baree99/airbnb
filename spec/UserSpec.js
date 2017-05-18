var UserModel = require('../src/User');
var mongoose = require('mongoose');

describe('Create an instance of UserModel', function() {

  beforeAll(function(done) {
    UserModel.remove({}, function(err) {
      var testUser = new UserModel();
      testUser.name = 'Nigel';
      testUser.email = 'nigel@egypt.com';
      //testUser.password = '123456';
      testUser.save(function(err) {
        done();
      });
    });
  });

  it('should save to the database', function(done) {
    UserModel.find({'name': 'Nigel' }, function(err, users) {
      expect(users[0].name).toBe('Nigel')
      expect(users[0].email).toBe('nigel@egypt.com')
      //expect(users[0].password).not.toBe('123456')
      done();
    });
  });
});
