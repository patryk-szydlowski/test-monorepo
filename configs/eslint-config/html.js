const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  overrides: [
    {
      files: ["*.html"],
      parser: "@html-eslint/parser",
      plugins: ["@html-eslint"],
      extends: ["plugin:@html-eslint/recommended"],
      rules: {
        "prettier/prettier": "off",
      },
    },
  ],
});
