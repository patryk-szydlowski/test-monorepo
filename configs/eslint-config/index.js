const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  ignorePatterns: ["*.json", "*.yml", "*.yaml", "*.html"],
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
  plugins: [
    "@typescript-eslint",
    "import",
    "functional",
    "sonarjs",
    "unicorn",
    "github",
    "eslint-comments",
  ],
  extends: [
    "eslint:all",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:functional/external-recommended",
    "plugin:functional/recommended",
    "plugin:functional/stylistic",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/all",
    "plugin:github/recommended",
    "plugin:eslint-comments/recommended",
  ],
  rules: {
    "import/no-deprecated": "error",
    "import/no-mutable-exports": "error",
    "import/no-cycle": "error",
    "import/no-internal-modules": "error",
    "import/no-unused-modules": "error",
    "import/no-relative-parent-imports": "error",
    "import/no-self-import": "error",
    "import/no-useless-path-segments": "error",
    "import/newline-after-import": "error",
    "import/no-default-export": "error",
    "import/no-named-default": "error",
    "import/no-unassigned-import": "error",
    "eslint-comments/no-use": "error",
    "eslint-comments/require-description": "error",
  },
  settings: {
    "import/extensions": [".js", ".mjs", ".jsx", "*.ts", "*.tsx"],
  },
});
