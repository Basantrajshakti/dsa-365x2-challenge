// 3411. Maximum Subarray With Equal Products
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function (nums) {
  const n = nums.length;
  let maxLength = 0;

  for (let start = 0; start < n; start++) {
    let currentGcd = nums[start];
    let currentLcm = nums[start];
    let currentProduct = nums[start];

    for (let end = start; end < n; end++) {
      if (end > start) {
        currentGcd = gcd(currentGcd, nums[end]);
        currentLcm = (currentLcm * nums[end]) / gcd(currentLcm, nums[end]);
        currentProduct *= nums[end];
      }
      if (currentProduct === currentLcm * currentGcd) {
        maxLength = Math.max(maxLength, end - start + 1);
      }
    }
  }
  return maxLength;
};

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
