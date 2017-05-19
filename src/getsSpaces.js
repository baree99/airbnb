var SpaceModel = require('./Space');

function GetSpace() {
  SpaceModel.find({}, function(err, space){
  return space
})};

module.exports = GetSpace;
