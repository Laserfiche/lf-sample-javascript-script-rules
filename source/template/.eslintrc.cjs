/*
 * Copyright (c) Laserfiche.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'airbnb-base',
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    ignorePatterns: [
        '/dist/**'
    ],
    rules: {
        indent: ['error', 4],
        'max-len': ['error', { ignoreComments: true, code: 180 }],
    },
};
