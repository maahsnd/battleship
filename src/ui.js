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
  const renderShips = (playerIdStr, coords) => {
    console.log(playerIdStr, coords[0], coords[1]);
    const idStr = `#${playerIdStr}>div:nth-of-type(${coords[0]})>div:nth-of-type(${coords[1]})`
    console.log(idStr);
    let cell = document.querySelector(idStr);
    console.log(cell)
    cell.classList.add('ship');
  }

  return { createBoard, getAllShipCoords, renderShips };
};

export default renderBoard;
