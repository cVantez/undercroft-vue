module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb'
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './client/src'],
          ['#scss', './client/src/scss'],
          ['#config', './server/config']
        ]
      }
    }
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'comma-dangle': ['error', 'only-multiline'],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error'],
    'max-len': ['error', {
      code: 120,
      ignoreUrls: true
    }],
    'no-console': process.env.NODE_ENV === 'production' ? warn : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? warn : 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: ['state', 'acc', 'e']
    }],
    'no-plusplus': 'off',
    'no-underscore-dangle': ['error', {
      allow: ['__links', '__meta']
    }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'vue/max-attributes-per-line': ['warn', {
      singleline: {
        max: 3
      }
    }],
    'vue/multiword-component-names': 'off',
    'vue/no-deprecated-v-bind-sync': 'off',
    // this rule cannot recognize dynamically-bound `:for` syntax
    'vuejs-accessibility/label-has-for': 'off',
    yoda: ['error', 'never', {
      exceptRange: true
    }]
  }
};
