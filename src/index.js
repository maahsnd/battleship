import renderBoard from './ui.js';
import { player } from './game.js';
import './style.css';

function playGame() {
    renderBoard().createBoard('playerBoard');
    renderBoard().createBoard('cpuBoard');
    renderBoard().addAttackListeners();
    const player1 = player();
    const cpu = player();
    player1.board.placeShip(3, [[1, 10], [2, 10], [3, 10]]);
    cpu.board.placeShip(3, [[1, 5], [2, 5], [3, 5]]);
    renderBoard().renderShips('playerBoard', player1);
    renderBoard().renderShips('cpuBoard', cpu);
    while ((!player1.board.fleetSunk()) && 
        (!cpu.board.fleetSunk())) {
        
        }
}

playGame();

