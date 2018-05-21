import _ from 'lodash';
import fs from 'fs';

const gendiff = (pathToFile1, pathToFile2) => {
  const dataBeforeChange = JSON.parse(fs.readFileSync(pathToFile1));
  const dataAfterChange = JSON.parse(fs.readFileSync(pathToFile2));
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
