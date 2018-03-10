import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

const cssExportMap = {};


export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  external: [
    'react',
    'prop-types'
  ],
  plugins: [
    resolve(),
    postcss({
      modules: true,
      minimize: true,
      plugins: [
        
      ],
      getExport (id) {
        return cssExportMap[id];
      },
      extract: 'dist/styles.css',
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ],
};
