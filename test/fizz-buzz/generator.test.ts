import Generator from '../../src/fizz-buzz/generator';
const expect = require('chai').expect;

describe('class fizz-buzz/generator', () => {
  it('.generate() returns fizzbuzz from 1 to 15', () => {
    const expectation = [
      '1', '2', 'fizz',
      '4', 'buzz', 'fizz',
      '7', '8', 'fizz',
      'buzz', '11', 'fizz',
      '13', '14', 'fizzbuzz'
    ];

    expect(Generator.generate(15)).to.eql(expectation);
  });
});
