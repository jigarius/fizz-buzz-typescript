// TODO: Is it possible to do FizzBuzz.Integer instead?
export class Integer {
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
