module.exports = () => ({
  env: {
    kind: "chrome",
    runner: "/usr/bin/google-chrome",
    NODE_OPTIONS: "--max_old_space_size=4096",
  },
});
