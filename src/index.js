import path from 'path';
import _ from 'lodash';
import fs from 'fs';
import yaml from 'js-yaml';
import ini from 'ini';

const gendiffs = {
  '.json': JSON.parse,
  '.yaml': yaml.safeLoad,
  '.ini': ini.parse,
};

const getFuncGendiff = pathToFile => gendiffs[path.extname(pathToFile)](fs.readFileSync(pathToFile, 'utf8'));

const gendiff = (pathToFile1, pathToFile2) => {
  const dataBeforeChange = getFuncGendiff(pathToFile1);
  const dataAfterChange = getFuncGendiff(pathToFile2);
  const Keys = _.union(Object.keys(dataBeforeChange), Object.keys(dataAfterChange));

  const result = Keys.reduce((acc, key) => {
    const isDeleted = !_.has(dataAfterChange, key);
    const isAdded = !_.has(dataBeforeChange, key);
    const isChanged = _.has(dataAfterChange, key) && _.has(dataBeforeChange, key)
      && dataAfterChange[key] !== dataBeforeChange[key];
    const isUnchanged = dataAfterChange[key] === dataBeforeChange[key];

    if (isDeleted) {
      return `${acc}\n  - ${key}: ${dataBeforeChange[key]}`;
    } else if (isAdded) {
      return `${acc}\n  + ${key}: ${dataAfterChange[key]}`;
    } else if (isUnchanged) {
      return `${acc}\n    ${key}: ${dataBeforeChange[key]}`;
    } else if (isChanged) {
      return `${acc}\n  + ${key}: ${dataAfterChange[key]}\n  - ${key}: ${dataBeforeChange[key]}`;
    }
    return `${acc}`;
  }, '');

  return `{${result}\n}\n`;
};

export default gendiff;
