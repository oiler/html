const path = require('path');

module.exports = {
  mode: 'production',
  entry: './dev/js/entry.js',
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'build/js')
  },
  externals: {
    jQuery: 'jQuery',
    foundation: 'Foundation'
  }
};
