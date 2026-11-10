// 3693. Climbing Stairs II
/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function (n, costs) {
  let [a, b, c] = [0, 0, 0]; // dp[i - 1], dp[i - 2], dp[i - 3] for i = 1, the fake steps below 0 never win

  for (const cost of costs) {
    [a, b, c] = [cost + Math.min(a + 1, b + 4, c + 9), a, b];
  }

  return a;
};
