# Installation

## Installing module and dependencies
```
(
  export PKG=uplisted-ui;
  npm install --save git+ssh://git@github.com/uplisted/ui.git
  cat "./node_modules/$PKG/package.json" | jq -r '.peerDependencies' | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
)
```
## Installing icon font
