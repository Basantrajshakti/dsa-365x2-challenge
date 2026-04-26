// Daily challenge

// 1559. Detect Cycles in 2D Grid
/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function (grid) {
  const rows = grid.length,
    cols = grid[0].length;
  const parent = Array.from({ length: rows * cols }, (_, i) => i);

  function find(x) {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  }

  function unionSets(a, b) {
    const ra = find(a),
      rb = find(b);
    if (ra === rb) return true;
    parent[ra] = rb;

    return false;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (j + 1 < cols && grid[i][j] === grid[i][j + 1]) {
        if (unionSets(i * cols + j, i * cols + j + 1)) return true;
      }
      if (i + 1 < rows && grid[i][j] === grid[i + 1][j]) {
        if (unionSets(i * cols + j, (i + 1) * cols + j)) return true;
      }
    }
  }

  return false;
};

// 303. Range Sum Query - Immutable
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  // build 1-based prefix sum
  this.prefix = new Array(nums.length);
  this.prefix[0] = 0;

  for (let i = 0; i < nums.length; i++) {
    this.prefix[i + 1] = this.prefix[i] + nums[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  // sum of nums[left..right] = prefix[right + 1] - prefix[left]
  return this.prefix[right + 1] - this.prefix[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
