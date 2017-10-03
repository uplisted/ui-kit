const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: './src/index.js',

  /**
   * Output configuration
   */
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
    library: 'UplistedUI',
    libraryTarget: 'commonjs2',
  },

  /**
   * External modules
   */
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'prop-types': 'prop-types',
    'react-async-script-loader': 'react-async-script-loader',
    'react-router': 'react-router',
    'react-router-dom': 'react-router-dom',
    moment: 'moment',
    'react-dates': 'react-dates',
    'react-addons-shallow-compare': 'react-addons-shallow-compare',
    recharts: 'recharts',
  },

  /**
   * Configure default extensions
   *
   */
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  /**
   * Module configuration
   *
   */
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.pcss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true } },
          'postcss-loader',
        ],
      },
    ],
  },

  /**
   * Plugin configuration
   */
  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/font',
      to: 'font',
    }]),
  ],
};
