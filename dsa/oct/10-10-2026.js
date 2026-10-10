// 2333. Minimum Sum of Squared Difference
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function (nums1, nums2, k1, k2) {
  const n = nums1.length;

  let floatingMax = 0;

  for (let i = 0; i < n; i++) {
    const diff = Math.abs(nums1[i] - nums2[i]);
    floatingMax = Math.max(diff, floatingMax);
  }

  const freq = new Uint32Array(floatingMax + 1);

  for (let i = 0; i < n; i++) {
    const diff = Math.abs(nums1[i] - nums2[i]);
    freq[diff]++;
  }

  let availableK = k1 + k2;
  let i = floatingMax;
  let buffer = 0;
  let isGetharing = availableK === 0;
  let sum = 0;

  while (i >= 0) {
    const count = freq[i] + buffer;
    buffer = 0;

    if (isGetharing) {
      sum += (i--) ** 2 * count;
      continue;
    }

    if (count <= availableK) {
      availableK -= count;
      buffer = count;
    } else {
      buffer = availableK;
      availableK = 0;
    }

    if (availableK === 0) {
      isGetharing = true;
      sum += i ** 2 * (count - buffer);
    }

    i--;
  }

  return sum;
};
