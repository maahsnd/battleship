import renderBoard from './ui.js';
import { player } from './game.js';
import './style.css';

/*     function playGame() {    */
renderBoard().createBoard('playerBoard');
renderBoard().createBoard('cpuBoard');
renderBoard().addAttackListeners();
let player1 = player();
let cpu = player();
player1.board.placeShip(3, [[1, 10], [2, 10], [3, 10]]);
cpu.board.placeShip(3, [[1, 5], [2, 5], [3, 5]]);
console.log(cpu.board.shipStorage)
renderBoard().renderShips('playerBoard', player1);
renderBoard().renderShips('cpuBoard', cpu);    
    
/*     while ((!player1.board.fleetSunk()) && 
        (!cpu.board.fleetSunk())) {
        let attack = renderBoard().serveAttack();
        localStorage.removeItem("attackCoords");
        player1.makeAttack(attack);
        cpu.board.receiveAttack(attack);
        console.log(cpu)
    }
    console.log(player1.board)
    console.log('gameover')  */ 
/*   }

playGame();

  */