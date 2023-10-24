// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

process.env.CHROME_BIN = require("puppeteer").executablePath();

const specReportConfig = {
  standard: {},
  short: {
    suppressErrorSummary: false,
    suppressFailed: false,
    suppressPassed: true,
    suppressSkipped: true,
    showSpecTiming: false,
    failFast: false,
  },
};
const specReporter = process.env.SHORT_REPORT
  ? specReportConfig.short
  : specReportConfig.standard;

const karmaRunner = process.env.CI_KARMA_RUNNER ? 2 : 4;

module.exports = function () {
  return {
    basePath: "",
    frameworks: ["parallel", "jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-parallel"),
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-junit-reporter"),
      require("karma-spec-reporter"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      jasmine: {
        random: false,
      },
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "coverage"),
      subdir: ".",
      reporters: [
        { type: "html" },
        { type: "lcovonly" },
        { type: "cobertura" },
        { type: "text-summary" },
        { type: "json" },
      ],
    },
    reporters: ["kjhtml", "junit", "spec"],
    junitReporter: {
      useBrowserName: false,
      outputFile: "test-results.xml",
    },
    parallelOptions: {
      executors: karmaRunner, // Defaults to cpu-count - 1
      shardStrategy: "round-robin",
      // shardStrategy: 'description-length'
      // shardStrategy: 'custom'
    },
    port: 9876,
    colors: true,
    autoWatch: true,
    concurrency: 4,
    browsers: ["Chrome_no_sandbox"],
    customLaunchers: {
      Chrome_no_sandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
    browserDisconnectTimeout: 30000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 100000,
    captureTimeout: 60000,
    specReporter,
  };
};
