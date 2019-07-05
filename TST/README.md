# End-2-End tests

## Setup

### For running with local Webdriver
  - Java installed (JRE And JDK), at least v7
  - Node.js installed, at least v10
  - run `yarn install`
  - run `yarn run install-local` to install Webdriver server

### For running with BrowserStack
  - Node.js installed, at least v10
  - run `yarn install`
  - Set the following environment parameters:
      - BaseUrl => base url of the site
      - BROWSERSTACK_USERNAME => BrowserStack user
      - BROWSERSTACK_ACCESS_KEY => BrowserStack automation key

### Run tests
- Local: `yarn run test-local`
- Local, single test: `yarn run test-single [path to spec]`
- Remote: `yarn run test-remote`

### On error
Create an 'errorShots' folder in the root folder. That is where screenshots will be saved when a test fails.

## Test data

## Page objects and Page component objects
In this repository a distinction is made between pageobjects and pageComponentobjects. A pageobject is where all needed
functionality on a specific page is described. A pageComponentobject is where all needed functionality of a specific
component is described. These components are taken out of the pageobjects because they are present on (almost) every
page and to reduce repetition. 
