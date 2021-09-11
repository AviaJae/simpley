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

copy(`./Simpley/templates/${answers.Language}/${answers.Type}`, `./${answers.Name}`, function(error, results) {
	if (error) {
		errorCLI("Unable To Create Files!\r\n" + error)
	} else {
		console.log((chalk.bold.blue("Simpley:  ")) + (chalk.bold.bgGreenBright("SUCCESS") + ` Made ${results.length} file(s)`));
	}
});


var content = `{
	"token": "${answers.Token}"
  }`;
  
  try{
   fs.writeFileSync(`./${answers.Name}/config.json`, content);
  }catch (e){
	   console.log("Cannot write file ", e);
  }

}
module.exports = templateGen;