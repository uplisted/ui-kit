# Installation

## Install with peer dependencies
```
(
  export PKG=uplisted-ui;
  npm install --save git+ssh://git@github.com/uplisted/ui.git
  cat "./node_modules/$PKG/package.json" | jq -r '.peerDependencies' | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
)
```

## Installing fonts.

Create fonts.css file and import to your entry point file
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
  src: url('~uplisted-ui/src/font/icomoon.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

```

## Usage 
```jsx harmony
import { ComponentName } from 'uplisted-ui'
```
