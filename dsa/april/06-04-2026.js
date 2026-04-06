// Daily Challenge

// 874. Walking Robot Simulation
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  const set = new Set(obstacles.map((o) => o[0] + "," + o[1]));
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let d = 0,
    x = 0,
    y = 0,
    res = 0;

  for (let c of commands) {
    if (c === -2) d = (d + 3) % 4;
    else if (c === -1) d = (d + 1) % 4;
    else {
      for (let i = 0; i < c; i++) {
        let ox = x + dirs[d][0];
        let oy = y + dirs[d][1];
        if (set.has(ox + "," + oy)) break;
        x = ox;
        y = oy;
        res = Math.max(res, x * x + y * y);
      }
    }
  }

  return res;
};

// 771. Jewels and Stones
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const set = new Set(jewels);
  let ctr = 0;

  for (const char of stones) {
    if (set.has(char)) ctr++;
  }

  return ctr;
};
