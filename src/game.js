const shipFactory = (size) => {
  let hits = 0;
  let sunk = false;
  const length = size;
  const hit = () => {
    hits += 1;
    isSunk()
    return hits;
  };
  const checkHits = () => {
    return hits;
  };
  const isSunk = () => {
    if (hits >= length) {
      sunk = true;
      console.log('sunk')
    }
    return sunk;
  };
  return { hit, checkHits, length, isSunk, hits };
};

const gameBoard = () => {
  //[{ ship, [coordinateArray of all occupied coordinates] }]
  let shipStorage = [];
  let missedAttacks = [];
  const placeShip = (shipSize, coordinateArr) => {
    let ship = shipFactory(shipSize);
    shipStorage.push({ ship, coordinateArr });
  };
  const receiveAttack = (coordinates) => {
    for (let i = 0; i < shipStorage.length; i++) {
      let hitShip = compareCoordinates(shipStorage[i], coordinates);
      if (hitShip) {
         hitShip.hits =  hitShip.hit()
        return hitShip;
      }
    }
    missedAttacks.push(coordinates);
    return false;
  };
  const compareCoordinates = (container, coordinates) => {
    for (let i = 0; i < container.coordinateArr.length; i++) {
      if (
        container.coordinateArr[i][0] == coordinates[0] &&
        container.coordinateArr[i][1] == coordinates[1]
      ) {
        return container.ship;
      }
    }
    return false;
  };
  const fleetSunk = () => {
    let aShipFloats = shipStorage.some((container) => !container.ship.isSunk());
    return aShipFloats ? false : true;
  };

  return { placeShip, receiveAttack, missedAttacks, fleetSunk, shipStorage };
};

const player = () => {
  const board = gameBoard();
  let attacksMade = [];
  const makeRandomCoord = () => {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  };
  const checkAttack = (coordinates) => {
    if (coordinates.length === 0) {
      return true;
    }
    if (
      attacksMade.some(
        (coordSet) =>
          coordSet[0] === coordinates[0] && coordSet[1] === coordinates[1]
      )
    ) {
      return false;
    } else {
      return true;
    }
  };
  const makeAttack = (coordinates) => {
    if (!checkAttack(coordinates)) {
      return false;
    }
    attacksMade.push(coordinates.slice());
    return true;
  };
  const makeRandomAttack = () => {
    let attack = false;
    while (!attack) {
      attack = makeAttack(makeRandomCoord);
    }
  };
  return {
    board,
    makeRandomAttack,
    makeAttack,
    makeRandomCoord
  };
};

const checkGameOver = (player1, cpu) => {
  let p1Sunk = player1.board.fleetSunk();
  let cpuSunk = cpu.board.fleetSunk();
  if (p1Sunk || cpuSunk) {
    alert('gameover');
    return true
  }
  return false;
};

export { gameBoard, shipFactory, player, checkGameOver };
