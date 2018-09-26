const path = require('path');

module.exports = {
  entry: './dev/js/app.js',
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'assets/js')
  }
};