#!/usr/bin/env node

import commander from 'commander';
import gendiff from '..';

commander
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    const diff = gendiff(firstConfig, secondConfig);
    console.log(diff);
  })
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'Output format')
  .parse(process.argv);

export default gendiff;
