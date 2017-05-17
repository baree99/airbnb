var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/makersBnB')

var userSchema = new Schema({
  name: String,
  email: String,
  password: String
});

var UserModel = mongoose.model('UserModel', userSchema);

function User(params) {
  var testUser = new UserModel();
  testUser.name = params.name;
  testUser.email = params.email;
  testUser.password = params.password;
  testUser.save(function(err) {
    expect(err).toBeNull();
  });
}

module.exports = UserModel;
