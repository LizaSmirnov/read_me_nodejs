
const inquirer = require('inquirer');
const readMeQuestions = require("./questions")
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

function writeFile(fileName, data) {
    fs.writeFile(fileName,data, err => err? console.log(err) : console.log("Successfully wrote my file!"))
  }
  
  function init() {
    inquirer
    .prompt (readMeQuestions)
    .then((response) =>{
      console.log(response)
      writeFile("ReadMe.md", generateMarkdown(response))
  });
    
  }

// Function call to initialize app
init();


