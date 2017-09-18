module.exports = {
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
        test: /\.pcss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true } },
          'postcss-loader',
        ],
      },
      {
        test: /\.woff(2)?$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
