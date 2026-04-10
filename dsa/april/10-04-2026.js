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
