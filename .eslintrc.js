module.exports = {
  extends: ['@bigcommerce/eslint-config'],
  overrides: [
    {
      files: ['src/**/*.tsx'],
      rules: {
        'react/jsx-no-bind': [
          'error',
          {
            allowArrowFunctions: true,
          },
        ],
      },
    },
  ],
};
