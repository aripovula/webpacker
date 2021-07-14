const { resolve } = require('path');
console.log('in alias webpack');
module.exports = {
  resolve: {
    alias: {
      Assets: resolve(__dirname, '..', '..', 'client', 'app', 'assets'),
    },
  },
};
