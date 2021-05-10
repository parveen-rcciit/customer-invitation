## Customer Invitation

Problem Statement:
> We have some customer records in a text file (customers.txt) -- one customer per line, JSON lines formatted. We want to invite any customer within 100km of our Dublin office for some food and drinks on us. Write a program that will read the full list of customers and output the names and user ids of matching customers (within 100km), sorted by User ID (ascending).
* You must use the first formula from​ ​[this Wikipedia article​](https://en.wikipedia.org/wiki/Great-circle_distance) to calculate distance. Don't forget, you'll need to convert degrees to radians.
* The GPS coordinates for our Dublin office are 53.339428, -6.257664.
* You can find the Customer list​ ​[here​](https://gist.github.com/brianw/19896c50afa89ad4dec3).

## Getting Started

Download the project - [here](https://github.com/parveen-rcciit/customer-invitation)
Clone the repo - `git clone https://github.com/parveen-rcciit/customer-invitation.git`

## Installation
* Install [Node.js® latest](https://nodejs.org/en/download/package-manager/) with [npm](https://www.npmjs.com/)
* Install dependencies by running `npm install`

## Run
Use `npm start` to run the program.

It will run with default values given in the task description but can be overridden with arguments.
Refer to example below for running it with arguments

Argument | Description | Example
--- | --- | ---
--filePath | File path containing customer data | npm start -- --filePath=src/test/data/customers-no-invite-list.json
--distance | Distance between customer and invitation location (km) | npm start -- --distance=50
--latitude | Latitude of the invitation location | npm start -- --latitude=12.34
--longitude | Longitude of the invitation location | npm start -- --longitude=56.78

Example with all values overridden - `npm start -- --filePath=src/test/data/customers-no-invite-list.json --distance=50 --latitude=12.34 --longitude=56.78`

## Scripts

- `npm start` : Run the program.
- `npm run lint` : Run ESLint on the workspace.
- `npm test` : Run all the tests.
- `npm run generateCoverage` : Run test coverage report.
