// Daily challenge

// 1914. Cyclically Rotating a Grid
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;

  for (let layer = 0; layer < Math.min(m, n) / 2; layer++) {
    const r = [];
    const c = [];
    const val = [];

    for (let i = layer; i < m - layer - 1; i++) {
      r.push(i);
      c.push(layer);
      val.push(grid[i][layer]);
    }

    for (let j = layer; j < n - layer - 1; j++) {
      r.push(m - layer - 1);
      c.push(j);
      val.push(grid[m - layer - 1][j]);
    }

    for (let i = m - layer - 1; i > layer; i--) {
      r.push(i);
      c.push(n - layer - 1);
      val.push(grid[i][n - layer - 1]);
    }

    for (let j = n - layer - 1; j > layer; j--) {
      r.push(layer);
      c.push(j);
      val.push(grid[layer][j]);
    }

    const total = val.length;
    const kk = k % total;

    for (let i = 0; i < total; i++) {
      const idx = (i + total - kk) % total;
      grid[r[i]][c[i]] = val[idx];
    }
  }
  return grid;
};

// With optimizations
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const layers = Math.min(m, n) / 2;

  const rotate = (layer) => {
    const count = (m - 2 * layer) * 2 + (n - 2 * layer - 2) * 2;
    const shift = k % count;
    if (shift === 0) return;
    let els = new Array(count);
    let idx = 0;
    for (let r = layer; r < m - layer; r++) els[idx++] = grid[r][layer];
    for (let c = layer + 1; c < n - layer; c++) els[idx++] = grid[m - 1 - layer][c];
    for (let r = m - 2 - layer; r >= layer; r--) els[idx++] = grid[r][n - 1 - layer];
    for (let c = n - 2 - layer; c > layer; c--) els[idx++] = grid[layer][c];
    els = els.slice(count - shift).concat(els.slice(0, count - shift));
    idx = 0;
    for (let r = layer; r < m - layer; r++) grid[r][layer] = els[idx++];
    for (let c = layer + 1; c < n - layer; c++) grid[m - 1 - layer][c] = els[idx++];
    for (let r = m - 2 - layer; r >= layer; r--) grid[r][n - 1 - layer] = els[idx++];
    for (let c = n - 2 - layer; c > layer; c--) grid[layer][c] = els[idx++];
  };

  for (let layer = 0; layer < layers; layer++) rotate(layer);

  return grid;
};

// 3629. Minimum Jumps to Reach End via Prime Teleportation
/**
 * @param {number[]} nums
 * @return {number}
 */
var minJumps = function (nums) {
  const n = nums.length;
  if (n <= 1) return 0;

  const port = new Map();

  for (let i = 0; i < n; i++) {
    let tmp = nums[i];
    for (let d = 2; d * d <= tmp; d++) {
      if (tmp % d === 0) {
        if (!port.has(d)) port.set(d, []);
        port.get(d).push(i);
        while (tmp % d === 0) tmp /= d;
      }
    }
    if (tmp > 1) {
      if (!port.has(tmp)) port.set(tmp, []);
      port.get(tmp).push(i);
    }
  }

  const visited = new Uint8Array(n);
  const q = new Int32Array(n);
  let head = 0;
  let tail = 0;

  q[tail++] = 0;
  visited[0] = 1;
  let steps = 0;

  while (head < tail) {
    let sz = tail - head;
    while (sz--) {
      const i = q[head++];
      if (i === n - 1) return steps;
      const num = nums[i];

      if (port.has(num)) {
        const neighbors = port.get(num);
        for (let k = 0; k < neighbors.length; k++) {
          const nei = neighbors[k];
          if (!visited[nei]) {
            visited[nei] = 1;
            q[tail++] = nei;
          }
        }
        port.delete(num);
      }

      if (i + 1 < n && !visited[i + 1]) {
        visited[i + 1] = 1;
        q[tail++] = i + 1;
      }

      if (i - 1 >= 0 && !visited[i - 1]) {
        visited[i - 1] = 1;
        q[tail++] = i - 1;
      }
    }
    steps++;
  }

  return steps;
};
