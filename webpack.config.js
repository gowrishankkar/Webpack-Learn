const path = require("path");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: "./src/index.js",
  output: {
    path: "",
    filename: "bundle.js",
    publicPath: path.resolve(__dirname, 'dist')
  },
  resolve:{
      extensions:{ ['.js', '.jsx']}
  },
  module: {
      rules:[
          {
              test: /\.js$/,
              loader: babel-loader,
              exclude: /node_modules/
          },
          {
            test: /\.css$/,
            exclude: /node_modules  /,
            use: [
                { loader: 'style-loader'},
                { 
                    loader: 'css-loader',
                    options: {
                        modules:true,
                        localIdentName: '[name]__[local]--[hash:base64:5]'
                    }       
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        
                    }
                }
            ]        }
      ]
  }
};
