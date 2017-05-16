var UserModel = require('../src/User');
var mongoose = require('mongoose');

describe('Create an instance of UserModel', function() {

  // afterEach(function() {
  //   UserModel.remove({}, function(err) {
  //     console.log('collection removed');
  //   });
  // });

  it('should save to the database', function() {
    var userAhmed = new UserModel();
    userAhmed.name = 'Nigel';
    userAhmed.email = 'nigel@egypt.com';
    userAhmed.password = '123456';
    userAhmed.save(function(err) {
      expect(err).toBeNull();

    });

    it('jdjd', function() {
      //UserModel.find(function(err, result) {
      console.log(UserModel.findOne({'name': 'Nigel'}))
        expect(db.usermodels.findOne({'name': 'Nigel'})).toBe('Nenn')
        //expect(result.name).toBe('Ben');

    });
  });
});
