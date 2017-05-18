var UserModel = require('./User');

authentication = function(subtmitted_email, submitted_password) {
  UserModel.find({email: subtmitted_email}, function(err, users) {
    if (submitted_password === users[0].password) {console.log("Ok")}
    else {console.log("Nope")}
  });
};
