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