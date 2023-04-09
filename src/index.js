import renderBoard from './ui.js';
import { player, checkGameOver } from './game.js';
import './style.css';

renderBoard().createBoard('playerBoard');
renderBoard().createBoard('cpuBoard');
let player1 = player();
let cpu = player();
player1.board.placeShip(2, [[2, 2], [2, 3]]);
cpu.board.placeShip(2, [[5, 1], [5, 2]]);
renderBoard().renderShips('cpuBoard', cpu); 
renderBoard().renderShips('playerBoard', player1);  
let turn = 0;
renderBoard().addAttackListeners();
renderBoard().renderTurn(turn)
const round = () => {
    let attack = JSON.parse(
        localStorage.getItem("attackCoords"));
    if (turn % 2 === 0) {
        player1.makeAttack(attack);
        cpu.board.receiveAttack(attack);
    }
    if (turn % 2 === 1) {
        cpu.makeAttack(attack);
        player1.board.receiveAttack(attack);
    } 
    turn += 1;
    localStorage.removeItem("attackCoords");
    renderBoard().renderTurn(turn)
    if (checkGameOver(player1, cpu)) return;
};



export default round

