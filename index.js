// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = ({description, tableOfContents, installation, usage, license, contributing, tests, questions}) => {
    return //!DOCTYPE
}
//##Title
//${title}
// ##Description
//${description}
// ##Table of Contents
//${tableOfContents}
// ##Installation
//${installation}
// ##Usage
//${usage} 
// ##License
//${license}
// ##Contributing
//${contributing}
// ##Tests 
//${tests}
// ##Questions
//${questions}


inquirer
.prompt ([
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please enter description:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please enter installation instructions:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Please enter usage information:',
    name: 'usage',
  }, 
  {
    type: 'input',
    message: 'Please enter contribution guidelines:',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Please enter test instructions:',
    name: 'installation',
  },
])
.then((response) =>
 console.log('Success!')
);


const fs = require('fs');
// TODO: Create a function to write README file
fs.writeFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


