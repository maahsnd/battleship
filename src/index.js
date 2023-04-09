import renderBoard from './ui.js';
import { player } from './game.js';
import './style.css';

renderBoard().createBoard('playerBoard');
renderBoard().createBoard('cpuBoard');
renderBoard().addAttackListeners();
let player1 = player();
let cpu = player();
cpu.board.placeShip(3, [[5, 1], [5, 2], [5, 3]]);
renderBoard().renderShips('cpuBoard', cpu);   

const round = () => {
        let attack = JSON.parse(
            localStorage.getItem("attackCoords"));
        player1.makeAttack(attack);
        cpu.board.receiveAttack(attack);
    localStorage.removeItem("attackCoords");
    console.log(cpu.board)
    console.log(cpu.board.shipStorage[0].ship.isSunk())
};



export default round

