const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  plugins: ["toml"],
  extends: ["plugin:toml/standard"],
  overrides: [
    {
      files: ["*.toml"],
      parser: "toml-eslint-parser",
    },
  ],
});
