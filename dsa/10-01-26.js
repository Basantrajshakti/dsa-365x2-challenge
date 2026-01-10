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


// 350. Intersection of Two Arrays II
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const nums1Map = {};
  const res = [];

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] in nums1Map) {
      nums1Map[nums1[i]] += 1;
    } else {
      nums1Map[nums1[i]] = 1;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (nums1Map[nums2[i]] > 0) {
      res.push(nums2[i]);
      nums1Map[nums2[i]] -= 1;
    }
  }

  return res;
};