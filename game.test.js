import { gameBoard, shipFactory } from './game.js';

describe.only('gameboard tests', () => {
  const testGame = gameBoard();
  testGame.placeShip(2,[[0,0],[0,1]]);
  test('receive succesful attack', () => {
    expect(testGame.receiveAttack([0,0]).length).toBe(2);
  });
  test('receive unsuccesful attack', () => {
    expect(testGame.receiveAttack([3,3])).toBe(false);
  })
});

describe('hit tests', () => {
  const testBoat = shipFactory(3);
  test('does hit() work on new ship', () => {
    testBoat.hit();
    expect(testBoat.checkHits()).toBe(1);
  });
  test('does hit() increment', () => {
    testBoat.hit();
    expect(testBoat.checkHits()).toBe(2);
  });
  test('does ship sink', () => {
    const bikiniboat = ship.shipFactory(2);
    bikiniboat.hit();
    bikiniboat.hit();
    expect(bikiniboat.isSunk()).toBe(true);
});
});

describe('create new ship object', () => {
  const lilboat = shipFactory(2);
  test('has length', () => {
    expect(lilboat.length).toBe(2);
  });
  test('has 0 hits', () => {
    expect(lilboat.checkHits()).toBe(0);
  });

  test('is not sunk', () => {
    expect(lilboat.isSunk()).toBe(false);
  });
});  