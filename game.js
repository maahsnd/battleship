const shipFactory = (size) => {
  let hits = 0;
  let sunk = false;
  const length = size;
  const hit = () => {
    hits += 1;
  }
  const checkHits = () => {
    return hits;
  }
  const isSunk = () => {
    if (hits >= length) {
      sunk = true;
    }
    return sunk;
  }
return { hit, checkHits, length, isSunk }
};

const gameBoard = () => {
  //[{ ship, [coordinateArray of all occupied coordinates] }]
  let shipStorage =  [];
  let missedAttacks = [];
  const placeShip = (shipSize, coordinateArr) => {
    let ship = shipFactory(shipSize);
    shipStorage.push({ ship, coordinateArr }); 
  };
  const receiveAttack = (coordinates) => {
    for (let i = 0; i < shipStorage.length; i++) {
      let hitShip = compareCoordinates(shipStorage[i], coordinates);
      if (hitShip) {
        hitShip.hit();
        return hitShip;
      }
    }
  missedAttacks.push(coordinates);
  return false;
  };
  const compareCoordinates = (container, coordinates) => {
    for (let i = 0; i < container.coordinateArr.length; i++) {
      if (container.coordinateArr[i][0] === coordinates[0] &&
          container.coordinateArr[i][1] === coordinates[1]){
            return container.ship;
      };
    }
    return false;
  };
  const fleetSunk = () => {
    let aShipFloats = shipStorage.some((container) => !(container.ship.isSunk()))
    return (aShipFloats ? false : true);
  };
  
  return { placeShip, receiveAttack, missedAttacks, fleetSunk, shipStorage }
};

const player = () => {
  const board = gameBoard();
  let attacksMade = [];
  const getShipPlacement = (size) => {
    
  }
  const makeRandomCoord = () => {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  };
  const checkAttack = (coordinates) => {
    if (attacksMade.some((coordSet) => (coordSet[0] === coordinates[0] &&
        coordSet[1] === coordinates[1]))) {return false }
    else { return true};
  }
  const makeAttack = (coordinates) => {
    if (!checkAttack(coordinates)) return false;
    attacksMade.push(coordinates);
    return true;
  }
  const makeRandomAttack = () => {
    let attack = false;
    while (!attack) {
      attack = makeAttack(makeRandomCoord);
    }
  }
  return { board, makeRandomAttack, makeAttack, makeRandomCoord, getShipPlacement };
};

const main = () => {
  const player1 = player();
  const cpu = player();
  player1.board.placeShip(2, [[0,0],[0,1]]);
  player1.board.placeShip(3, [[0,2],[0,3],[0,4]]);
  cpu.board.placeShip(2, [[4,0],[4,1]]);
  cpu.board.placeShip(3, [[5,0],[5,1],[5,2]]);
}


export { gameBoard, shipFactory, player, main }