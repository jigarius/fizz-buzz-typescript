import FizzBuzzInteger from './integer'

class FizzBuzz {
  static processNumber(n: number): string {
    const result = new FizzBuzzInteger(n);
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

export default FizzBuzz;
