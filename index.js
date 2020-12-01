const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
    inquirer.prompt([
        {
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            name: 'description',
            message: 'Provide a description of your project.',
        },
        {
            name: 'installation',
            message: 'How do users install your project for their use?',
        },
        {
            name: 'usage',
            message: 'Describe how to use your project.',
        },
        {
            name: 'contributing',
            message: 'List contributors to your project.',
        },
        {
            name: 'tests',
            message: 'Describe the testing used for your project.',
        },
        {
            name: 'gitHubName',
            message: 'What is your GitHub user name?',
        },
        {
            name: 'email',
            message: 'What is your e-mail address?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project.',
            default: 'MIT',
            choices: [
                {
                    name: 'ISC',
                    value: ['ISC','[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'],
                },
                {
                    name: 'GNU',
                    value: ['GNU','[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'],

                },
                {
                    name: 'MIT',
                    value: ['MIT','[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'],
                },
            ]
        },
    ]);

const generateReadme = (answers) =>
`# ${answers.title}

${answers.license[1]}

## TABLE OF CONTENTS

1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [Questions/Contact](#Questions/Contact)
7. [License](#License)

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

## License

This project is covered under the ${answers.license[0]} license.
`;


promptUser()
    .then((answers) => writeFileAsync('README.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
