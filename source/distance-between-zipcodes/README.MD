# distance-between-zipcodes

A simple package that calculates the distance between two zip codes using the Haversine formula.

## Package Scripts

- To install the package, cd `root` and run `npm install`.
- To test the package, run `npm test`.
- To build the package, run `npm run build`.
  - this will generate a `dist` folder with the compiled package.

## Usage

To use the package, import the `distanceBetweenZipcode` function and call it with two zip codes:

```javascript
import distanceBetweenZipcode from 'distance-between-zipcodes';

const zip1 = '90210';
const zip2 = '10001';

const distance = distanceBetweenZipcode(zip1, zip2);

console.log(`The distance between ${zip1} and ${zip2} is ${distance} miles.`);
```

This will calculate the distance between the two zip codes using the Haversine formula and log the result to the console.

## API

### `distanceBetweenZipcode(z1: string, z2: string): number`

Calculates the distance between two zip codes using the Haversine formula.

- `z1` - The first zip code.
- `z2` - The second zip code.
- Returns the distance between the two zip codes in miles.

## Command Line Interface

This would be the same interface how remote agent invoke the target script

- npm: `npm start -- Zipcode1=91001 Zipcode2=10110` 
- node: `node bin/launcher.mjs Zipcode=91001 Zipcode2=10110`
- Or after run `npm build`: `node dist/distance Zipcode=91001 Zipcode2=10110`

Should see below output after execution

```bash
> distance-between-zipcodes@0.1.0 start
> node ./bin/launcher.mjs Zipcode1=91001 Zipcode2=10110

Distance between Altadena, CA and New York, NY is 2437 miles.
Distance:2437
```

"Distance between Altadena, CA and New York, NY is 2437 miles." is just some log information.
But any text write to stdout in a format {key}:{value} will be parsed as output parameter by remote agent worker. 
e.g., "Distance:2437" would produce a output parameter map `{ "Distance": "2437" }`.

## License

This package is licensed under the MIT License. See the `LICENSE` file for details.
