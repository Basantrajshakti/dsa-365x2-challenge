// 3934. Smallest Unique Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestUniqueSubarray = function (nums) {
  const names = [nums];
  const n = nums.length;
  const key = (a, b) => a * 2 ** 17 + b;

  for (let half = 1; 2 * half <= n; half *= 2) {
    const ids = new Map();
    const block = names.at(-1),
      whole = [];

    for (let i = half; i < block.length; i++) {
      const pair = key(block[i - half], block[i]);

      if (!ids.has(pair)) ids.set(pair, ids.size);

      whole.push(ids.get(pair));
    }

    names.push(whole);
  }

  const found = (length) => {
    const k = 31 - Math.clz32(length);
    const block = names[k],
      shift = length - 2 ** k,
      count = new Map();

    for (let i = shift; i < block.length; i++) {
      const pair = key(block[i - shift], block[i]);
      count.set(pair, (count.get(pair) ?? 0) + 1);
    }
    return [...count.values()].includes(1);
  };

  let lo = 1,
    hi = n;

  while (lo < hi) {
    const mid = (lo + hi) >> 1;

    if (found(mid)) hi = mid;
    else lo = mid + 1;
  }

  return lo;
};
