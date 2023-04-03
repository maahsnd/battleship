import renderBoard from './ui.js';
import { gameBoard, shipFactory, player } from './game.js';
import './style.css';

renderBoard().createBoard('playerBoard'); 
const player1 = player();
player1.board.placeShip(3, [[1, 10], [2, 10], [3, 10]]);
player1.board.placeShip(3, [[1, 5], [2, 5], [3, 5]]);
renderBoard().renderShips('playerBoard', player1);



