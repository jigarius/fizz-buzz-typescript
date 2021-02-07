import FizzBuzz from '../../src/fizz-buzz/fizz-buzz';
const expect = require('chai').expect;

describe('class fizz-buzz/fizz-buzz', () => {
  it('.generate() returns fizzbuzz from 1 to 15', () => {
    const expectation = [
      '1', '2', 'fizz',
      '4', 'buzz', 'fizz',
      '7', '8', 'fizz',
      'buzz', '11', 'fizz',
      '13', '14', 'fizzbuzz'
    ];

    expect(FizzBuzz.generate(15)).to.eql(expectation);
  });
});
