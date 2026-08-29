// 2948. Make Lexicographically Smallest Array by Swapping Elements
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
  const n = nums.length;
  const indices = new Int32Array(n);

  // #1: Fill indices and sort them based on their values in nums
  for (let i = 0; i < n; i++) indices[i] = i;
  indices.sort((a, b) => nums[a] - nums[b]);

  const res = new Array(n);
  let i = 0;

  while (i < n) {
    let j = i;

    while (j < n && (j === i || nums[indices[j]] - nums[indices[j - 1]] <= limit)) {
      j++;
    }

    const groupIndices = [];
    for (let k = i; k < j; k++) {
      groupIndices.push(indices[k]);
    }
    groupIndices.sort((a, b) => a - b);

    for (let k = 0; k < groupIndices.length; k++) {
      res[groupIndices[k]] = nums[indices[i + k]];
    }

    i = j;
  }

  return res;
};
