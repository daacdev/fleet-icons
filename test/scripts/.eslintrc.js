module.exports = {
  root: true,
  env: {
    commonjs: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['eslint:recommended', 'plugin:jest/recommended', 'prettier'],
};
