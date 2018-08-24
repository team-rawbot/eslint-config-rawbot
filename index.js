module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  rules: {
    // Overall styling
    indent: [
      'error', 2, {
        VariableDeclarator: {
          var: 2,
          let: 2,
          const: 3,
        },
        SwitchCase: 1,
      },
    ],
    camelcase: 'error',
    'eol-last': 'error',
    'max-len': ['warn', 120, 4],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    semi: ['error', 'always'],
    'func-style': ['error', 'declaration'],
    'max-params': ['error', 3],
    'max-depth': ['error', 4],
    'no-confusing-arrow': 'error',
    'one-var': ['error', 'never'],
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'brace-style': 'error',
    'comma-style': 'error',
    'comma-dangle': ['error', 'always-multiline'],

    // Write less, code more
    'no-new-object': 'error',
    'no-array-constructor': 'error',
    'no-new-func': 'error',
    'object-shorthand': ['error', 'always'],
    'quote-props': ['error', 'as-needed'],
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'never'],
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'prefer-spread': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'always'],
    'no-useless-constructor': 'error',
    'no-duplicate-imports': 'error',
    'dot-notation': 'error',
    'no-extra-bind': 'error',

    // Touchy stuff you probably don’t want in production
    'no-console': 'warn',
    'no-eval': 'error',
    'no-loop-func': 'error',
    'no-dupe-class-members': 'error',
    eqeqeq: ['error', 'always'],

    // Variables
    'no-var': 'error',
    'prefer-const': ['error', {
      destructuring: 'all',
    }],
    'no-const-assign': 'error',
    'no-unused-vars': 'error',
    'no-undef': 'error',

    // Spacings
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
    }],
    curly: ['error', 'all'],
    'space-before-blocks': ['error', 'always'],
    'keyword-spacing': ['error', {
      before: true,
      after: true,
    }],
    'arrow-spacing': ['error', {
      before: true,
      after: true,
    }],
    'space-before-function-paren': ['error', 'never'],
    'space-infix-ops': 'error',
    'no-whitespace-before-property': 'error',
    'padded-blocks': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
  },
};
