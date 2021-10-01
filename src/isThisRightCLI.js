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
if (a.Type === "Dashboard") return console.log(chalk.bold.yellow("Please Fill In The Inputs Required In Config.json"))

});
}
module.exports = isThisRightCLI;