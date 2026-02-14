// Sorting

// 747. Largest Number At Least Twice of Others
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let maxIdx = -1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num > max1) {
      max2 = max1;
      max1 = num;
      maxIdx = i;
    } else if (num > max2 && num < max1) {
      max2 = num;
    }
  }

  if (max1 >= max2 * 2) return maxIdx;
  return -1;
};


// 888. Fair Candy Swap
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  // => SumA - x + y = SumB - y + x
  // => y = x + (SumB - SumA)/2
  let sumA = 0, sumB = 0;

  for (let i = 0; i < aliceSizes.length; i++) {
    sumA += aliceSizes[i];
  }

  for (let i = 0; i < bobSizes.length; i++) {
    sumB += bobSizes[i];
  }

  const delta = (sumB - sumA) / 2;
  for (let i = 0; i < aliceSizes.length; i++) {
    for (let j = 0; j < bobSizes.length; j++) {
      if (bobSizes[j] - aliceSizes[i] === delta) {
        return [aliceSizes[i], bobSizes[j]];
      }
    }
  }
};

// With optimizations
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  // => SumA - x + y = SumB - y + x
  // => y = x + (SumB - SumA)/2
  let sumA = 0, sumB = 0;

  for (let i = 0; i < aliceSizes.length; i++) {
    sumA += aliceSizes[i];
  }

  for (let i = 0; i < bobSizes.length; i++) {
    sumB += bobSizes[i];
  }

  const b = new Set(bobSizes);

  const delta = (sumB - sumA) / 2;
  for (let i = 0; i < aliceSizes.length; i++) {
    const expectedBob = delta + aliceSizes[i];
    if (b.has(expectedBob))
      return [aliceSizes[i], expectedBob];
  }
};