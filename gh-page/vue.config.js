const path = require('path');
module.exports = {
  outputDir: '../docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/nCovMemory' : '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.csv$/,
          use: 'raw-loader'
        },
        {
          test: /\.handlebars$/,
          use: 'raw-loader'
        },
        {
          test: /\.md$/,
          use: 'raw-loader'
        }
      ]
    }
  }
};
