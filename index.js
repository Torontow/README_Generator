const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do users install your project for their use?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'List contributors to your project.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Describe the testing used for your project.',
        },
        {
            type: 'input',
            name: 'gitHubName',
            message: 'What is your GitHub user name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?'
        },
    ]);


const generateReadme = (answers) =>
    `# ${title} PROJECT TITLE

## TABLE OF CONTENTS

1. [Description](#Description)
2. [Installation]
3. [Usage]
4. [Contributing]
5. [Tests]
6. [Questions/Contact]

## Description

${}

## Installation

${}

## Usage

${}

## Contributing

${} 

## Tests

${}

## Questions/Contact

[GitHub Profile: http://github.com/${}] (http://github.com/${})
[Email: ${}]

`;