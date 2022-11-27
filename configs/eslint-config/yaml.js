const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  overrides: [
    {
      files: ["*.yaml", "*.yml"],
      parser: "yaml-eslint-parser",
      plugins: ["yml"],
      extends: ["plugin:yml/standard", "plugin:yml/prettier"],
    },
  ],
});
