const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  plugins: ["yml"],
  extends: ["plugin:yml/standard", "plugin:yml/prettier"],
  overrides: [
    {
      files: ["*.yaml", "*.yml"],
      parser: "yaml-eslint-parser",
    },
  ],
});
