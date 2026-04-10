// Daily challenge

// 3740. Minimum Distance Between Three Equal Elements I
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function (nums) {
  const maxVal = Math.max(...nums);
  const pos = Array.from({ length: maxVal + 1 }, () => [-1, -1]);

  let res = Infinity;

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    const [last, secondLast] = pos[val];

    if (secondLast !== -1) {
      const distance = (i - secondLast) * 2;
      res = Math.min(res, distance);
    }

    pos[val] = [i, last];
  }

  return res === Infinity ? -1 : res;
};

// 26. Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 1;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i - 1] !== nums[j]) {
      nums[i++] = nums[j];
    }
  }
  return i;
};
