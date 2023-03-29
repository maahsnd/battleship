//shipFactory.tests.js

//objects include length, number of hits and sunk/ not sunk
//shipFactory(length)

//includes:
// hit() function that increments the number of hits on a ship
// isSunk() function that calculates true/false based on ship's
// length and number of hits 
import * as ship from './shipFactory.js';

    const testBoat = ship.shipFactory('2');
console.log(testBoat)
    test('does hit() work on new ship', () => {
        expect(testBoat.hit()).toBe(1);
    });
    test('does hit() increment', () => {
        expect(testBoat.hit()).toBe(2);
    });

