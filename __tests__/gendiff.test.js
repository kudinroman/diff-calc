const gendiff = require('../src/bin/gendiff.js');

const before = 'src/files/before.json';
const after = 'src/files/after.json';
const before0 = 'src/files/before0.json';
const after0 = 'src/files/after0.json';

const result = `{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
}`;

const result0 = `{
  - one: 11
  + two: 2
  - two: 12
  + four: 4
  - four: 14
    five: 5
  - six: 16
  + eight: 28
  - eight: 8
  + nine: 9
  - nine: 19
  - ten: 110
  + t: 63
  + s: 36
  + seven: 7
}`;


test('compare two files(0)', () => {
  expect(gendiff(before, after)).toBe(result);
});

test('compare two files(1)', () => {
  expect(gendiff(before0, after0)).toBe(result0);
});
