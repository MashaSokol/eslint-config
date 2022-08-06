module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
        project: 'tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/type-annotation-spacing': ['error', {
            before: false,
            after: true,
            overrides: {
                arrow: {
                    before: true,
                    after: true,
                },
            },
        }],
        'brace-style': ['error', '1tbs', {
            allowSingleLine: false,
        }],
        curly: ['error', 'all'],
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: ['**/stories/**'],
        }],
        'import/prefer-default-export': 'off',
        'max-len': ['error', {
            code: 120,
            ignoreTemplateLiterals: true,
        }],
        'no-underscore-dangle': ['error', {
            allow: ['_env_'],
        }],
        'react/destructuring-assignment': 'off',
        'react/function-component-definition': ['error', {
            'namedComponents': 'arrow-function',
            'unnamedComponents': 'arrow-function',
        }],
        'react/jsx-no-useless-fragment': ['error', {
            'allowExpressions': true,
        }],
        'react/jsx-props-no-spreading': 'off',
        'react/no-array-index-key': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
    },
};
