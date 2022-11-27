const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  env: {
    node: true,
  },
  plugins: ["node", "unicorn"],
  extends: ["plugin:node/recommended"],
  rules: {
    "import/no-commonjs": "off",
    "unicorn/prefer-module": "off",
  },
});
