process.env.NODE_ENV='test'
var BookingModel = require("../src/booking");

describe('Booking', function(){

  beforeAll(function(done) {
    BookingModel.remove({}, function(err){
    });
    var bookingTest = new BookingModel();
    bookingTest.userId = 'ACB12345'
    bookingTest.spaceId = 'XYZ98765'
    bookingTest.date = '2017-05-17'
    bookingTest.save(function(err){
      done()
    });
  });

  it('should save to the database', function(done) {
    BookingModel.find({ 'spaceId' : 'XYZ98765' }, function(err, bookings) {
      expect(bookings[0].userId).toBe('ACB12345')
      expect(bookings[0].spaceId).toBe('XYZ98765')
      expect(bookings[0].date).toBe('2017-05-17')
      expect(bookings[0].approval).toBe('pending')
      done();
    });
  });

  it('booking approval', function(done) {
    BookingModel.find({ 'spaceId' : 'XYZ98765' }, function(err, bookings) {
      bookings[0].confirmBooking()
      expect(bookings[0].approval).toBe('confirmed')
      done();
    });
  });

  it('booking rejection', function(done) {
    BookingModel.find({ 'spaceId' : 'XYZ98765' }, function(err, bookings) {
      bookings[0].rejectBooking()
      expect(bookings[0].approval).toBe('rejected')
      done();
    });
  });

});
