module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  plugins: ["react", "jsx-a11y", "import", "prettier", "@typescript-eslint"],
  globals: {},
  rules: {
    // prettier
    "prettier/prettier": ["error"],
    // TypeScript
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    // v4 changes
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    // React
    "consistent-return": 'off',
    "array-callback-return": 'off',
    "react/prop-types": 'off',
    "react/jsx-props-no-spreading": 'off',
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    // import
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          }, {
            pattern: "@custom-types/**",
            group: "internal",
            position: "before"
          }, {
            pattern: "@static**",
            group: "internal",
            position: "after"
          }, {
            pattern: "@components/_shared**",
            group: "internal",
            position: "after"
          }, {
            pattern: "@**",
            group: "internal",
            position: "before"
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/']
      },
      typescript: {} // this loads <rootdir>/tsconfig.json to eslint
    },
    "import/extensions": [".js", ".ts", ".mjs", ".jsx", ".tsx"]
  }
};
