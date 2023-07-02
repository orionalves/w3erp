module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    quotes: ['error', 'single'],
    'max-len': ['error', { code: 80 }],
    indent: ['error', 2],
    'comma-spacing': ['error', { before: false, after: true }],
    'max-lines': [
      'error',
      { max: 100, skipBlankLines: true, skipComments: true }
    ],
    'no-console': 'error',
    eqeqeq: ['error', 'smart'],
    'no-empty': 'warn',
    'no-cond-assign': ['error', 'always'],
    // prettier
    'prettier/prettier': [
      'error',
      {
        parser: 'typescript',
        semi: false,
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2,
        semicolons: false,
        arrowParens: 'avoid',
        endOfLine: 'auto'
      }
    ]
  }
}
