# Installation

## Install with peer dependencies
```
(
  export PKG=uplisted-ui;
  npm install --save git+ssh://git@github.com/uplisted/ui.git
  cat "./node_modules/$PKG/package.json" | jq -r '.peerDependencies' | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
)
```

## Usage 
```jsx harmony
import { ComponentName } from 'uplisted-ui'
```
