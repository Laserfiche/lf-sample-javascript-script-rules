import { lookup, distance } from 'zipcodes';

/**
 * Calculates the distance between two zip codes using the Haversine formula.
 *
 * @param {string} z1 - The first zip code.
 * @param {string} z2 - The second zip code.
 * @returns {number} The distance between the two zip codes in miles.
 */
export default function distanceBetweenZipcode(z1, z2) {
    const dist = distance(z1, z2);
    const location1 = lookup(z1);
    const location2 = lookup(z2);

    console.info(`Distance between ${location1.city}, ${location1.state} and ${location2.city}, ${location2.state} is ${dist} miles.`);

    return dist;
}
