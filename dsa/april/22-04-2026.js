// Daily challenge

// 2452. Words Within Two Edits of Dictionary
/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function (queries, dictionary) {
  const result = [];

  for (const query of queries) {
    for (const word of dictionary) {
      let diff = 0;

      for (let i = 0; i < query.length; i++) {
        if (query[i] !== word[i]) {
          diff++;
        }

        if (diff > 2) {
          break;
        }
      }

      if (diff <= 2) {
        result.push(query);
        break;
      }
    }
  }

  return result;
};

// 219. Contains Duplicate II
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in map && Math.abs(map[num] - i) <= k) {
      return true;
    }

    map[num] = i;
  }

  return false;
};
