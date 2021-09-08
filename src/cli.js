import arg from 'arg';
import inquirer from 'inquirer';
import fs from 'fs';

function parseArgumentsIntoOptions(rawArgs) {
 const args = arg(
   {
     

   },
   {
     argv: rawArgs.slice(2),
   }
 );
 return {
   cmd: args._[0]
 };``
}

const errorCLI = require('./errorCLI');
const optionsCLI = require('./optionsCLI');

export async function cli(args) {
 let options = parseArgumentsIntoOptions(args);
 const command = require(`./functions/info`)
 if (!options.cmd) return command();

 fs.access(__dirname + `/functions/${options.cmd}.js`, (err) => {
  if (err) {
      errorCLI("Command Not Found!");
      return;
  } else {
      const command = require(`./functions/${options.cmd}`)
      command();
  }
});
}