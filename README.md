# Foncia Cypress Test
## _Functional autimation test solution using Cypress for Foncia service_

[![Foncia Cypress Test](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/6jwnmi/main&style=for-the-badge&logo=cypress)](https://dashboard.cypress.io/projects/6jwnmi/runs)

## Features

- A front end testing tool built for the modern web
- A strongly typed programming language that builds on JavaScript, giving better tooling at any scale
- A tool that supports Behaviour-Driven Development(BDD)
- POM (Page Object Model) a design pattern, popularly used in test automation that creates Object Repository for web UI elements
- A custom reporter for use with the Javascript testing framework
- DDT (Data Driven Testing) a software testing method in which test data is stored in table or spreadsheet format
- Package manager for code
- CI/CD  frequently deliver apps to customers by introducing automation into the stages of app development

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

## Install and run tests locally

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

To run the test on production :

```sh
yarn test --env ENV='production'
```

#### Additional commands not needed to be run but might be help

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

## Install and run tests using Docker

[Docker](https://docker.com) must be installed on the targetted machine to be able to build an image

Create an image of the Cypress project

```sh
cd FONCIA-CYPRESS_TEST
docker build -t my-cypress-image:1.0.0 .
```

#### Run the tests

To run the test on production :

```sh
docker run -i -v $PWD:/my-cypress-project -t my-cypress-image:1.0.0 --spec cypress/e2e/*.feature --env ENV='production'
```

## CI/CD Integration

The Foncia Cypress Test provides a Jenkinsfile that will help setup up a Jenkins Pipeline with the least effort possible.

#### How to do it?

1. Create a new Pipeline on Jenkins
2. Go to 'Advanced Project Options'
3. Specify 'Pipeline Script from SCM', 'Git', Repository URL, Credentials, Branch
4. Set 'Script Path' to 'Jenkinsfile'

#### Plugins requiered

```sh
AnsiColor
HTML Publisher Plugin
NodeJS Plugin
```

## Cypress Dashboard

To access Cypress Dashboard please click on [me](https://dashboard.cypress.io/projects/6jwnmi/runs/109/overview) to see the details

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
