// Daily challenge

// 1665. Minimum Initial Energy to Finish Tasks
/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function (tasks) {
  tasks.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));

  let totalEnergy = 0;
  let currentEnergy = 0;

  for (const [actual, minimum] of tasks) {
    totalEnergy = Math.max(totalEnergy, currentEnergy + minimum);
    currentEnergy += actual;
  }

  return totalEnergy;
};

// 566. Reshape the Matrix
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
let matrixReshape = function (mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;

  if (m * n != r * c) {
    return mat;
  }

  const reshaped = Array.from({ length: r }, () => Array(c).fill(0));

  for (let k = 0; k < m * n; k++) {
    let originalRow = Math.floor(k / n);
    let originalColumn = k % n;

    let newRow = Math.floor(k / c);
    let newColumn = k % c;

    reshaped[newRow][newColumn] = mat[originalRow][originalColumn];
  }

  return reshaped;
};
