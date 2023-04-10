import renderBoard from './ui.js';
import { player, checkGameOver } from './game.js';
import './style.css';

renderBoard().createBoard('playerBoard');
renderBoard().createBoard('cpuBoard');
let player1 = player();
let cpu = player();
player1.board.placeShip(2, [[2, 2], [2, 3]]);
cpu.board.placeShip(2, [[5, 1], [5, 2]]);
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
        renderBoard().renderAttack(attack, 'cpuBoard');
    }
    localStorage.removeItem("attackCoords");
    if (checkGameOver(player1, cpu)) return;
    turn += 1;
    renderBoard().renderTurn(turn)
    setTimeout(() => {
        if (turn % 2 === 1) {
            cpu.makeRandomAttack();
            attack = JSON.parse(
                localStorage.getItem("attackCoords"))
            player1.board.receiveAttack(attack);
            renderBoard().renderAttack(attack, 'playerBoard');
        }
        localStorage.removeItem("attackCoords");
        if (checkGameOver(player1, cpu)) return;
        turn += 1;
        renderBoard().renderTurn(turn)
    }, 2000);
};



export default round

