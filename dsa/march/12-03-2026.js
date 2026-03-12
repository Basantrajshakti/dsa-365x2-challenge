// Arrays


// 812. Largest Triangle Area
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  let answer = 0.0;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        let p = points[i]
        let q = points[j]
        let r = points[k]

        const area = 0.5 * Math.abs(
          p[0] * (q[1] - r[1]) +
          q[0] * (r[1] - p[1]) +
          r[0] * (p[1] - q[1])
        );

        answer = Math.max(answer, area)
      }
    }
  }
  return answer;
};


// 821. Shortest Distance to a Character
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let n = s.length;
  let res = [];

  let prev = Infinity;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) prev = i;
    res[i] = Math.abs(prev - i);
  }

  prev = Infinity;

  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) prev = i;
    res[i] = Math.min(res[i], prev - i);
  }

  return res;
}