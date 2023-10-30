#!/usr/bin/env node

/*
 * Copyright (c) Laserfiche.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import getArgumentMap from 'lf-argument-parser';
import invoker from '../src/mirror.js';

// Inputs can be automatically parsed with the provided function
// Or parsed manually via 'process.argv'
const inputMap = getArgumentMap(process.argv);
const outputMap = invoker(inputMap);

// Output can be printed to the console in `key:value` pairs format
// remote agent will parse the output and return it to the caller
Object.entries(outputMap).forEach(([key, value]) => {
    console.log(`${key}:${value}`);
});
