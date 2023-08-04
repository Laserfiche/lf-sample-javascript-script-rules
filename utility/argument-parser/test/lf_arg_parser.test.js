import assert from 'assert';
import getArgumentMap from '../src/lf_arg_parser.js';

/**
 * Unit tests for the `lf_arg_parser` module.
 */
describe('lf-arg-parser', () => {
    /**
     * Test cases for the `getArgumentMap` function.
     * @type {Array.<{input: string[], expected: Object.<string, string>}>}
     */    
    const testee = [
        { input: ['node.exe', './some/path/script.js', 'k1=v1'], expected: { k1: 'v1' } },
        { input: ['node.exe', './some/path/script.js', 'k1=v1', 'k2=v2'], expected: { k1: 'v1', k2: 'v2' } },
        { input: ['node.exe', './some/path/script.js', 'k1=v1', 'k2='], expected: { k1: 'v1', k2: '' } },
        { input: ['node.exe', './some/path/script.js', 'k1=a"bc'], expected: { k1: 'a"bc' } },
        { input: ['node.exe', './some/path/script.js', 'k1=""'], expected: { k1: '""' } },
        { input: ['node.exe', './some/path/script.js', '="abc"', 'k2=v2'], expected: { k2: 'v2' } },
        { input: ['node.exe', './some/path/script.js'], expected: {} },
    ];

    testee.forEach(({ input, expected }) => {
        it('Should parse the correct arguments into key value pairs', () => {
            const actual = getArgumentMap(input);
            assert.deepStrictEqual(actual, expected);
        });
    });
});
