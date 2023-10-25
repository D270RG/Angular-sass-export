# AngularSassExport

This is example project to demonstrate variables export from SCSS to JS in Angular.

Unlike React, Angular has its own chain of webpack loaders and doesn't give convenient option to configure it.

# Possible errors

1. Currently test running with Wallaby.js not working if lib project is present in angular.json with "test" entry and "@angular-builders/custom-webpack:karma" builder. Error looks like no custom webpack rule being applied:

```js
‌[Error] Module parse failed: Unexpected token (1:0) 
[Error] File was processed with these loaders: 
[Error]  * wallaby-post-loader 
[Error]  * ./node_modules/resolve-url-loader/index.js 
[Error]  * ./node_modules/sass-loader/dist/cjs.js 
[Error]  * wallaby-pre-loader 
[Error] You may need an additional loader to handle the result of these loaders. 
[Error] > :export { 
[Error] |   status-color-primary: #000; 
[Error] |   status-color-success: #27ba6c; 
[Error] @ ./src/styles-export/_styles_export.module.scss, 
[Error] @ ./src/app/app.component.ts, 
[Error] @ ./src/app/app.component.spec.ts 
```

Default test runs with "ng test" still works.


# Syntax explanation

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

2. SCSS can't export multiple maps, as it is being parsed to CSS. It is possible, hovewer, to export multiple maps as one keyvalue:

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
