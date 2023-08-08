/**
 * The name of the input parameter that should be passed to the script.
 * @type {string}
 */
export const InputParameterName = 'InputParameterName';

/**
 * The name of the output parameter that should be returned by the script.
 * @type {string}
 */
export const OutputParameterName = 'OutputParameterName';

/**
 * The main function for your script.
 * @param {Object.<string, string>} inputs - An object representing the input parameters passed to the script.
 * @returns {Object.<string, string>} An object representing the output parameters returned by the script.
 */
export default function YourScriptMethod(inputs) {
    // Retrieve your input parameters from process.argv after parser
    const inputParameter = inputs[InputParameterName];

    // Other tasks for your script can be performed here
    // ...

    // Return your output parameters to the caller
    return { [OutputParameterName]: inputParameter };
}
