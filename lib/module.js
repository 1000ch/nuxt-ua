const path = require('path');

module.exports = function Module(moduleOptions) {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-ua.js',
    options: {
      ...moduleOptions
    }
  });
};

module.exports.meta = require('../package.json');
