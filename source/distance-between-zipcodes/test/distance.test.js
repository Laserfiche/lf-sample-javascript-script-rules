import assert from 'assert';
import distanceBetweenZipcode from '../src/distance.js';

/**
 * Tests for the distanceBetweenZipcode function.
 */
describe('distanceBetweenZipcode', () => {
    const testCases = [
        [91755, 91770],
        [90210, 10001],
    ];

    /**
     * Tests that distanceBetweenZipcode returns the correct distance between two zip codes.
     */
    testCases.forEach(([z1, z2]) => {
        it(`should return the distance between ${z1} and ${z2}`, async () => {
            const self1 = await distanceBetweenZipcode(z1, z1);
            assert(self1 === 0);

            const self2 = await distanceBetweenZipcode(z2, z2);
            assert(self2 === 0);

            const distance = await distanceBetweenZipcode(z1, z2);
            assert(distance > 0);
        });
    });
});
