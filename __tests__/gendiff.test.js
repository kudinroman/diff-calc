import fs from 'fs';
import gendiff from '../src/bin/gendiff.js';

const beforeJson = '__tests__/__fixtures__/json/before.json';
const afterJson = '__tests__/__fixtures__/json/after.json';
const resultJson = fs.readFileSync(`__tests__/__fixtures__/json/resultJson.txt`, 'utf8');

const beforeYaml = '__tests__/__fixtures__/yaml/before.yaml';
const afterYaml = '__tests__/__fixtures__/yaml/after.yaml';
const resultYaml = fs.readFileSync(`__tests__/__fixtures__/yaml/resultYaml.txt`, 'utf8');

const beforeIni = '__tests__/__fixtures__/ini/before.ini';
const afterIni = '__tests__/__fixtures__/ini/after.ini';
const resultIni = fs.readFileSync(`__tests__/__fixtures__/ini/resultIni.txt`, 'utf8');

describe('compare two files', () => {
  test('compare two files .json', () => {
    expect(gendiff(beforeJson, afterJson)).toBe(resultJson);
  });

  test('compare two files .yaml', () => {
    expect(gendiff(beforeYaml, afterYaml)).toBe(resultYaml);
  });

  test('compare two files .ini', () => {
    expect(gendiff(beforeIni, afterIni)).toBe(resultIni);
  });
});
