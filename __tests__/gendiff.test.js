import fs from 'fs';
import gendiff from '../src/bin/gendiff.js';

const beforeJson = '__tests__/__fixtures__/before.json';
const afterJson = '__tests__/__fixtures__/after.json';
const resultJson = fs.readFileSync(`__tests__/__fixtures__/resultJson.txt`, 'utf8');

describe('compare two files', () => {
  test('compare two files .json', () => {
    expect(gendiff(beforeJson, afterJson)).toBe(resultJson);
  });
});
