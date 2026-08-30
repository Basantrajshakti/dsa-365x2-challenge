// 2091. Removing Minimum and Maximum From Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums) {
  const n = nums.length;

  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[minIndex]) {
      minIndex = i;
    }

    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }
  }

  const removeFromFront = Math.max(minIndex, maxIndex) + 1;

  const removeFromBack = n - Math.min(minIndex, maxIndex);

  const removeFromBothSides = Math.min(minIndex + 1 + (n - maxIndex), maxIndex + 1 + (n - minIndex));

  return Math.min(removeFromFront, removeFromBack, removeFromBothSides);
};
