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
            name: 'usage',
            message: 'Describe how to use your project.',
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
`# ${answers.title}

## TABLE OF CONTENTS

1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [Questions/Contact](#Questions/Contact)

## Description

${answers.description}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contributing} 

## Tests

${answers.tests}

## Questions/Contact

GitHub Profile: [https://github.com/${answers.gitHubName}](https://github.com/${answers.gitHubName})
Email: [${answers.email}](${answers.email})
`;

promptUser()
    .then((answers) => writeFileAsync('README.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
