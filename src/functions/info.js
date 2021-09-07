function command(){
    
const chalk = require('chalk');

    console.log("\r\n" + chalk.bold.underline.blue("Simpley Info") + "\r\n\r\n" + (chalk.bold.underline.italic("Commands:")) + "\r\n" + (chalk.bold("info") + ": Show This Page\r\n" + (chalk.bold("setup")) + ": Start Simpley Setup"))


}
module.exports = command;