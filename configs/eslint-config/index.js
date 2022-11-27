const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  env: {
    es2021: true,
    "shared-node-browser": true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  plugins: ["@typescript-eslint", "sonarjs", "unicorn", "github"],
  extends: [
    "eslint:all",
    "plugin:@typescript-eslint/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/all",
    "plugin:github/recommended",
  ],
});
