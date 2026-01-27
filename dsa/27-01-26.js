// Maths

// 441. Arranging Coins
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let l = 0, r = n, mid;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    const k = mid * (mid + 1) / 2; // k*(k+1)/2 for each row

    if (k > n) r = mid - 1;
    else if (k < n) l = mid + 1;
    else return mid;
  }

  return r;
};