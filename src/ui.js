const renderBoard = () => {
  const createCell = () => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
  };
  const createRow = () => {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let i = 9; i >= 0; i--) {
      row.appendChild(createCell());
    }
    return row;
  };
  const createBoard = (boardID) => {
    const board = document.getElementById(boardID);
    for (let i = 9; i >= 0; i--) {
      board.appendChild(createRow());
    }
  };
  const getAllShipCoords = (player) => {
    // work through player's ship storage
    // render ships one cell/ set of coordinates at a time
    // make copies of arrays and use like a queue
    const { shipStorage } = player.board;
    let shipCoords;
    const coordsMaster = { ships: [] };
    while (shipStorage.length) {
      shipCoords = shipStorage.pop().coordinateArr;
      shipCoords.forEach((coord) => {
        coordsMaster.ships.push(coord);
      });
    }
    return coordsMaster;
  };
  const renderShips = (playerIdStr, player) => {
    let array = getAllShipCoords(player);
    renderShipCoodinator(playerIdStr, array);
  }
  const renderShipCoodinator = (playerIdStr, coordArr) => {
    let allShips = coordArr.ships;
    while (allShips.length) {
      console.log('a')
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

  return { createBoard, renderShips };
};

export default renderBoard;
