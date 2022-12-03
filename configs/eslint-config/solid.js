const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  overrides: [
    {
      files: ["*.jsx", "*.tsx"],
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
        "react/react-in-jsx-scope": "off",
        "react/no-unknown-property": ["error", { ignore: ["class"] }],
        "react/jsx-no-bind": "off",
        "react/jsx-max-depth": ["error", { max: 8 }],
        "react/jsx-filename-extension": ["error", { extensions: ["*.jsx", ".tsx"] }],
        "react/jsx-sort-props": [
          "error",
          { callbacksLast: true, shorthandFirst: true, multiline: "last" },
        ],
      },
    },
    {
      files: ["root.tsx", "entry-client.tsx", "entry-server.tsx"],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": "error",
      },
    },
  ],
});
