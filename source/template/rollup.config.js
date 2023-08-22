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
