// Daily challenge

// 3741. Minimum Distance Between Three Equal Elements II
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function (nums) {
  const n = nums.length;
  const last = new Array(n + 1).fill(-1);
  const second = new Array(n + 1).fill(-1);
  let minDist = Infinity;

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (second[num] !== -1) {
      const dist = i - second[num];
      if (dist < minDist) {
        minDist = dist;
      }
    }
    second[num] = last[num];
    last[num] = i;
  }

  return minDist === Infinity ? -1 : 2 * minDist;
};

// 27. Remove Element
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (val !== nums[j]) {
      nums[i++] = nums[j];
    }
  }
  return i;
};
