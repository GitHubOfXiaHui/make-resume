const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src/js');

const entries = {
  'resume': APP_PATH + '/resume.js'
}

module.exports = entries;
