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