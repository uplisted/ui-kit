import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import eslint from 'rollup-plugin-eslint';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';
import uglify from 'rollup-plugin-uglify';
import autoprefixer from 'autoprefixer';
import postcssColorFunction from 'postcss-color-function';
import postcssCustomProperties from 'postcss-custom-properties';
import postcssMediaMinmax from 'postcss-media-minmax';
import cssnano from 'cssnano';

// postcss modules
const cssExportMap = {};

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/lol.jsx',
    format: 'cjs',
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs({
      include: /node_modules/,
      namedExports: {
        'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render']
      },
    }),
    postcss({
      plugins: [
        postcssModules({
          getJSON(id, exportTokens) {
            cssExportMap[id] = exportTokens;
          },
        }),
        autoprefixer(),
        postcssColorFunction(),
        postcssCustomProperties(),
        postcssMediaMinmax(),
        cssnano(),
      ],
      getExportNamed: false,
      getExport(id) {
        return cssExportMap[id];
      },
      extensions: ['.pcss'],
    }),
    eslint({
      throwOnError: true,
      exclude: [
        'src/**/*.pcss',
      ],
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    uglify(),
  ],
};
