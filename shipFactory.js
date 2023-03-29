const shipFactory = (length) => {
  let hits = 0;
  const hit = () => {
    hits += 1;
    return hits;
  }
  
return { hit }
};

export { shipFactory }