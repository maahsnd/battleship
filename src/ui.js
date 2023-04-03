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
  const createBoard = (hostID) => {
    const hostDiv = document.getElementById(hostID);
    const board = document.createElement('div');
    for (let i = 9; i >= 0; i--) {
      board.appendChild(createRow());
    }
    hostDiv.appendChild(board);
  };
  const renderShips = (player) => {
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

  return { createBoard, renderShips };
};

export default renderBoard;
