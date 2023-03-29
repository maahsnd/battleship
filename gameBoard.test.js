import * as board from './shipFactory.js';

describe.only('gameboard tests', () => {
  test('gameboard places ship at coordinates', () => {
    board.placeShip('ship1',[0,0]);
    expect(board.coordinateCheck([0,0])).toBe('ship1');
  })
})