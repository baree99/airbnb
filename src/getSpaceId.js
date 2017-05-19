var UserModel = require('./User');

function GetUser(space-name) {
  UserModel.find({'email': email}, function(err, users){
  return users[0]._id
})};

module.exports = getSpaceId;
