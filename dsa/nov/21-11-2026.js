// 3331. Find Subtree Sizes After Changes
/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number[]}
 */
var findSubtreeSizes = function (parent, s) {
  const n = parent.length;
  const children = Array.from({ length: n }, () => []);
  for (let i = 1; i < n; i++) {
    children[parent[i]].push(i);
  }

  const last = new Array(26).fill(-1); // deepest node on current path for each letter
  const saved = new Array(n).fill(-1); // closest same-letter ancestor of each node
  const size = new Array(n).fill(1);

  const stack = [0];
  while (stack.length > 0) {
    let x = stack.pop();

    if (x >= 0) {
      // entering x
      const c = s.charCodeAt(x) - 97;
      saved[x] = last[c];
      last[c] = x;
      stack.push(~x); // leave marker
      for (const ch of children[x]) {
        stack.push(ch);
      }
    } else {
      // leaving x
      x = ~x;
      const c = s.charCodeAt(x) - 97;
      last[c] = saved[x]; // backtrack
      if (x !== 0) {
        const newParent = saved[x] !== -1 ? saved[x] : parent[x];
        size[newParent] += size[x];
      }
    }
  }

  return size;
};
