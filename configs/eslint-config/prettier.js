const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
});
