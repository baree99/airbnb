describe('Booking', function(){

  beforeEach(function(){
    booking = new Booking('agent bond');
  });

  describe('Booking functionality', function(){
    it('creates a new booking', function(){
      expect(booking).toEqual(jasmine.any(Booking))
    });

    it('has a user', function(){
      expect(booking.user).toBe('agent bond')
    });
  });
});
