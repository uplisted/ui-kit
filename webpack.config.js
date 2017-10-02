const path = require('path');

module.exports = {

  entry: './src/index.js',

  /**
   * Output configuration
   */
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    library: 'uplistedUI',
    libraryTarget: 'umd',
  },

  /**
   * External modules
   */
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes',
    'react-async-script-loader': 'scriptLoader',
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
};
