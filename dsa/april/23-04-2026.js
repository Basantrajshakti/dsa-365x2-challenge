// Daily challenge

// 2615. Sum of Distances
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
  const n = nums.length;
  const groups = new Map();

  for (let i = 0; i < n; i++) {
    if (!groups.has(nums[i])) {
      groups.set(nums[i], []);
    }
    groups.get(nums[i]).push(i);
  }

  const res = new Array(n).fill(0);

  for (const group of groups.values()) {
    let total = 0;
    for (const idx of group) {
      total += idx;
    }

    let prefixTotal = 0;
    const sz = group.length;

    for (let i = 0; i < sz; i++) {
      const idx = group[i];
      res[idx] = total - prefixTotal * 2 + idx * (2 * i - sz);
      prefixTotal += idx;
    }
  }

  return res;
};

// 228. Summary Ranges
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];

  let summary = [];
  let flag = nums[0];
  let ctr = flag;

  for (let i = 1; i < nums.length; i++) {
    if (flag + 1 === nums[i]) {
      flag = nums[i];
    } else {
      summary.push(ctr === flag ? `${ctr}` : `${ctr}->${flag}`);
      ctr = flag = nums[i];
    }
  }

  summary.push(ctr === flag ? `${ctr}` : `${ctr}->${flag}`);

  return summary;
};
