# .style-config-mediba {

**/\* stylelint config at [mediba](http://www.mediba.jp/) \*/**  
circle-ci: [![CircleCI](https://circleci.com/gh/uknmr/stylelint-config-mediba.svg?style=svg)](https://circleci.com/gh/uknmr/stylelint-config-mediba);  
npm: [![npm version](https://badge.fury.io/js/stylelint-config-mediba.svg)](https://badge.fury.io/js/stylelint-config-mediba);

## Installation:

```bash
$ yarn add stylelint-config-mediba --dev
```

## Usage:

Set your `stylelint` config.

```js
{
  "extends": "stylelint-config-mediba",
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
