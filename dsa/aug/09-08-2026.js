// 1140. Stone Game II
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  const n = piles.length;

  const dp = Array.from({ length: n }, () => new Array(n + 1).fill(0));

  const suffixSum = new Array(n).fill(0);

  suffixSum[n - 1] = piles[n - 1];

  for (let x = n - 2; x >= 0; x--) {
    suffixSum[x] = suffixSum[x + 1] + piles[x];
  }

  for (let x = n - 1; x >= 0; x--) {
    for (let y = 1; y <= n; y++) {
      if (x + 2 * y >= n) {
        dp[x][y] = suffixSum[x];
      } else {
        for (let j = 1; j <= 2 * y; j++) {
          dp[x][y] = Math.max(dp[x][y], suffixSum[x] - dp[x + j][Math.max(y, j)]);
        }
      }
    }
  }

  return dp[0][1];
};
