// 3551. Minimum Swaps to Sort by Digit Sum
/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
  const n = nums.length;
  const arr = [];

  for (let i = 0; i < n; i++) {
    let curr = nums[i];
    let digitSum = 0;

    while (curr > 0) {
      digitSum += curr % 10;
      curr = Math.floor(curr / 10);
    }

    arr.push([digitSum, nums[i], i]);
  }

  arr.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }

    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }

    return a[2] - b[2];
  });

  const perm = arr.map((item) => item[2]);

  const visited = new Array(n).fill(false);
  let cycles = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      continue;
    }

    cycles++;
    let j = i;

    while (!visited[j]) {
      visited[j] = true;
      j = perm[j];
    }
  }

  return n - cycles;
};
