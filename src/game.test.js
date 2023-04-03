import { gameBoard, shipFactory, player, main } from './game.js';

 describe('gameboard tests', () => {
  const testGame = gameBoard();
  testGame.placeShip(2,[[1,1],[2,1]]);
  test('receive succesful attack', () => {
    expect(testGame.receiveAttack([1,1]).length).toBe(2);
  });
  test('receive unsuccesful attack', () => {
    expect(testGame.receiveAttack([3,3])).toBe(false);
  });
  test('track missed attack', () => {
    expect(testGame.missedAttacks[0]).toEqual([3,3]);
  });
  test('track multiple missed attacks', () => {
    testGame.receiveAttack([2,2]);
    expect(testGame.missedAttacks[1]).toEqual([2,2]);
  });
  test('have all ships sunk (no)', () => {
    expect(testGame.fleetSunk()).toBe(false);
  });
  test('have all ships sunk (yes)', () => {
    testGame.receiveAttack([2,1]);
    expect(testGame.fleetSunk()).toBe(true);
  });
}); 

describe('player tests', () => {
  const player1 = player();
  const cpu = player();
  test('attack enemy gameboard', () => {
    player1.board.placeShip(2,[[2,2],[2,3]]);
    expect(player1.board.receiveAttack([2,2]).length).toBe(2); 
  });
  test('make random play', () => {
    let play = cpu.makeRandomCoord();
    expect(play[0]).toBeGreaterThanOrEqual(0);
    expect(play[0]).toBeLessThanOrEqual(10);
    expect(play[1]).toBeGreaterThanOrEqual(0);
    expect(play[1]).toBeLessThanOrEqual(10);
  });
  test.only('no redundant attacks', () => {
    player1.makeAttack([2,1]);
    expect(player1.makeAttack([2,1])).toBe(false);
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

