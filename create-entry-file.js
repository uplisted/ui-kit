const fs = require('fs');
const os = require('os');

const entryFile = './src/entry.js';
const componentsDirectory = './src/components';
let fileContent = 'import \'./css/normalize.pcss\';\n\n';

module.exports = () => {
  // scan components directory
  const files = fs.readdirSync(componentsDirectory);

  // component directory shouldn't contain .
  files.forEach((file) => {
    if (!file.match('\\.')) {
      fileContent += `\nexport ${file} from './components/${file}';`;
    }
  });

  fileContent += os.EOL;

  fs.writeFileSync(entryFile, fileContent);
};
