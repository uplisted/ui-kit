# Installation

Install module with peer dependencies by running this command
```
(
  export PKG=uplisted-ui;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
)
```


Create new file named fonts.css and include following code
to connect Lato and icon font
```
/**
 * Lato, google fonts
 */
@import url('https://fonts.googleapis.com/css?family=Lato:400,700');

/**
 * Icon font
 */
@font-face {
  font-family: 'icomoon';
  src: url('~uplisted-ui/dist/font/icomoon.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

```

## Usage 
```jsx harmony
import { ComponentName } from 'uplisted-ui'
```
