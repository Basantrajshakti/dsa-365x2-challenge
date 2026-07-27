// 1464. Maximum Product of Two Elements in an Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let first = 0;
  let second = 0;

  for (const num of nums) {
    if (num >= first) {
      second = first;
      first = num;
    } else if (num > second) {
      second = num;
    }
  }

  return (first - 1) * (second - 1);
};
