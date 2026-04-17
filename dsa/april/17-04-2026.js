// Daily Challenge

// 3761. Minimum Absolute Distance Between Mirror Pairs
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function (nums) {
  const map = new Map();
  let mini = Infinity;

  const reverseNum = (num) => {
    let rev = 0;
    while (num > 0) {
      rev = rev * 10 + (num % 10);
      num = Math.floor(num / 10);
    }
    return rev;
  };

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) {
      mini = Math.min(mini, i - map.get(num));
    }
    const rev = reverseNum(num);
    map.set(rev, i);
  }

  return mini === Infinity ? -1 : mini;
};

// 119. Pascal's Triangle II
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];

  const row = [1];
  let prev = 1;
  for (let i = 1; i <= rowIndex; i++) {
    let next_val = (prev * (rowIndex - i + 1)) / i;
    row.push(next_val);
    prev = next_val;
  }
  return row;
};
