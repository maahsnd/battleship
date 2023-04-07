const renderBoard = () => {
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
    let shipCoords = [];
    const coordsMaster = { ships: [] };
    for (let i = 0; i < player.board.shipStorage.length; i++){
      shipCoords.push(player.board.shipStorage[i].coordinateArr)
    }
    shipCoords.forEach((coord) => {
      coordsMaster.ships.push(coord);
    });
    return coordsMaster;
  };
  const renderShips = (playerIdStr, player) => {
    let array = getAllShipCoords(player);
    renderShipCoodinator(playerIdStr, array);
  }
  const renderShipCoodinator = (playerIdStr, coordArr) => {
    let allShips = coordArr.ships;
    while (allShips.length) {
      renderShipHelper(playerIdStr, allShips.pop());
    }
  }
  ///NOTE: IN DOM, CELL COORDINATES ARE: TOPLEFT [1,1], 
  /// TOPRIGHT [1,10], BOTTOMLEFT [10,1], BOTTOMRIGHT [10,10]
  const renderShipHelper = (playerIdStr, coords) => {
    const idStr = `#${playerIdStr}>div:nth-of-type(${coords[0]})>div:nth-of-type(${coords[1]})`
    let cell = document.querySelector(idStr);
    cell.classList.add('ship');
  }
  const serveAttack = async () => {
    while (!localStorage.getItem("attackCoords")) {}
    let coords = localStorage.getItem("attackCoords");
    return JSON.parse(coords);
  }

  const addAttackListeners = () => {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
      cell.addEventListener("click", (e) => {
        let coords = getCoordFromClick(e)
        console.log(coords);
        localStorage.setItem("attackCoords",
          JSON.stringify(coords));
      })
    })
  }
  const getCoordFromClick = (cell) => {
    let str = cell.target.getAttribute("coords");
    let arr = str.split(',')
    return arr;
  }
  return { serveAttack, createBoard, renderShips, addAttackListeners, getAllShipCoords };
};

export default renderBoard;
