var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

const log = console.log;

// Combine styled and normal strings
log(chalk.underline.magentaBright('Hello') + 'World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgWhite.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.underline.yellow('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.cyan(
  'Hi, my name is cyan ' +
  chalk.gray.underline.bold('with a gray substring') +
  ' that becomes cyan again!'
));