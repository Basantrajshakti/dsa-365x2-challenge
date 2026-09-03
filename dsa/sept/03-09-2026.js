// 3876. Construct Uniform Parity Array II
/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function (nums1) {
  let mn = Math.min(...nums1);

  if (mn % 2 !== 0) {
    return true;
  } else {
    for (let i = 0; i < nums1.length; i++) {
      if (nums1[i] % 2 !== 0) {
        return false;
      }
    }
  }
  return true;
};
