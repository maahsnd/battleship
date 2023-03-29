export const shipFactory = (size) => {
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

