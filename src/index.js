import renderBoard from './ui.js';
import { gameBoard, shipFactory, player } from './game.js';
import './style.css';

renderBoard().createBoard('playerBoard'); 
renderBoard().renderShips('playerBoard', [1, 10]);



