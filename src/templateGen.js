function templateGen(answers){
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const errorCLI = require('./errorCLI');

fs.mkdir(`./${answers.Name}`, (err) => {
    if (err) {
        throw err;
    }
});


var copy = require('recursive-copy');

copy(`./Simpley/temp/${answers.Language}/${answers.Type}`, `./${answers.Name}`, function(error, results) {
	if (error) {
		errorCLI("Unable To Create Files!")
	} else {
		console.log((chalk.bold.blue("Simpley:  ")) + (chalk.bold.bgGreenBright("SUCCESS") + ` Made ${results.length - 1} file(s)`));
	}
});



}
module.exports = templateGen;