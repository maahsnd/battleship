//shipFactory.tests.js

//objects include length, number of hits and sunk/ not sunk
//shipFactory(length)

//includes:
// hit() function that increments the number of hits on a ship
// isSunk() function that calculates true/false based on ship's
// length and number of hits 
import * as ship from './shipFactory.js';
const testBoat = ship.shipFactory(0);
describe('hit tests', () => {
  test('does hit() work on new ship', () => {
    testBoat.hit();
    expect(testBoat.checkHits()).toBe(1);
  });
  test('does hit() increment', () => {
    testBoat.hit();
    expect(testBoat.checkHits()).toBe(2);
  });
});

describe('create new ship object', () => {
  const lilboat = ship.shipFactory(2);
  test('has length', () => {
    expect(lilboat.length).toBe(2);
  });
  test('has 0 hits', () => {
    expect(lilboat.checkHits()).toBe(0);
  });

  test('is not sunk', () => {
    expect(lilboat.isSunk()).toBe(false);
  });
})  