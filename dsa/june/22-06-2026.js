// Daily challenge

// 1189. Maximum Number of Balloons
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let count = new Array(26).fill(0);

  for (let c of text) {
    count[c.charCodeAt(0) - 97]++;
  }

  return Math.min(
    count["b".charCodeAt(0) - 97],
    count["a".charCodeAt(0) - 97],
    Math.floor(count["l".charCodeAt(0) - 97] / 2),
    Math.floor(count["o".charCodeAt(0) - 97] / 2),
    count["n".charCodeAt(0) - 97],
  );
};
