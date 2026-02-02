// Sliding window

// 2269. Find the K-Beauty of a Number
/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  const s = `${num}`;
  let ctr = 0;

  for (let i = 0; i <= s.length - k; i++) {
    const sub = +s.substring(i, i + k);
    if (num % sub === 0) ctr++;
  }

  return ctr;
};


// 2379. Minimum Recolors to Get K Consecutive Black Blocks
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let minCtr = 0;
  let wCtr = 0;
  let window = '';

  for (let i = 0; i < k; i++) {
    window += blocks[i];
    if (blocks[i] === 'W') wCtr++;
  }
  minCtr = wCtr;

  for (let i = 1; i <= blocks.length - k; i++) {
    let prevChar = blocks[i - 1];
    let nextChar = blocks[i - 1 + k];

    if (prevChar === 'W') wCtr--;
    if (nextChar === 'W') wCtr++;

    window = blocks.substring(i, i + k);

    if (wCtr < minCtr) minCtr = wCtr;
  }

  return minCtr;
};