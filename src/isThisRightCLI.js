var inquirer = require('inquirer');
const chalk = require('chalk');

const templateGen = require('./templateGen');

const cli = require('./cli')

function isThisRightCLI(answers){

  const a = answers;
  console.log(chalk.bold("-------------"))
inquirer.prompt([
  {
    type: 'confirm',
    name: 'IsTheRight',
    message: ` Project Name: ${answers.Name}
    Language: ${answers.Language}
    Project Type: ${answers.Type}
    Token: ${answers.Token}
    Is This Correct?`
  }
]).then(answers => {
if (!answers.IsTheRight) return cli();

templateGen(a);
});
}
module.exports = isThisRightCLI;