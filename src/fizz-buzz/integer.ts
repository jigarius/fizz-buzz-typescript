// TODO: Is it possible to do FizzBuzz.Integer instead?
class Integer {
  constructor(readonly n: number) {
    // TODO: Why doesn't Number.isInteger() work?
    if (n <= 0 || n % 1 !== 0) {
      throw Error('Number must be a positive integer.')
    }
  }

  toString(): string {
    let result: string = '';

    if (this.isFizz()) {
      result += 'fizz';
    }

    if (this.isBuzz()) {
      result += 'buzz';
    }

    if (!result) {
      result = this.n.toString();
    }

    return result;
  }

  private isFizz(): boolean {
    return this.n % 3 === 0;
  }

  private isBuzz(): boolean {
    return this.n % 5 === 0;
  }
}

export default Integer;
