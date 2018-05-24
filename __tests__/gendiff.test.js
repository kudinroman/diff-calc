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

describe('compare two files', () => {
  test('compare two files .json', () => {
    expect(gendiff(beforeJson, afterJson)).toBe(fs.readFileSync(resultJson, 'utf8'));
  });

  test('compare two files .yaml', () => {
    expect(gendiff(beforeYaml, afterYaml)).toBe(fs.readFileSync(resultYaml, 'utf8'));
  });

  test('compare two files .ini', () => {
    expect(gendiff(beforeIni, afterIni)).toBe(fs.readFileSync(resultIni, 'utf8'));
  });
});
