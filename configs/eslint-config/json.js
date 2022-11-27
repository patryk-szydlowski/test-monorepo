const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  plugins: ["jsonc"],
  extends: ["plugin:jsonc/recommended-with-json", "plugin:jsonc/prettier"],
  overrides: [
    {
      files: ["*.json", "*.jsonc", "*.json5"],
      parser: "jsonc-eslint-parser",
    },
  ],
});
