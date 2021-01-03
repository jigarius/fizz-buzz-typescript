import FizzBuzzInteger from '../../src/fizz-buzz/integer';
const expect = require('chai').expect;

describe('class fizz-buzz/integer', () => {
  it('returns "fizz" if number is divisible by 3', () => {
    for (let n of [3, 6, 333]) {
      const i = new FizzBuzzInteger(n);
      expect(i.toString()).to.equal('fizz');
    }
  });

  it('returns "buzz" if number is divisible by 5', () => {
    for (let n of [5, 10, 500]) {
      const i = new FizzBuzzInteger(n);
      expect(i.toString()).to.equal('buzz');
    }
  });

  it('returns "fizzbuzz" if number is divisible by 15', () => {
    for (let n of [15, 30, 225]) {
      const i = new FizzBuzzInteger(n);
      expect(i.toString()).to.equal('fizzbuzz');
    }
  });

  it('returns the number when not divisible by 3 or 5', () => {
    for (let n of [2, 13, 1001]) {
      const i = new FizzBuzzInteger(n);
      expect(i.toString()).to.equal(n.toString());
    }
  });

  it('throws error for invalid arguments', () => {
    for (let n of [19.5, -9]) {
      expect(() => {
        new FizzBuzzInteger(n);
      }).to.throw('Number must be a positive integer.');
    }
  });
});
