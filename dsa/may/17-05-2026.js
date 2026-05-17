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
