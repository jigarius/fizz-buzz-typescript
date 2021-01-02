class FizzBuzz {
  static processNumber(n: number): string {
    const result = new FizzBuzzNumber(n);
    return result.toString();
  }

  static processUpto(limit: number): string[] {
    const result: string[] = [];
    for (let i: number = 1; i <= limit; i++) {
      result.push(FizzBuzz.processNumber(i));
    }
    return result;
  }
}

// TODO: Is it possible to have FizzBuzz.Number instead?
class FizzBuzzNumber {
  constructor(readonly n: number) {
    // TODO: Why doesn't Number.isInteger() work?
    if (n % 1 !== 0) {
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

    return this.n.toString();
  }

  private isFizz(): boolean {
    return this.n % 3 === 0;
  }

  private isBuzz(): boolean {
    return this.n % 5 === 0;
  }

  private isFizzBuzz(): boolean {
    return this.isFizz() && this.isBuzz();
  }
}

export default FizzBuzz;
