import path from 'path';
import gendiffJson from './actions/gendiffJson';
import gendiffYaml from './actions/gendiffYaml';
import gendiffIni from './actions/gendiffIni';

const gendiffs = [
  {
    name: '.json',
    func: gendiffJson,
  },
  {
    name: '.yaml',
    func: gendiffYaml,
  },
  {
    name: '.ini',
    func: gendiffIni,
  },
];
const gendiff = (pathToFile1, pathToFile2) =>
  gendiffs.slice().filter(elem => elem.name === path.extname(pathToFile1))[0]
    .func(pathToFile1, pathToFile2);

export default gendiff;
