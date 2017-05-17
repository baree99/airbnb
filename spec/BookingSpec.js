var BookingModel = require("../src/booking");

beforeAll(function(done) {
  BookingModel.remove({}, function(err){
    console.log('booking collection removed')
    done();
  });
});

describe('Booking', function(){

var bookingTest = new BookingModel();
bookingTest.user = 'TestyMcTestFace'
bookingTest.space = 'SpaceMcSpacePlace'
bookingTest.date = '2017-05-17'
bookingTest.save(function(err){
  expect(err).toBeNull();
});

    it('has a user', function(){
      expect(bookingTest.user).toBe('TestyMcTestFace')
    });

    it('has a space', function(){
      expect(bookingTest.space).toBe('SpaceMcSpacePlace')
    });

    it('has a date', function(){
      expect(bookingTest.date).toEqual('2017-05-17')
    });

    it('returns pending by default', function(){
      expect(bookingTest.approval).toBe('pending')
    });

    it('changes approval status to confirmed', function(){
      bookingTest.confirmBooking()
      expect(bookingTest.approval).toBe('confirmed')
    });

    it('changes approval status to rejected', function(){
      bookingTest.rejectBooking()
      expect(bookingTest.approval).toBe('rejected')
    });
  });
