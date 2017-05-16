var UserModel = require('../src/User');
var mongoose = require('mongoose');

describe('Create an instance of UserModel', function() {

  it('should save to the database', function() {
    var userAhmed = new UserModel();
    userAhmed.name = 'Nigel';
    userAhmed.email = 'nigel@egypt.com';
    userAhmed.password = '123456';
    userAhmed.save(function(err) {
      expect(err).toBeNull();
      UserModel.find(function(err, result) {
        expect(result[2].name).toBe('Nigel');
      });
    });
  });
});
