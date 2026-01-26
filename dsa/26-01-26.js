// Maths

// 367. Valid Perfect Square
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let l = 0, r = num, mid = 0;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);

    const m = mid * mid;
    if (m > num) r = mid - 1;
    else if (m < num) l = mid + 1;
    else return true;
  }

  return false;
};