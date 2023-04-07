module.exports = [
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
      name: 'test',
    },
    {
      type: 'input',
      message: 'Please enter your github username:',
      name: 'questions',
      validate: function(response) {
        if (response.length < 1) {
        return console.log("A valid GitHub username is required.")
        }
        return true;
        
    }
    },
    {
      type: 'input',
      message: 'Please enter your email address:',
      name: 'questions',
      validate: function(response) {
        if ( response.length<5){
        return console.log('Please enter a valid email address.')
        }
        return true;
    
    }
}];