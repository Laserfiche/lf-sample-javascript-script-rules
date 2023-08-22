#!/usr/bin/env node

import getArgumentMap from 'lf-argument-parser';
import distanceBetweenZipcode from '../src/distance.js';

// Inputs can be automatically parsed with the provided function
// Or parsed manually via 'process.argv'
const inputMap = getArgumentMap(process.argv);

// In this sample code, we assume that the input must contain two zipcodes under keys named 'Zipcode1' and 'Zipcode2'
if (inputMap['Zipcode1'] === undefined || inputMap['Zipcode2'] === undefined) {
    throw new Error('Zipcode1 and Zipcode2 are required inputs');
}

const distance = distanceBetweenZipcode(inputMap['Zipcode1'], inputMap['Zipcode2']);

// Output can be printed to the console in key:value pairs format
// remote agent will parse the output and return it to the caller
// In this sample code, we assume that the output is a single value under a key named 'Distance'
console.log(`Distance:${distance}`);
