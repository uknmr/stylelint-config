# .stylelint-config {

**/\* stylelint config at [mediba](http://www.mediba.jp/) \*/**  
circle-ci: [![CircleCI](https://circleci.com/gh/mediba-system/stylelint-config.svg?style=svg)](https://circleci.com/gh/mediba-system/stylelint-config);  
travis-ci: [![Build Status](https://travis-ci.org/mediba-system/stylelint-config.svg?branch=master)](https://travis-ci.org/mediba-system/stylelint-config);  
npm: [![npm version](https://badge.fury.io/js/%40mediba%2Fstylelint-config.svg)](https://badge.fury.io/js/%40mediba%2Fstylelint-config);

## Installation:

```bash
$ yarn add @mediba/stylelint-config --dev
```

## Usage:

Set your `stylelint` config.

```js
{
  "extends": "@mediba/stylelint-config",
  "rules": {
    // If you customize rules, override here.
  }
}
```

## With stylefmt:

```bash
$ yarn add stylefmt --dev
```

```bash
$ ./node_modules/.bin/stylefmt --help
```

### Editor plugins:

- [For Sublime Text](https://github.com/dmnsgn/sublime-stylefmt)
- [For Atom](https://github.com/1000ch/atom-stylefmt)
- [For Vim](https://github.com/kewah/vim-stylefmt)
- [For VS Code](https://github.com/mrmlnc/vscode-stylefmt)

### Task Runner plugins:

- [For Gulp](https://github.com/morishitter/gulp-stylefmt)
- [For Webpack](https://github.com/tomasAlabes/stylefmt-loader)

As you like.

# }
