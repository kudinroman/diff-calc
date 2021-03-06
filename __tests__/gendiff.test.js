import fs from 'fs';
import gendiff from '../src/bin/gendiff.js';

const beforeJson = '__tests__/__fixtures__/json/before.json';
const afterJson = '__tests__/__fixtures__/json/after.json';
const resultJson = `__tests__/__fixtures__/json/resultJson.txt`;

const beforeYaml = '__tests__/__fixtures__/yaml/before.yaml';
const afterYaml = '__tests__/__fixtures__/yaml/after.yaml';
const resultYaml = `__tests__/__fixtures__/yaml/resultYaml.txt`;

const beforeIni = '__tests__/__fixtures__/ini/before.ini';
const afterIni = '__tests__/__fixtures__/ini/after.ini';
const resultIni = `__tests__/__fixtures__/ini/resultIni.txt`;

const result = pathToResutFile => fs.readFileSync(pathToResutFile, 'utf8');

describe('compare two files', () => {
  test('compare two files .json', () => {
    expect(gendiff(beforeJson, afterJson)).toBe(result(resultJson));
  });

  test('compare two files .yaml', () => {
    expect(gendiff(beforeYaml, afterYaml)).toBe(result(resultYaml));
  });

  test('compare two files .ini', () => {
    expect(gendiff(beforeIni, afterIni)).toBe(result(resultIni));
  });
});
