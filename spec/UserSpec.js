
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
      var userAhmed = new UserModel();
      userAhmed.name = 'Nigel';
      userAhmed.email = 'nigel@egypt.com';
      userAhmed.password = '123456';
      userAhmed.save(function(err) {
        expect(err).toBeNull();
      });

        done();
        });


      it('bloody better work', function(done) {
        testSample = UserModel.find(function (err, users) {
          if (err) return console.error(err);
          return users;
        })
        console.log(testSample)
        done();
            });
    });




// var UserModel = require('../src/User');
// var mongoose = require('mongoose');
//
// describe('Create an instance of UserModel', function() {
//
//   // beforeEach(function() {
//   //   UserModel.remove({}, function(err) {
//   //     console.log('collection removed');
//   //   });
//   // });
//
//
//   it('should save to the database', function() {
//     var testName;
//     var userAhmed = new UserModel();
//     userAhmed.name = 'Nigel';
//     userAhmed.email = 'nigel@egypt.com';
//     userAhmed.password = '123456';
//     userAhmed.save(function(err) {
//       expect(err).toBeNull();
//     });
//
// function testName() {
//   UserModel.find(function (err, users) {
//   if (err) return console.error(err);
//   return users[0].name;
// })
//
//     console.log(testName())
//     expect(testName()).toEqual('Nigel')
//     });
//
//   });
