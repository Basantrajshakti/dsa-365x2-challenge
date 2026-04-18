// Daily challenge

// 3783. Mirror Distance of an Integer
/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function (n) {
  const revnum = (a) => {
    if (Math.floor(a / 10) === 0) return a;
    const rev = String(a).split("").reverse().join("");
    return parseInt(rev, 10);
  };
  return Math.abs(n - revnum(n));
};

// With optimizations
/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function (n) {
  const getReverse = () => {
    let rev = 0;
    while (n > 0) {
      rev = rev * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
    return rev;
  };
  return Math.abs(n - getReverse(n));
};
