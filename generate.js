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

This project is covered under ${answers.license[0]} license.
Email: [${answers.email}](Mailto:${answers.email}) 


[Top](#${answers.title})
`;

module.exports = {
    generateReadme,
}