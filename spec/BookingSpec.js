describe('Booking', function(){

  beforeEach(function(){
    booking = new Booking();
  });

  describe('Booking functionality', function(){
    it('creates a new booking', function(){
      expect(booking).toEqual(jasmine.any(Booking))
    });
  });
});
