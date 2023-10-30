/*
 * Copyright (c) Laserfiche.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import assert from 'assert';
import YourScriptMethod from '../src/mirror.js';

describe('YourScriptMethod', () => {
    const testCases = [
        { input: 'aaa' },
        { input: 'bbb' },
        { input: 'ccc' },
    ];

    testCases.forEach(({ input }) => {
        it(`should return the input parameter "${input}" as the output parameter`, async () => {
            const inputs = { key: input };
            const expectedOutput = { key: input };

            const actualOutput = await YourScriptMethod(inputs);

            assert.deepStrictEqual(actualOutput, expectedOutput);
        });
    });
});
