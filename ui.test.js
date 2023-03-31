import { renderBoard } from './ui.js';
import { main, gameBoard, shipFactory, player } from './game.js';

test('pass correct coordinates for player ships', () => {
  let shipCoords = renderBoard().renderShips(main().player1).ships;
  console.log(shipCoords)
  expect(shipCoords[0]).toEqual([0,0]);
  expect(shipCoords[1]).toEqual([0,1]);
})