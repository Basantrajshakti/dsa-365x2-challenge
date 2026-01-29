// Maths

// 509. Fibonacci Number
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;

  const getFib = (n) => {
    if (n <= 1) return n;

    return getFib(n - 1) + getFib(n - 2);
  }

  return getFib(n);
};


// With optimizations
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
};



// 598. Range Addition II
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  if (ops.length === 0) {
    return m * n;
  }

  let minRow = m;
  let minCol = n;

  for (let i = 0; i < ops.length; i++) {
    minRow = Math.min(minRow, ops[i][0]);
    minCol = Math.min(minCol, ops[i][1]);
  }

  return minRow * minCol;
};