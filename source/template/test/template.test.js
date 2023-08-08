import assert from 'assert';
import YourScriptMethod, { InputParameterName, OutputParameterName } from '../src/template.js';

describe('YourScriptMethod', () => {
    const testCases = [
        { input: 'aaa' },
        { input: 'bbb' },
        { input: 'ccc' },
    ];

    testCases.forEach(({ input }) => {
        it(`should return the input parameter "${input}" as the output parameter`, async () => {
            const inputs = { [InputParameterName]: input };
            const expectedOutput = { [OutputParameterName]: input };

            const actualOutput = await YourScriptMethod(inputs);

            assert.deepStrictEqual(actualOutput, expectedOutput);
        });
    });
});
