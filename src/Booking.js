var mongoose = require('mongoose');
var Schema = mongoose.Schema;
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

var bookingSchema = new Schema({
  userId: String,
  spaceId: String,
  spaceName: String,
  date: String,
  ownerId: String,
  approval: {type: String, default: 'pending'}
})

bookingSchema.methods.confirmBooking = function () {
  this.approval = 'confirmed'
};

bookingSchema.methods.rejectBooking = function () {
  this.approval = 'rejected'
};

var BookingModel = mongoose.model('BookingModel', bookingSchema);

module.exports = BookingModel;
