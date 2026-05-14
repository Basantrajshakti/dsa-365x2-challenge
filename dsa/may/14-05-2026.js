// Daily challenge

// 2784. Check if Array is Good
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
  const n = nums.length;
  if (n < 2) return false;

  const freq = new Array(201).fill(0);

  for (let a of nums) {
    if (a < 201) freq[a]++;
  }

  for (let i = 1; i < n - 1; i++) {
    if (freq[i] !== 1) return false;
  }

  if (freq[n - 1] !== 2) return false;

  return true;
};
