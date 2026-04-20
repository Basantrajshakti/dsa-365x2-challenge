// Daily challenge

// 2078. Two Furthest Houses With Different Colors
/**
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance = (A) => {
  const n = A.length;
  let left = 0,
    right = 0;

  for (let i = 0; i < n; i++)
    if (A[i] ^ A.at(-1)) {
      left = i;
      break;
    }

  for (let i = n - 1; i >= 0; i--)
    if (A[i] ^ A[0]) {
      right = i;
      break;
    }

  return Math.max(n - 1 - left, right);
};

// 169. Majority Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0,
    maj = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      maj = nums[i];
    }
    if (maj === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return maj;
};
