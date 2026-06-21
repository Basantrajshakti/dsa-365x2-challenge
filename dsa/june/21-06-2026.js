// Daily challenge

// 1833. Maximum Ice Cream Bars
/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  const maxCost = Math.max(...costs);
  const freq = Array(maxCost + 1).fill(0);

  for (const cost of costs) {
    freq[cost]++;
  }

  let res = 0;
  for (let cost = 1; cost <= maxCost; cost++) {
    if (freq[cost] === 0) continue;
    const canBuy = Math.min(freq[cost], Math.floor(coins / cost));
    res += canBuy;
    coins -= canBuy * cost;
    if (coins < cost) break;
  }

  return res;
};
