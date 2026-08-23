// 1927. Sum Game
/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function (num) {
  const n = Math.floor(num.length / 2);

  const nums = [...num].map((ch) => (ch === "?" ? 9 : 2 * Number(ch)));

  const left = nums.slice(0, n).reduce((sum, x) => sum + x, 0);

  const right = nums.slice(n).reduce((sum, x) => sum + x, 0);

  return left !== right;
};
