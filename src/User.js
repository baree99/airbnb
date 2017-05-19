var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bcrypt = require('bcryptjs');

var productionDB = 'mongodb://heroku_dk72t4z3:cqoe33m364rct5esjopl9ar433@ds143201.mlab.com:43201/heroku_dk72t4z3'
var testDB = "mongodb://localhost/makersBnB"
var devDB = "mongodb://localhost/makersBnB_dev"

if (process.env.NODE_ENV == 'production') {
  thisDB = productionDB
}else if (process.env.NODE_ENV == 'test'){
  thisDB = testDB
}else{
  thisDB = devDB
}

mongoose.connect(thisDB)

var userSchema = new Schema({
  name: String,
  email: String,
  password: String
});

var UserModel = mongoose.model('UserModel', userSchema);
module.exports = UserModel;
