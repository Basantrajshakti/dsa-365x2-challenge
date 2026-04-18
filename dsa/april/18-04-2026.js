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
