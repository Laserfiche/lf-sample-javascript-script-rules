/*
 * Copyright (c) Laserfiche.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'bin/launcher.mjs',
    output: {
        file: 'dist/template.js',
        format: 'cjs',
    },
    plugins: [
        resolve(),
        commonjs(),
    ],
};
