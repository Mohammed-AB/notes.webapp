module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-param-reassign': 'off',
    'arrow-body-style': 'off',
    'consistent-return': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}