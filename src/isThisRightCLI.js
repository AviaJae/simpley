var inquirer = require('inquirer');
const chalk = require('chalk');


const cli = require('./cli')

function isThisRightCLI(answers){
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
});
}
module.exports = isThisRightCLI;