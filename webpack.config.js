const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  // ... other config
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ]
}; 