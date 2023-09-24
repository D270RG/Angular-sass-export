import { TargetOptions } from '@angular-builders/custom-webpack';
import { Configuration, RuleSetRule } from 'webpack';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
export default (config: Configuration, _targetOptions: TargetOptions) => {
  if (config.module && config.module.rules) {
    config.module.rules.unshift({
      test: /\_export.module.scss$/,
      exclude: /\_export.module.scss.d.ts$/,
      rules: [{ use: ['style-loader', 'css-loader'] }],
    });
  }
  console.log(config.module?.rules);
  return config;
};
