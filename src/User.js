var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
mongoose.connect('mongodb://localhost/makersBnB')

var userSchema = new Schema({
  name: String,
  email: String,
  password: String
});



function User(params) {
  var testUser = new UserModel();
  testUser.name = params.name;
  testUser.email = params.email;
  testUser.password = params.password;
  testUser.save(function(err) {
    expect(err).toBeNull();
  });
};

userSchema.methods.authentication = function(emails, password) {
  user.find({email: emails}, function(err, users) {
    console.log(users[0].name)
  });
};

// module.exports = UserModel;
var UserModel = mongoose.model('UserModel', userSchema);
module.exports = mongoose.model('UserModel', userSchema);
