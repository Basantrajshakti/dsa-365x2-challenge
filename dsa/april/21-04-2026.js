// Daily challenge

// 1722. Minimize Hamming Distance After Swap Operations
/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function (source, target, allowedSwaps) {
  const n = source.length;

  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = Array(n).fill(0);

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(a, b) {
    let pa = find(a);
    let pb = find(b);

    if (pa === pb) return;

    if (rank[pa] < rank[pb]) {
      parent[pa] = pb;
    } else if (rank[pb] < rank[pa]) {
      parent[pb] = pa;
    } else {
      parent[pb] = pa;
      rank[pa]++;
    }
  }

  for (const [u, v] of allowedSwaps) {
    union(u, v);
  }

  const groups = new Map();

  for (let i = 0; i < n; i++) {
    const root = find(i);

    if (!groups.has(root)) {
      groups.set(root, []);
    }

    groups.get(root).push(i);
  }

  let answer = 0;

  for (const indices of groups.values()) {
    const freq = new Map();

    for (const idx of indices) {
      freq.set(source[idx], (freq.get(source[idx]) || 0) + 1);
    }

    for (const idx of indices) {
      const val = target[idx];

      if ((freq.get(val) || 0) > 0) {
        freq.set(val, freq.get(val) - 1);
      } else {
        answer++;
      }
    }
  }

  return answer;
};

// With optimizations
/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function (source, target, swap) {
  const n = source.length;
  const root = new Int32Array(n);

  for (let i = 0; i < n; i++) root[i] = i;

  const find = (i) => {
    let p = i;
    while (p !== root[p]) p = root[p];
    while (i !== p) {
      const nxt = root[i];
      root[i] = p;
      i = nxt;
    }
    return p;
  };

  for (let i = 0; i < swap.length; i++) {
    const r1 = find(swap[i][0]);
    const r2 = find(swap[i][1]);
    if (r1 !== r2) root[r1] = r2;
  }

  const freqs = new Map();
  for (let i = 0; i < n; i++) {
    const r = find(i);
    if (!freqs.has(r)) freqs.set(r, new Map());
    freqs.get(r).set(source[i], (freqs.get(r).get(source[i]) ?? 0) + 1);
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    const r = find(i);
    const B = freqs.get(r);
    const count = B.get(target[i]) ?? 0;
    if (count > 0) B.set(target[i], count - 1);
    else res++;
  }

  return res;
};

// 217. Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    } else {
      map.add(nums[i]);
    }
  }
  return false;
};
