import Generator from './generator';
import CLI = require('commander');

CLI
  .version('1.0.0')
  .arguments('<limit>')
  .description('Fizz-buzz generator.', {
    limit: 'An integer.'
  })
  .action((limit: number): void => {
    try {
      const result = Generator.generate(limit);
      console.log(result.join("\n") + "\n");
    }
    catch(e) {
      console.log(e.toString())
    }
  });

export default CLI;
