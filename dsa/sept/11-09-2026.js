// 3483. Unique 3-Digit Even Numbers
/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
  let f = _.countBy(digits);
  let res = 0;

  for (let i = 1; i < 10; i++) for (let j = 0; j < 10; j++) for (let k = 0; k < 9; k += 2) res += (f[i] ?? 0) > 0 && (f[j] ?? 0) > (i === j) && (f[k] ?? 0) > (i === k) + (j === k);

  return res;
};
