const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  overrides: [
    {
      files: ["*.json", "*.jsonc", "*.json5"],
      parser: "jsonc-eslint-parser",
      plugins: ["jsonc"],
      extends: ["plugin:jsonc/recommended-with-json", "plugin:jsonc/prettier"],
    },
  ],
});
