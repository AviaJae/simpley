var inquirer = require('inquirer');
const chalk = require('chalk');

const isThisRightCLI = require('./isThisRightCLI');
const ErrorCLI = require('./errorCLI');


function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}  




async function optionsCLI(){



    console.log(chalk.bold.blue("Simply Setup"))
    console.log(chalk.bold("-------------"))
inquirer
  .prompt([
    {
        type: 'input',
        name: 'Name',
        message: "Whats The Project Name?",
        default: "Simply Project"
        
    },
    {
        type: 'list',
        name: 'Language',
        message: "'What Language Would You Like The Bot To Be Coded In?",
        choices: ['JavaScript'],
        default: 'JavaScript'
    },
    {
        type: 'list',
        name: 'Type',
        message: 'What Type Of Project Do You Want Made?',
        choices: ['Command Handler', 'Events Handler', 'Slash Command Hander', 'All Of The Above']
    },
    {
      type: 'password',
      name: 'Token',
      message: 'Whats The Bots Token?'
    }
  ])
  .then(async(answers) => {

    if (!answers.Token) { 
console.clear();
 ErrorCLI("No Token Entered!")
 return;
    }

    isThisRightCLI(answers)



  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      console.log(error)
    }
  });
}

module.exports = optionsCLI;