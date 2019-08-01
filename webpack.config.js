const path = require('path');

module.exports = {
  mode: 'production',
  entry: './dev/js/app.js',
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'build/js')
  }
};