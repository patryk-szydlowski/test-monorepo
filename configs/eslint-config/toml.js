const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  overrides: [
    {
      files: ["*.toml"],
      parser: "toml-eslint-parser",
      plugins: ["toml"],
      extends: ["plugin:toml/standard"],
    },
  ],
});
