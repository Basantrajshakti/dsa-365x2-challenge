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