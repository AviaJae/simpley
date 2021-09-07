var inquirer = require('inquirer');
const chalk = require('chalk');



async function ErrorCLI(message){
  console.log((chalk.bold.blue("Simply:  ")) + chalk.bold.bgRed("ERROR") + (chalk.bold ` ${message}`))

}
module.exports = ErrorCLI;