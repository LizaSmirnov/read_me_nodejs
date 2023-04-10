
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

function renderLicenseLink(license) {
  if (license === 'apache-2.0'){
    return `https://www.apache.org/licenses/LICENSE-2.0`
  }
  if (license === 'mit'){
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'isc'){
    return `https://opensource.org/license/isc-license-txt/`
  }
  }

function renderLicenseSection(license) {
  if (!license){
    return '';
  }
  return `## License
${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.conrtibution}

## Test Instructions
${data.test}

## Questions
${data.questions} 
GitHub: https://github.com/${data.questions.githubInput}  
Email: ${data.questions[emailInput]}

${renderLicenseSection(data.license)}
`;

}
module.exports = generateMarkdown;

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
