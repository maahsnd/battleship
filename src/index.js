import renderBoard from './ui.js';
import { player } from './game.js';
import './style.css';

const playGame = () => {    
        renderBoard().createBoard('playerBoard');
        renderBoard().createBoard('cpuBoard');
        renderBoard().addAttackListeners();
        let player1 = player();
        let cpu = player();
        player1.board.placeShip(3, [[1, 10], [2, 10], [3, 10]]);
        cpu.board.placeShip(3, [[1, 5], [2, 5], [3, 5]]);
        renderBoard().renderShips('playerBoard', player1);
        renderBoard().renderShips('cpuBoard', cpu);   
    const round = () => {
        while ((!player1.board.fleetSunk()) &&
            (!cpu.board.fleetSunk())) {
            let attack = JSON.parse(
                localStorage.getItem("attackCoords"));
            console.log(attack)
            player1.makeAttack(attack);
            cpu.board.receiveAttack(attack);
            localStorage.removeItem("attackCoords");
        }
        console.log('gameover')
    };
    return { round}
  }

const test = playGame();

export default playGame

