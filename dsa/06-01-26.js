// Arrays

// 121. Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minSoFar = prices[0];
  const len = prices.length;

  for (let i = 1; i < len; i++) {
    const price = prices[i];
    minSoFar = Math.min(minSoFar, price);
    maxProfit = Math.max(maxProfit, price - minSoFar);
  }

  return maxProfit;
};