require('@reskript/config-lint/patch');

module.exports = {
    extends: require.resolve('@reskript/config-lint/config/eslint'),
    rules: {
        'max-len': 'off',
        'react/jsx-no-bind': 'off',
    },
};
