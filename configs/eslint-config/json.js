const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  overrides: [
    {
      files: ["*.json", "*.jsonc", "*.json5"],
      parser: "jsonc-eslint-parser",
      plugins: ["jsonc"],
      extends: ["plugin:jsonc/recommended-with-json", "plugin:jsonc/prettier"],
      rules: {
        "jsonc/sort-keys": "error",
      },
    },
    {
      files: ["package.json"],
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            order: [
              "name",
              "description",
              "private",
              "type",
              "packageManager",
              "engines",
              "scripts",
              "dependencies",
              "devDependencies",
            ],
            pathPattern: "^$",
          },
          {
            order: ["node", "pnpm", "npm", "yarn"],
            pathPattern: "^engines$",
          },
          {
            order: [
              { keyPattern: "^dev.*$" },
              { keyPattern: "^build.*$" },
              { keyPattern: "^preview.*$" },
              { keyPattern: "^lint.*$" },
              { keyPattern: "^test.*$" },
            ],
            pathPattern: "^scripts$",
          },
          {
            order: {
              type: "asc",
            },
            pathPattern: ".*",
          },
        ],
      },
    },
  ],
});
