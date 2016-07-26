var path = require('path');
module.exports = {
  entry: './app/main.js',
  output: {
    filename: 'bundle.js'
  },
  // assumes all JavaScript files you edit will be in src/
  // when importing from src/<file>.js, only need to specify as <file>
  resolve: {
    root: path.resolve('./app'), // must be absolute path
    extensions: ['', '.js', '.jsx', '.json', '.css', '.less']
  },
  devtool: 'source-map', // source maps to ease debugging
  module: {
    loaders: [
      {
        // pre-process every *.js file (except for ones in
        // node_modules/) with Babel:
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader', // auto-refreshes browser
          // invokes Babel to translate React and ES6
          'babel-loader?cacheDirectory&presets[]=react&presets[]=es2015'
        ]
      }, {
        test: /\.less$/,
        loaders: ['style', 'css', 'less']
      }, { 
        test: /\.css$/, 
        loaders: ['style', 'css'] // !!!! Expects array
      }
    ]
  }
};