#!/usr/bin/env node

const program = require('commander');
import FizzBuzz from './fizzbuzz';

program
  .version('1.0.0')
  .arguments('<limit>')
  .description('Fizz-buzz generator.', {
    limit: 'An integer.'
  })
  .action((limit: number): void => {
    try {
      let result = FizzBuzz.processUpto(limit);
      console.log(result.join("\n") + "\n");
    }
    catch(e) {
      console.log(e.toString())
    }
  });

program.parse(process.argv)
