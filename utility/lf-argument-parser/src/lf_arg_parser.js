/**
 * Parses the arguments passed to the script.
 * @param {string[]} args - An array of strings representing the arguments passed to the script.
 * @returns {Object.<string, string>} An object representing the key-value pairs of the arguments.
 * @throws {Error} If the `args` argument is `null` or `undefined`.
 */
export default function getArgumentMap(args) {
    if (args == null) {
        throw new Error('Invalid arguments.');
    }

    const argMap = {};

    // eslint-disable-next-line no-plusplus
    for (let i = 2; i < args.length; i++) {
        const arg = args[i];
        const idx = arg.indexOf('=');
        if (idx > 0) {
            const key = arg.substring(0, idx);
            const val = arg.substring(idx + 1);
            argMap[key] = val;
        }
    }

    return argMap;
}
