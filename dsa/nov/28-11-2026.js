// 3947. Maximum Number of Items From Sale II
/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
var maximumSaleItems = function (items, budget) {
  const n = items.length;

  let cheapestPrice = items[0][1];
  for (const item of items) {
    cheapestPrice = Math.min(cheapestPrice, item[1]);
  }

  const factorCount = new Array(n + 1).fill(0);
  for (const item of items) {
    factorCount[item[0]]++;
  }

  // multipleCount[f] = number of items whose factor is a multiple of f.
  const multipleCount = new Array(n + 1).fill(0);
  for (let factor = 1; factor <= n; factor++) {
    for (let multiple = factor; multiple <= n; multiple += factor) {
      multipleCount[factor] += factorCount[multiple];
    }
  }

  // Each item contributes one "doubled" slot per free copy it can earn.
  const slots = [];
  for (const item of items) {
    const price = item[1];
    if (price >= 2 * cheapestPrice) {
      continue;
    }

    const freeCopies = multipleCount[item[0]] - 1;
    if (freeCopies > 0) {
      slots.push([price, freeCopies]);
    }
  }
  slots.sort((a, b) => a[0] - b[0]);

  let remaining = budget;
  let doubledCopies = 0;
  for (const slot of slots) {
    const price = slot[0];
    const available = slot[1];
    const take = Math.min(available, Math.floor(remaining / price));

    doubledCopies += take;
    remaining -= take * price;

    if (remaining < price) {
      break;
    }
  }

  return 2 * doubledCopies + Math.floor(remaining / cheapestPrice);
};
