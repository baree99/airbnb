process.env.NODE_ENV = 'test'
var UserModel = require('../src/User');
var mongoose = require('mongoose');

describe('Create an instance of UserModel', function() {

  beforeAll(function(done) {
    UserModel.remove({}, function(err) {
      var testUser = new UserModel();
      testUser.name = 'Nigel';
      testUser.email = 'nigel@egypt.com';
      testUser.password = '123456';
      testUser.save(function(err) {
        done();
      });
    });
  });

  it('should save to the database', function(done) {
    UserModel.find({'name': 'Nigel' }, function(err, users) {
      expect(users[0].name).toBe('Nigel')
      expect(users[0].email).toBe('nigel@egypt.com')
      //expect(users[0].password).not.toBe('123456') //bcrpyt
      done();
    });
  });
});

describe('requires an email', function() {

  beforeAll(function(done) {
    UserModel.remove({}, function(err) {
      var testUser = new UserModel();
      testUser.name = 'Nigel';
      testUser.password = '123456';
      testUser.save(function(err) {
        done();
      });
    });
  });

  it('should not save to the database', function(done) {
    UserModel.find({}, function(err, users) {
      expect(users).toEqual([  ])
      done();
    });
  });
});

describe('Two users', function() {

  beforeAll(function(done) {
    UserModel.remove({}, function(err) {
      var testUser = new UserModel();
      testUser.name = 'Nigel';
      testUser.email = 'nigel@egypt.com';
      testUser.password = '123456';
      testUser.save(function(err) {
      });
      var testUser2 = new UserModel();
      testUser2.name = 'Nigel';
      testUser2.email = 'next@egypt.com';
      testUser2.password = '123456';
      testUser2.save(function(err) {
        done();
      });
    });
  });

  it('can save two users', function(done){
    UserModel.find({}, function(err, users) {
      expect(users.length).toBe(2)
      done();
    });
  })
});
describe('Two users with same email', function() {

  beforeAll(function(done) {
    UserModel.remove({}, function(err) {
      var testUser = new UserModel();
      testUser.name = 'Nigel';
      testUser.email = 'nigel@egypt.com';
      testUser.password = '123456';
      testUser.save(function(err) {
      });
      var testUser2 = new UserModel();
      testUser2.name = 'Nigel';
      testUser2.email = 'nigel@egypt.com';
      testUser2.password = '123456';
      testUser2.save(function(err) {
        done();
      });
    });
  });

  it('can save two users', function(done){
    UserModel.find({}, function(err, users) {
      expect(users.length).toBe(1)
      done();
    });
  })
});
