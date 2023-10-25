# AngularSassExport

This is example project to demonstrate variables export from SCSS to JS in Angular.

Unlike React, Angular has its own chain of webpack loaders and doesn't give convenient option to configure it.

# Possible errors

1. Main webpack rule looks like this:

```js
config.module.rules.unshift({
  test: /\_export.module.scss$/,
  exclude: /\_export.module.scss.d.ts$/,
  rules: [{ use: ["style-loader", "css-loader"] }],
});
```

Rule applied after sass-loader but before Angular css-loader. If _push_ is being used instead of _unshift_, Angular css-loader will be applied first, leading to it being applied twice:

```js
./src/styles_export.module.scss - Error: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
expected "{".
  ╷
2 │       import API from "!../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js";
  │                                                                                               ^
  ╵
  src\styles_export.module.scss 2:95  root stylesheet
```

2. Following syntax gives an error:

```scss
:export {
  statusColors: #{$status-colors};
  fontWeights: #{$font-weights};
}
```

```js
./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[7].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].rules[1].use[1]!./src/styles_export.module.scss - Error: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
(primary: #000, success: #27ba6c, info: #03a9f4, warning: #ff8833, danger: #ff1a1a) isn't a valid CSS value.
   ╷
13 │   statusColors: #{$status-colors};
   │                   ^^^^^^^^^^^^^^
   ╵
  src\styles_export.module.scss 13:19  root stylesheet
```

This happens because SCSS can't export multiple maps, as it is being parsed to CSS. It is possible, hovewer, to export multiple maps as one keyvalue:

```scss
:export {
  @each $key, $value in $status-colors {
    #{'status-color-'+$key}: $value;
  }
  @each $key, $value in $font-weights {
    #{'font-weight-'+$key}: $value;
  }
}
```
