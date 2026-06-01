// Daily challenge

// 2144. Minimum Cost of Buying Candies With Discount
/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
  cost.sort((a, b) => b - a);
  let sum = 0;

  for (let i = 0; i < cost.length; i += 3) {
    sum += cost[i];
    if (i + 1 < cost.length) {
      sum += cost[i + 1];
    }
  }

  return sum;
};
