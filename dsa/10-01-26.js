// Arrays

// 349. Intersection of Two Arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const nums1Set = new Set(nums1);
  const nums = [];

  for (let i = 0; i < nums2.length; i++) {
    if (nums1Set.has(nums2[i])) {
      nums.push(nums2[i]);
      nums1Set.delete(nums2[i]); // to prevent repeated additions
    }
  }
  return nums;
};

