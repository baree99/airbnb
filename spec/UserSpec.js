describe('User', function() {

  beforeEach(function() {
    user = new User('Ahmed', 'ahmed@egypt.com', '123456');
  });

  describe('User functionality', function() {
    it('creates a new user', function() {
      expect(user).toEqual(jasmine.any(User));
    });

    it('has a name', function() {
      expect(user.name).toBe('Ahmed');
    });

    it('has an email', function() {
      expect(user.email).toBe('ahmed@egypt.com');
    });

    it('has a password', function() {
      expect(user.password).toBe('123456');
    });
  });
});
