const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  env: {
    node: true,
  },
  plugins: ["@typescript-eslint", "node", "functional", "unicorn"],
  extends: ["plugin:node/recommended"],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "import/no-commonjs": "off",
    "functional/no-expression-statement": [
      "error",
      { ignoreVoid: true, ignorePattern: "module.exports" },
    ],
    "functional/immutable-data": ["error", { ignorePattern: "module.exports" }],
    "unicorn/prefer-module": "off",
  },
});
