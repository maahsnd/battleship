(() => {
  'use strict';
  const e = () => {
    const e = (() => {
      let e = [],
        t = [];
      const r = (e, t) => {
        for (let r = 0; r < e.coordinateArr.length; r++)
          if (e.coordinateArr[r][0] === t[0] && e.coordinateArr[r][1] === t[1])
            return e.ship;
        return !1;
      };
      return {
        placeShip: (t, r) => {
          let o = ((e) => {
            let t = 0,
              r = !1;
            const o = e;
            return {
              hit: () => {
                t += 1;
              },
              checkHits: () => t,
              length: o,
              isSunk: () => (t >= o && (r = !0), r)
            };
          })(t);
          e.push({ ship: o, coordinateArr: r });
        },
        receiveAttack: (o) => {
          for (let t = 0; t < e.length; t++) {
            let n = r(e[t], o);
            if (n) return n.hit(), n;
          }
          return t.push(o), !1;
        },
        missedAttacks: t,
        fleetSunk: () => !e.some((e) => !e.ship.isSunk()),
        shipStorage: e
      };
    })();
    let t = [];
    const r = () => [
        Math.floor(10 * Math.random()),
        Math.floor(10 * Math.random())
      ],
      o = (e) =>
        !!((e) => !t.some((t) => t[0] === e[0] && t[1] === e[1]))(e) &&
        (t.push(e), !0);
    return {
      board: e,
      makeRandomAttack: () => {
        let e = !1;
        for (; !e; ) e = o(r);
      },
      makeAttack: o,
      makeRandomCoord: r,
      getShipPlacement: (e) => {}
    };
  };
  (() => {
    const e = () => {
        const e = document.createElement('div');
        return e.classList.add('cell'), e;
      },
      t = () => {
        const t = document.createElement('div');
        t.classList.add('row');
        for (let r = 9; r >= 0; r--) t.appendChild(e());
        return t;
      };
    return {
      createBoard: (e) => {
        const r = document.getElementById(e),
          o = document.createElement('div');
        for (let e = 9; e >= 0; e--) o.appendChild(t());
        r.appendChild(o);
      },
      renderShips: (e) => {
        const { shipStorage: t } = e.board;
        let r;
        const o = { ships: [] };
        for (; t.length; )
          (r = t.pop().coordinateArr),
            r.forEach((e) => {
              o.ships.push(e);
            });
        return o;
      }
    };
  })().createBoard('playerBoard');
  const t = e(),
    r = e();
  t.board.placeShip(2, [
    [0, 0],
    [0, 1]
  ]),
    r.board.placeShip(2, [
      [4, 0],
      [4, 1]
    ]),
    r.board.placeShip(3, [
      [5, 0],
      [5, 1],
      [5, 2]
    ]),
    console.log(t, 'dad');
})();
