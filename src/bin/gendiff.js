#!/usr/bin/env node

import commander from 'commander';

const _ = require('lodash');
const fs = require('fs');

const gendiff = (firstFile, secondFile) => {
  const before = JSON.parse(fs.readFileSync(firstFile));
  const after = JSON.parse(fs.readFileSync(secondFile));
  const deleted = _.reduce(after, (acc, value, key) => {
    if (!_.has(before, key)) {
      return `${acc}  + ${key}: ${value}\n`;
    }
    return `${acc}`;
  }, '');
  const resObj = _.reduce(before, (acc, value, key) => {
    if (!_.has(after, key)) {
      return `${acc}\n  - ${key}: ${value}`;
    }
    if (_.has(after, key) && after[key] !== value) {
      return `${acc}\n  + ${key}: ${after[key]}\n  - ${key}: ${value}`;
    }
    if (_.has(after, key) && after[key] === value) {
      return `${acc}\n    ${key}: ${value}`;
    }
    return `${acc} `;
  }, '');
  return `{${resObj}\n${deleted}}`;
};

commander
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => gendiff(firstConfig, secondConfig))
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'Output format')
  .parse(process.argv);

module.exports = gendiff;
export default gendiff;
