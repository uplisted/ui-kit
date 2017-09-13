import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';

import autoprefixer from 'autoprefixer';
import postcssColorFunction from 'postcss-color-function';
import postcssCustomProperties from 'postcss-custom-properties';
import postcssMediaMinmax from 'postcss-media-minmax';

const cssExportMap = {};

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs({
      include: /node_modules/
    }),
    postcss({
      plugins: [
        postcssModules({
          getJSON (id, exportTokens) {
            cssExportMap[id] = exportTokens;
          }
        }),
        autoprefixer(),
        postcssColorFunction(),
        postcssCustomProperties(),
        postcssMediaMinmax(),
      ],
      getExportNamed: false,
      getExport (id) {
        return cssExportMap[id];
      },
      extensions: ['.pcss']
    }),
    babel({
      exclude: 'node_modules/**',
    })
  ]
};