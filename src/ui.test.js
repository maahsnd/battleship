import renderBoard from './ui.js';
import { main, gameBoard, shipFactory, player } from './game.js';

test.only('pass correct coordinates for player ships', () => {
  const player1 = player();
  player1.board.placeShip(2, [[0, 0], [0, 1]]);
  let shipCoords = renderBoard().getAllShipCoords(player1);
  console.log(shipCoords)
  expect(shipCoords[0]).toEqual([0,0]);
  expect(shipCoords[1]).toEqual([0,1]);
});

test('convert ship coords to rows and nums', () => {
  //input: ship coords [[0,0][0,1]]
  //desired output: [{row: 0, col: 1}, {row: 0, col: 1}]
  expect()
})