// Daily challenge

// 1306. Jump Game III
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  const n = arr.length;
  const q = [start];
  let head = 0;
  const visited = new Array(n).fill(false);
  visited[start] = true;

  while (head < q.length) {
    const node = q[head++];

    if (arr[node] === 0) return true;

    const l = node - arr[node];
    const r = node + arr[node];

    if (l >= 0 && !visited[l]) {
      q.push(l);
      visited[l] = true;
    }

    if (r < n && !visited[r]) {
      q.push(r);
      visited[r] = true;
    }
  }

  return false;
};

// 605. Can Place Flowers
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let i = 0;

  while (n !== 0 && i < flowerbed.length) {
    if (flowerbed[i] === 1) {
      i = i + 2;
      continue;
    }
    if (!flowerbed[i - 1] && !flowerbed[i + 1]) {
      n--;
      i = i + 2;
    } else {
      i++;
    }
  }

  return n === 0;
};
