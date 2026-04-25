// Daily challenge

// 3464. Maximize the Distance Between Points on a Square
/**
 * @param {number} side
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var maxDistance = function (side, points, k) {
  const n = points.length;
  const pos = new Array(n);

  for (let i = 0; i < n; i++) {
    const [x, y] = points[i];
    let p;
    if (y === 0) {
      p = x;
    } else if (x === side) {
      p = side + y;
    } else if (y === side) {
      p = 2 * side + (side - x);
    } else {
      p = 3 * side + (side - y);
    }
    pos[i] = p;
  }

  pos.sort((a, b) => a - b);

  const L = 4 * side;
  const total = n * 2;
  const ext = new Array(total);

  for (let i = 0; i < n; i++) {
    ext[i] = pos[i];
    ext[i + n] = pos[i] + L;
  }

  const canPlace = function (d) {
    for (let start = 0; start < n; start++) {
      let cur = start;
      let last = ext[start];
      let valid = true;
      const limit = start + n;

      for (let step = 1; step < k; step++) {
        const target = last + d;
        let lo = cur + 1,
          hi = limit;

        while (lo < hi) {
          const mid = Math.floor((lo + hi) / 2);
          if (ext[mid] < target) lo = mid + 1;
          else hi = mid;
        }
        if (lo === limit) {
          valid = false;
          break;
        }
        cur = lo;
        last = ext[cur];
      }

      if (valid && ext[start] + L - last >= d) return true;
    }
    return false;
  };

  let low = 0,
    high = 2 * side;
  while (low < high) {
    const mid = Math.floor((low + high + 1) / 2);
    if (canPlace(mid)) low = mid;
    else high = mid - 1;
  }

  return low;
};

// With optimizations
/**
 * @param {number} side
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var maxDistance = function (side, points, k) {
  const n = points.length;
  const P = 4 * side;

  const perm = points.map(([x, y]) => {
    if (y === 0) return x;
    if (x === side) return side + y;
    if (y === side) return 2 * side + (side - x);
    return 3 * side + (side - y);
  });

  perm.sort((a, b) => a - b);

  const ext = new Array(2 * n);
  for (let i = 0; i < n; i++) {
    ext[i] = perm[i];
    ext[i + n] = perm[i] + P;
  }

  const check = (d) => {
    const next = new Array(2 * n + 1);
    let j = 0;

    for (let i = 0; i < 2 * n; i++) {
      j = Math.max(j, i + 1);
      while (j < 2 * n && ext[j] - ext[i] < d) j++;
      next[i] = j;
    }
    next[2 * n] = 2 * n;

    for (let i = 0; i < n; i++) {
      let pos = i;
      for (let step = 1; step < k; step++) {
        pos = next[pos];
        if (pos >= i + n) break;
      }
      if (pos < i + n && ext[pos] - ext[i] <= P - d) return true;
    }

    return false;
  };

  let lo = 1,
    hi = side;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (check(mid)) lo = mid;
    else hi = mid - 1;
  }

  return lo;
};

// 283. Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 0) return nums;

  let ctr = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[i];
      nums[i] = nums[ctr];
      nums[ctr++] = temp;
    }
  }
};
