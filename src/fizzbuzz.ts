class FizzBuzz {
  static processNumber(number: number): string {
    let result = new FizzBuzzNumber(number);
    return result.toString();
  }

  static processUpto(limit: number): Array<string> {
    let result: Array<string> = [];
    for (let i: number = 1; i <= limit; i++) {
      result.push(FizzBuzz.processNumber(i));
    }
    return result;
  }
}

// TODO: Is it possible to have FizzBuzz.Number instead?
class FizzBuzzNumber {
  constructor(readonly number: number) {
    // TODO: Why doesn't Number.isInteger() work?
    if (number % 1 !== 0) {
      throw Error('Number must be an integer.')
    }
  }

  toString(): string {
    if (this.isFizzBuzz()) {
      return 'fizzbuzz';
    }

    if (this.isFizz()) {
      return 'fizz';
    }

    if (this.isBuzz()) {
      return 'buzz';
    }

    return this.number.toString();
  }

  private isFizz(): boolean {
    return this.number % 3 == 0;
  }

  private isBuzz(): boolean {
    return this.number % 5 == 0;
  }

  private isFizzBuzz(): boolean {
    return this.isFizz() && this.isBuzz();
  }
}

export default FizzBuzz;
