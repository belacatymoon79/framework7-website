module.exports = {
  extends: ['plugin:react/recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    'react/display-name': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-destructuring': 'off',
    'arrow-body-style': 'off',
    'no-console': 'off',
    'global-require': 'off',
    'no-useless-escape': 'off',
    'no-continue': 'off',
    'no-underscore-dangle': 'off',
  },
  globals: {
    localStorage: true,
    window: true,
    document: true,
    XMLHttpRequest: true,
    Blob: true,
    Document: true,
    FormData: true,
  },
};
