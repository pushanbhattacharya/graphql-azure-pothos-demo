module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:jsdoc/recommended-typescript",
    "plugin:import/recommended",
    "plugin:import/typescript",
    //  prettier must be the last one
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "prefer-arrow"],
  rules: {
    //  Should be done by prettier
    indent: "off",
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "semi-style": ["error", "last"],
    "no-extra-semi": ["error"],
    "semi-spacing": ["error", { before: false, after: true }],
    "max-len": [
      "error",
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "prefer-const": ["error", { destructuring: "all" }],
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "local",
        args: "after-used",
        caughtErrors: "none",
        ignoreRestSiblings: true,
      },
    ],
  },
};
