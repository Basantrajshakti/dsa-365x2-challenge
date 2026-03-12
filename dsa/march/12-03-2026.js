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