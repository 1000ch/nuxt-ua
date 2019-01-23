const path = require('path');

module.exports = moduleOptions => {
  const options = {
    ...this.options['nuxt-ua'],
    ...moduleOptions,
  };

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    ssr: false,
    fileName: 'nuxt-ua.js',
    options
  });
};

module.exports.meta = require('./package.json');
