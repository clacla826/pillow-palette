const webpack = require('webpack');

module.exports = {
  entry: './browser/App.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env']  //Hmm when I have 'es2015'error happens
        }
      },
      // use the style-loader/css-loader combos for anything matching the .css extension
      {
        test: /\.css$/,
        use: [
          'style-loader',  //possible because we installed npm install --save-dev style-loader css-loader
          'css-loader',
        ]
      }
    ]
  }
};

//The file to start with is our webpack.config.js - this is THE name (just like package.json is THE name); it is the file wepback is programmatically designed to search for. We see our entry point here. All files that will be compiled must come from being required into this file (or by being required into a file that has been required into our entry point. Or by being required into a file that has been required into another file that has been required into our entry point 😂). We also see where this compiled file will be output, we can go check it out if we want (after we build for the first time that is).
// module.exports = {
//   entry: './browser/App.jsx',
//   output: {
//     path: __dirname + '/public',
//     filename: 'bundle.js'
//   },
//   context: __dirname,
//   devtool: 'source-map',
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   module: {
//     rules: [
//       {
//         test: /jsx?$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         options: {
//           presets: ['react', 'env']
//           //determine what type of syntax is allowed (react, env, stage-2)
//           //env: allows us to use all of the latest EcmaScript appoved syntax
//           // stage-2 syntax includes drafts of changes to be made to JavaScript that haven't been made an official part of the language and is what allows us to use newer, more experimental syntax.
//         }
//       }
//     ]
//   }
// };

