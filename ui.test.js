import { renderShips } from './ui.js';
import { main, gameBoard, shipFactory, player } from './game.js';

test('pass correct coordinates for player ships', () => {
  let shipCoords = renderShips(player1);
  console.log(shipCoords)
  expect(shipCoords.sort()).toEqual({[0,0], [0,1], [0,2],[0,3],[0,4]})
})