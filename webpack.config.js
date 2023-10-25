const path = require("path");

module.exports = (config, _targetOptions) => {
  if (config.module && config.module.rules) {
    config.resolve = {
      ...config.resolve,
      alias: {
        Styles: path.resolve(__dirname, "/src/styles-export/"),
      },
    };
    config.module.rules.unshift({
      test: /\_export.module.scss$/,
      rules: [{ use: ["style-loader", "css-loader"] }],
    });
  }
  return config;
};
