// Daily challenge

// 3020. Find the Maximum Number of Elements in Subset
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
  const count = new Map();

  for (const x of nums) {
    count.set(x, (count.get(x) || 0) + 1);
  }

  let res = 0;
  for (const [start, freq] of count) {
    let key = start;
    let total = 0;
    if (key === 1) {
      total = freq % 2 === 1 ? freq : freq - 1;
    } else {
      while ((count.get(key) || 0) >= 2 && count.has(key * key)) {
        total += 2;
        key = key * key;
      }
      total += 1;
    }
    res = Math.max(res, total);
  }

  return res;
};
