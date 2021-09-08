function command(){
    
const chalk = require('chalk');

    console.log("\r\n" + chalk.bold.underline.blue("Simpley Info") + "\r\n\r\n" + (chalk.bold.underline.italic("Commands:")) + "\r\n" + (chalk.bold("info")) + ": Shows This Page\r\n" + (chalk.bold("setup")) + ": Create New Project\r\n" + (chalk.bold("version")) + ": Show Current Simpley Version\r\n")


}
module.exports = command;