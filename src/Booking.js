function Booking(user, space, date){
  this.user = user
  this.space = space
  this.date = date
  this.approval = 'pending'
};

Booking.prototype.confirmBooking = function () {
  this.approval = 'confirmed'
};

Booking.prototype.rejectBooking = function () {
  this.approval = 'rejected'
};

module.exports = Booking;
