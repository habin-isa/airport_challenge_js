describe ('Fizzbuzz', function() {
  var num;

  beforeEach(function() {
    num = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expect(num.play(3)).toEqual('Fizz');
    });
  })

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
      expect(num.play(5)).toEqual('Buzz');
    });
  });

  describe('multiples of 3 and 5', function() {
    it('fizzbuzzes for 15', function() {
      expect(num.play(15)).toEqual('FizzBuzz');
    });
  });
});
