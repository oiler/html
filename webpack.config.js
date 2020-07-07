const path = require('path');

module.exports = {
  mode: 'production',
  entry: './dev/js/app.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, './build/js')
  }
};