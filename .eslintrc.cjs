module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['plugin:react/recommended', 'standard', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
    rules: {
        'simple-import-sort/imports': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/no-unescaped-entities': 0,
    },
}
