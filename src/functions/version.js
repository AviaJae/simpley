function command(){
    const chalk = require('chalk');
const pckg = require('../../package.json')
console.log(chalk.bold.blue("Simpley Version: ") + pckg.version)
}
module.exports = command;