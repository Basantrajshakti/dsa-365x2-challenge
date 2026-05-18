// Daily challenge

// 1345. Jump Game IV
/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
  const n = arr.length;

  if (n === 1) return 0;

  const map = new Map();

  for (let i = 0; i < n; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], []);
    }

    map.get(arr[i]).push(i);
  }

  const queue = [0];

  const visited = new Array(n).fill(false);

  visited[0] = true;

  let steps = 0;

  while (queue.length > 0) {
    let size = queue.length;

    while (size--) {
      const idx = queue.shift();

      if (idx === n - 1) {
        return steps;
      }

      if (idx - 1 >= 0 && !visited[idx - 1]) {
        visited[idx - 1] = true;
        queue.push(idx - 1);
      }

      if (idx + 1 < n && !visited[idx + 1]) {
        visited[idx + 1] = true;
        queue.push(idx + 1);
      }

      for (const nextIdx of map.get(arr[idx])) {
        if (!visited[nextIdx]) {
          visited[nextIdx] = true;
          queue.push(nextIdx);
        }
      }

      map.set(arr[idx], []);
    }

    steps++;
  }

  return -1;
};

// 628. Maximum Product of Three Numbers
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;
  let min1 = Infinity;
  let min2 = Infinity;

  for (num of nums) {
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }

    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  const p1 = max1 * max2 * max3;
  const p2 = min1 * min2 * max1;

  if (p1 > p2) return p1;
  return p2;
};
