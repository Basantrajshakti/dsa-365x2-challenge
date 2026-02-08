// Hash map

// 599. Minimum Index Sum of Two Lists
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const map = {};
  let min = Infinity;
  let arr = [];

  for (let i = 0; i < list1.length; i++) {
    map[list1[i]] = i;
  }

  for (let i = 0; i < list2.length; i++) {
    const l = list2[i];
    if (l in map) {
      const sum = i + map[l];

      if (sum < min) {
        arr = [l];
        min = sum;
      } else if (sum === min) {
        arr.push(l);
      }
    }
  }

  return arr;
};

// With Map
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const map = new Map();
  let min = Infinity;
  let arr = [];

  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  for (let i = 0; i < list2.length; i++) {
    const l = list2[i];
    if (map.has(l)) {
      const sum = i + map.get(l);

      if (sum < min) {
        arr = [l];
        min = sum;
      } else if (sum === min) {
        arr.push(l);
      }
    }
  }

  return arr;
};


// 645. Set Mismatch
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const n = nums.length;
  const expSum = n * (n + 1) / 2;
  let dupNum = null;
  const set = new Set();

  let actualSum = nums.reduce((acc, curr) => {
    if (!set.has(curr)) set.add(curr);
    else dupNum = curr;

    return acc + curr;
  }, 0);

  return [dupNum, expSum - actualSum + dupNum];
};