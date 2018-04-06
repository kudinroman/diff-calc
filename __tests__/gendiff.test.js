const gendiff = require('../src/bin/gendiff.js');

const before = 'src/files/before.json';
const after = 'src/files/after.json';

const result = `{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
}`;

test('compare two files', () => {
  expect(gendiff(before, after)).toBe(result);
});
