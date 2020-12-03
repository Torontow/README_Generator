const generateReadme = (answers) =>
`# ${answers.title}

${answers.license[1]}

## Description 

${answers.description}

## TABLE OF CONTENTS

1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Contributing](#Contributing)
4. [Tests](#Tests)
5. [Questions/Contact](#Questions/Contact)
6. [License](#License)

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

This project is covered under ${answers.license[0]} license.



[Top](#${answers.title})
`;

module.exports = {
    generateReadme,
}