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

// With optimizations
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  return Math.floor(-0.5 + Math.sqrt(2 * n + 0.25));
};


// 492. Construct the Rectangle
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  const sr = Math.floor(Math.sqrt(area));

  for (let i = sr; i >= 1; i--) {
    if (Number.isInteger(area / i)) return [area / i, i];
  }

  return [area, 1]
};