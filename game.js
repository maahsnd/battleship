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
  const placeShip = ( shipSize, coordinateArr) => {
    let ship = shipFactory(shipSize);
    shipStorage.push({ ship, coordinateArr }); 
  };
  const receiveAttack = (coordinates) => {
    for (let i = 0; i < shipStorage.length; i++) {
      let hitShip = compareCoordinates(shipStorage[i], coordinates);
      console.log(hitShip)
      if (hitShip) return hitShip;
    }
  missedAttacks.push(coordinates);
  return false;
  };
  
  // returns shipStorage[i].ship (the ship object) if found
  // else returns false
  const compareCoordinates = (container, coordinates) => {
    for (let i = 0; i < container.coordinateArr.length; i++) {
      if (container.coordinateArr[i][0] === coordinates[0] &&
          container.coordinateArr[i][1] === coordinates[1]){
            return container.ship;
      };
    }
    return false;
  };
  return { placeShip, receiveAttack, missedAttacks }
};

export { gameBoard, shipFactory }