const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);







const generateReadme = (answers) =>
`# ${} PROJECT TITLE

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

`