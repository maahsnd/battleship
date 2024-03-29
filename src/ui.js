import round from './index.js';
const renderBoard = () => {
  const renderTurn = (turn) => {
    let playerStr = (turn % 2 === 0) ? ('player1') : ('cpu');
    let turnDiv = document.querySelector('.turn');
    turnDiv.innerHTML = `<b>Turn: ${playerStr}<b>`;
    return turnDiv;
  }
  const createCell = (rowNum, colNum) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    let coords = [rowNum,colNum];
    const attr = document.createAttribute("coords")
    attr.value = coords;
    cell.setAttributeNode(attr);
    return cell;
  };
  const createRow = (colNum) => {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 1; j <= 10; j++) {
      row.appendChild(createCell(j, colNum));
    }
    return row;
  };
  const createBoard = (boardID) => {
    const board = document.getElementById(boardID);
    for (let i = 1; i <= 10; i++) {
      board.appendChild(createRow(i));
    }
  };
  const getAllShipCoords = (player) => {
    // work through player's ship storage
    // render ships one cell/ set of coordinates at a time
    // make copies of arrays and use like a queue
    const coordsMaster = [];
    for (let i = 0; i < player.board.shipStorage.length; i++){
      let shipCoords = [];
      shipCoords.push(player.board.shipStorage[i].coordinateArr)
      for (let j = 0; j < shipCoords[0].length; j++){
        coordsMaster.push(shipCoords[0][j]);
      }
    };
    return coordsMaster;
    }
  const renderShips = (playerIdStr, player) => {
    let array = getAllShipCoords(player);
    renderShipCoodinator(playerIdStr, array);
  }
  const renderShipCoodinator = (playerIdStr, coordArr) => {
    while (coordArr.length) {
      renderShipHelper(playerIdStr, coordArr.pop());
    }
  }
  ///NOTE: IN DOM, CELL COORDINATES ARE: TOPLEFT [1,1], 
  /// TOPRIGHT [1,10], BOTTOMLEFT [10,1], BOTTOMRIGHT [10,10]
  const renderShipHelper = (playerIdStr, coords) => {
    const idStr = `#${playerIdStr}>div:nth-of-type(${coords[1]})>div:nth-of-type(${coords[0]})`
    let cell = document.querySelector(idStr);
    cell.classList.add('ship');
  }
  const renderAttack = (coords, attackedPlayerStr) => {
    let cell = document.querySelector(
      `#${attackedPlayerStr}>div:nth-of-type(${coords[1]})>div:nth-of-type(${coords[0]})`
    );
    let hitOrMiss = localStorage.getItem("hitOrMiss");
    console.log(hitOrMiss)
    if (hitOrMiss === "hit") {
      cell.classList.add('hit')
      console.log(cell)
    }
    if (hitOrMiss === "miss") {
      cell.classList.add('miss');
    }
  }
  const serveAttack = () => {
    round();
  }

  const addAttackListeners = () => {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
      cell.addEventListener("click", (e) => {
        let coords = getCoordFromClick(e)
        localStorage.setItem("attackCoords",
          JSON.stringify(coords));
        serveAttack()
      })
    })
  }
  const getCoordFromClick = (cell) => {
    let str = cell.target.getAttribute("coords");
    let arr = str.split(',')
    return arr;
  }
  return { createBoard, renderShips, addAttackListeners, getAllShipCoords, renderTurn, renderAttack };
};

export default renderBoard;
