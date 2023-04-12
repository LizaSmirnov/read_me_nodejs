
function renderLicenseBadge(license) {
  console.log(license)
  if (!license) {
    return '';
  } else { 
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)]`
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
${data.contibution}

## Test Instructions
${data.test}

## Questions:
Have any questions and want to reach out?
GitHub: https://github.com/${data.questions}  
Email: ${data.email}

${renderLicenseSection(data.license)};
${renderLicenseBadge(data.license)};

`
}
module.exports = generateMarkdown;

