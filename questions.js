module.exports = [
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
      validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter your project title! Very important for a read me.');
            return false;
        }
    }
    },
    {
      type: 'input',
      message: 'Please enter description of your project?',
      name: 'description',
      validate: desciptionInput => {
        if (desciptionInput){
            return true;
        } else {
            console.log('Please enter a description of your project. Focus on the main points you need your users to know.');
        }
        }
      },
    {
      type: 'input',
      message: 'Please enter installation instructions:',
      name: 'installation',
      validate: inputInstall => {
        if (inputInstall){
            return true;
        }else {
            return console.log('Please enter installation instructions for your project. What are somethings neccessary for your users to have to be able to run this application?')
        }
      }
    },
    {
      type: 'input',
      message: 'Please enter usage information:',
      name: 'usage',
      validate: usageInput => {
        if (usageInput){
            return true;
        } else {
            console.log('Please enter a usage information for your project. Information that will allow user to navigate your project.');
        }
    }
    }, 
    {
      type: 'input',
      message: 'Please enter contribution guidelines:',
      name: 'contribution',
      validate: conInput => {
        if (conInput){
            return true;
        } else {
            console.log('Please enter contribution guidelines for your project.');
        }
    }
    },
    {
      type: 'input',
      message: 'Please enter test instructions:',
      name: 'test',
      validate: testInput => {
        if (testInput){
            return true;
        } else {
            console.log('Please enter test instructions for the user.');
        }
    }
    },
    {
      type: 'input',
      message: 'Please enter your github username:',
      name: 'questions',
      validate: githubInput=> {
        if (githubInput.length > 6) {
        return true
        } else {
        return console.log('A valid GitHub username is required.')
        } 
    }
    },
    {
      type: 'input',
      message: 'Please enter your email address:',
      name: 'questions',
      validate: emailInput => {
        if ( emailInput.length>5){
        return true;
        }else{
        return console.log('Please enter a valid email address.')
        }
    }
    },
    {
    type: 'list',
    message: 'Please choose if you would like to add a license',
    name: 'license',
    choices: ['No License', 'apache-2.0', 'mit', 'isc', 'ncsa']
    }
];