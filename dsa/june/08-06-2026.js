// Daily challenge

// 2161. Partition Array According to Given Pivot
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  const smaller = [];
  const equal = [];
  const greater = [];

  for (const num of nums) {
    if (num < pivot) {
      smaller.push(num);
    } else if (num === pivot) {
      equal.push(num);
    } else {
      greater.push(num);
    }
  }

  return [...smaller, ...equal, ...greater];
};
