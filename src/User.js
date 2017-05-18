var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
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

userSchema.methods.authentication = function(emails, password) {
  user.find({email: emails}, function(err, users) {
    console.log(users[0].name)
  });
};

//   UserModel.find( { 'email': email }, function(err, users) {
//     // bcrypt.compareSync(password, users[0].password)
//     console.log(password)
//     console.log(users[0].password)
//   }
// }

module.exports = UserModel;
module.exports = mongoose.model('UserModel', userSchema);
