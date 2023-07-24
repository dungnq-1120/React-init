/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    es2022: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/core-web-vitals",
    "plugin:react-hooks/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["import"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "2022",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    warnOnUnsupportedTypeScriptVersion: true,
    tsconfigRootDir: __dirname,
    project: "./tsconfig.eslint.json",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
    "import/extensions": [".js", ".ts", ".tsx", ".d.ts"],
    "import/resolver": {
      typescript: {
        project: "./tsconfig.eslint.json",
      },
    },
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  rules: {
    "object-shorthand": [
      "error",
      "always",
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],

    "max-lines": [
      "error",
      {
        max: 250,
        skipComments: true,
        skipBlankLines: true,
      },
    ],

    "no-restricted-imports": [
      "error",
      {
        patterns: ["@mui/*/*/*", "!@mui/material/colors/*"],
      },
    ],

    "no-console": "error",

    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],

    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],

    "import/no-anonymous-default-export": "error",

    "import/no-duplicates": "error",

    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        disallowTypeAnnotations: true,
      },
    ],

    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array",
        readonly: "array",
      },
    ],

    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow",
      },
    ],

    "@typescript-eslint/no-non-null-assertion": "off",
  },
  overrides: [
    {
      files: ["src/**/*.tsx"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:jsx-a11y/recommended",
      ],
      rules: {
        "react/self-closing-comp": "error",
        "react/prop-types": "off",
      },
    },
    {
      files: ["src/components/**/*.stories.tsx"],
      extends: ["plugin:storybook/recommended"],
    },
    {
      files: ["src/**/*.test.ts?(x)"],
      extends: ["plugin:jest/recommended"],
    },
    {
      files: ["src/**/*.test.tsx"],
      extends: ["plugin:testing-library/react", "plugin:jest-dom/recommended"],
    },
    {
      files: [
        "./.eslintrc.js",
        "./*.config.ts",
        "./*.config.js",
        "./.storybook/main.js",
      ],
      env: {
        node: true,
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["./*.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
