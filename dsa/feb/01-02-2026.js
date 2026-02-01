// Sliding window

// 1652. Defuse the Bomb
/**
* @param { number[] } code
 * @param { number } k
   * @return { number[]}
     */
var decrypt = function (code, k) {
  const len = code.length;
  if (k === 0) return new Array(len).fill(0);

  const arr = [];
  let kSum = 0;
  if (k > 0) {
    for (let i = 0; i < k; i++) {
      kSum += code[i % len];
    }
    for (let i = 0; i < len; i++) {
      kSum = kSum - code[i] + code[(i + k) % len];
      arr.push(kSum);
    }
  } else {
    // Last -k elements
    for (let i = -1; i >= k; i--) {
      kSum += code[(i + len) % len];
    }
    arr.push(kSum);
    // Remove k - 1 and add previous element
    for (let i = 1; i < len; i++) {
      kSum = kSum - code[(i + k + len - 1) % len] + code[(i - 1 + len) % len];
      arr.push(kSum);
    }
  }
  return arr;
};