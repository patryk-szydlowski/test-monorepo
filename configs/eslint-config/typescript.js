const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  plugins: ["@typescript-eslint", "github"],
  overrides: [
    {
      files: ["*.js", "*.cjs", "*.mjs", "*.ts", "*.cts", "*.jsx", "*.tsx"],
      parserOptions: {
        project: [
          "apps/*/tsconfig.json",
          "configs/*/tsconfig.json",
          "features/*/tsconfig.json",
          "packages/*/tsconfig.json",
        ],
      },
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "plugin:github/typescript",
      ],
    },
  ],
});
