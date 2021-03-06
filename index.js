const inquirer = require('inquirer');
const generate = require('./generate');
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
            message: 'Provide a description of your project. Be sure to cover the "what", "why" and "how" of what you built.',
        },
        {
            name: 'installation',
            message: 'How do users install your project? Do they need anything else for it to function as intended?',
        },
        {
            name: 'usage',
            message: 'Explain how to use your project.',
        },
        {
            name: 'contributing',
            message: 'Would you like others to contribute to your project? If so, are there guidelines they should follow?',
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
                {
                    name: 'Not sure yet',
                    value: ['no','No License']
                }
            ]
        },
    ]);

promptUser()
    .then((answers) => writeFileAsync('README.md', generate.generateReadme(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
