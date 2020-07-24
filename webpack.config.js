const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/js/app.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, './build/js')
  },
  externals: {
    // expose global variable
    'data': 'data'
  }
};