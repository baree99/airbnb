var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/makersBnB')

var bookingSchema = new Schema({
  user: String,
  space: String,
  date: String,
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
