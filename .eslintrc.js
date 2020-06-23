module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'vue/require-prop-type-constructor': 'off',

    'generator-star-spacing': 'off',

    'arrow-parens': 0,
    'one-var': 0,

    'comma-dangle': ['error', {
      'arrays': 'ignore',
      'objects': 'ignore',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }],

    'import/first': 0,
    'import/named': 2,
    'import/namespace': [2, {allowComputed: true}],
    'import/default': 2,
    'import/export': 2,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,

    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
