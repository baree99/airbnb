var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/makersBnB')
var moment = require('moment');

var spaceSchema = new Schema({
  name: String,
  description: String,
  price: String,
  availableDates: Array
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

// function Space(name, description, price) {
//   this.name = name
//   this.description = description
//   this.price = price
//   this.availableDates = [];
// }



module.exports = SpaceModel;
