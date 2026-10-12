// 2897. Apply Operations on Array to Maximize Sum of Squares
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSum = function (nums, k) {
  const MOD = 1000000007;
  const bitCount = new Array(31).fill(0);

  for (const num of nums) {
    for (let b = 0; b < 31; b++) {
      if ((num >> b) & 1) {
        bitCount[b]++;
      }
    }
  }

  let ans = 0;

  for (let i = 0; i < k; i++) {
    let val = 0;

    for (let b = 0; b < 31; b++) {
      if (bitCount[b] > i) {
        val |= 2 ** b;
      }
    }

    val = BigInt(val);
    ans = Number((BigInt(ans) + val * val) % BigInt(MOD));
  }

  return ans;
};
