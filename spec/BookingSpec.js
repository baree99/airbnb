describe('Booking', function(){

  beforeEach(function(){
    booking = new Booking('agent bond', 'barcelona', Date());
  });

  describe('Booking functionality', function(){
    it('creates a new booking', function(){
      expect(booking).toEqual(jasmine.any(Booking))
    });

    it('has a user', function(){
      expect(booking.user).toBe('agent bond')
    });

    it('has a space', function(){
      expect(booking.space).toBe('barcelona')
    });

    it('has a date', function(){
      expect(booking.date).toEqual(Date())
    });
  });

  describe('approval', function(){
    it('returns pending by default', function(){
      expect(booking.approval).toBe('pending')
    });

    it('changes approval status to confirmed', function(){
      booking.confirmBooking()
      expect(booking.approval).toBe('confirmed')
    });

    it('changes approval status to rejected', function(){
      booking.rejectBooking()
      expect(booking.approval).toBe('rejected')
    });
  });
});
