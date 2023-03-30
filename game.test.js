import { gameBoard, shipFactory } from './game.js';

describe.only('gameboard tests', () => {
  test('gameboard places ship at coordinates', () => {
    const testGame = gameBoard();
    testGame.placeShip(1,[0,0]);
    expect(testGame.searchShipStorage([0,0]).length).toBe(1);
  });
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