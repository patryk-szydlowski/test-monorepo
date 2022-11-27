const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
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
      plugins: ["@typescript-eslint", "import", "github"],
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "plugin:import/typescript",
        "plugin:github/typescript",
      ],
    },
  ],
});
