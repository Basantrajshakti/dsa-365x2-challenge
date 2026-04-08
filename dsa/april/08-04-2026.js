// Daily Challenge

// 3653. XOR After Range Multiplication Queries I
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function (nums, queries) {
  const mod = 1e9 + 7;

  for (let [l, r, k, v] of queries) {
    for (let i = l; i <= r; i += k) {
      nums[i] = (nums[i] * v) % mod;
    }
  }

  let res = 0;
  for (let x of nums) {
    res ^= x;
  }

  return res;
};
