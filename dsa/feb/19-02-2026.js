// Prefix sum

// 1732. Find the Highest Altitude
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let max = 0, sum = 0;

  for (let i = 0; i < gain.length; i++) {
    sum += gain[i];
    if (sum > max) max = sum;
  }

  return max;
};