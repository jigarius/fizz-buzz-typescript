import FizzBuzzInteger from './integer'

class FizzBuzz {
  static generate(limit: number): string[] {
    const result: string[] = [];
    for (let i: number = 1; i <= limit; i++) {
      const item = new FizzBuzzInteger(i);
      result.push(item.toString());
    }
    return result;
  }
}

export default FizzBuzz;
