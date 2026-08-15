// 3702. Longest Subsequence With Non-Zero Bitwise XOR
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function (nums) {
  let tot = 0,
    nonZero = 0;

  for (const n of nums) {
    nonZero |= n > 0;
    tot ^= n;
  }

  return nonZero * (nums.length - !tot);
};
