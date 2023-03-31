const renderBoard = () => {
  const createCell = () => {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
  }
  const createRow = () => {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let i = 9; i >= 0; i--) {
      row.appendChild(createCell());
    }
    return row;
  }
  const createBoard = (hostID) => {
    let hostDiv = document.getElementById(hostID)
    let board = document.createElement('div')
    for (let i = 9; i >= 0; i--) {
      board.appendChild(createRow());
    }
    hostDiv.appendChild(board);
  }
  const renderShips = (player) => {
    //work through player's ship storage
    //render ships one cell/ set of coordinates at a time
    //make copies of arrays and use like a queue
    
  }
  
return { createBoard }  
}


export { renderShips }