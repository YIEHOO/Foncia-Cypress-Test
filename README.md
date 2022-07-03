# Foncia Cypress Test
## _Functional automation testing solution using Cypress for Foncia service_

[![Foncia Cypress Test](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/6jwnmi/main&style=for-the-badge&logo=cypress)](https://dashboard.cypress.io/projects/6jwnmi/runs)

## Features

- A front end testing tool built for the modern web
- A strongly typed programming language that builds on JavaScript, giving better tooling at any scale
- A tool that supports Behaviour-Driven Development(BDD)
- POM (Page Object Model) a design pattern, popularly used in test automation that creates Object Repository for web UI elements
- A custom reporter for use with the Javascript testing framework
- DDT (Data Driven Testing) a software testing method in which test data is stored in table or spreadsheet format
- Package manager for code

## Tech

Foncia Cypress Test uses a number of open source projects to work properly:

- [Cypress] - JavaScript End to End Testing Framework
- [Typescript] - TypeScript is JavaScript with syntax for types
- [Mochawesome] - Custom reporter for use with Javascript
- [Cypress-xpath] - Adds XPath command to Cypress.io test runner
- [Cypress-Cucumber-Preprocessor] - Provide developers experience and behavior similar to that of Cucumber, to Cypress
- [Webpack-Preprocessor] - Cypress preprocessor for bundling JavaScript via webpack
- [YARN] - A package manager for code
- [papaparse] - The powerful, in-browser CSV parser for big boys and girls

## Installation

Foncia Cypress Test requires [Node.js](https://nodejs.org/) v16.10+ to run.

Enable [YARN](https://yarnpkg.com/) to start using the package manager

```sh
corepack enable
```

Install the dependencies and devDependencies.

```sh
cd FONCIA-CYPRESS_TEST
yarn install
```

#### Run the tests

To run the test on production on a headless mode :

```sh
yarn test --env ENV='production'
```

#### Additional commands not needed to be run but might be helpful

To merge mochawesome reports
```sh
yarn merge-reports
```

To generate an HTML report
```sh
yarn generate-htmlreport
```

To convert CSV file to JSON file

```sh
yarn convertCSVtoJSON
```

## Cypress Dashboard

To access Cypress Dashboard please click [me](https://dashboard.cypress.io/projects/6jwnmi/runs/109/overview) to see the details

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job.)

   [Cypress]: <https://github.com/cypress-io/cypress>
   [Typescript]: <https://github.com/microsoft/TypeScript>
   [Mochawesome]: <https://github.com/adamgruber/mochawesome>
   [Cypress-xpath]: <https://github.com/cypress-io/cypress-xpath>
   [Cypress-Cucumber-Preprocessor]: <https://github.com/badeball/cypress-cucumber-preprocessor>
   [Webpack-Preprocessor]: <https://github.com/cypress-io/cypress/tree/master/npm/webpack-preprocessor#readme>
   [YARN]: <https://github.com/yarnpkg/yarn>
   [papaparse]: <https://github.com/mholt/PapaParse>
