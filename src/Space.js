var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

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

var spaceSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  availableDates: Array,
  ownerId: String
})
spaceSchema.methods.addAvailableDates = function(startDate, endDate) {
  if (endDate === undefined ) {
    this.availableDates.push(moment(startDate).format('YYYY-MM-DD'))
  } else {
    for (var nextDateToAdd = moment(startDate); nextDateToAdd.isSameOrBefore(endDate); nextDateToAdd.add(1, 'days')) {
      this.availableDates.push(nextDateToAdd.format('YYYY-MM-DD'));
    };
  };
};

var SpaceModel = mongoose.model('SpaceModel', spaceSchema);

module.exports = SpaceModel;
