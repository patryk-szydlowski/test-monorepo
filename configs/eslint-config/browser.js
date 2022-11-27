const { defineConfig } = require("eslint-define-config");

const conflictingReactRules = {
  "react/react-in-jsx-scope": "off",
};

module.exports = defineConfig({
  env: {
    browser: true,
    worker: true,
  },
  plugins: ["github", "jsx-a11y", "react", "solid"],
  extends: [
    "plugin:github/browser",
    "plugin:github/react",
    "plugin:jsx-a11y/strict",
    "plugin:react/all",
    "plugin:solid/typescript",
  ],
  rules: {
    ...conflictingReactRules,
  },
});
