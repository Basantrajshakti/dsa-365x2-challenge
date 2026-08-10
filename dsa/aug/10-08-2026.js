// 1510. Stone Game IV
/**
 * @param {number} n
 * @return {boolean}
 */
const dfs = _.memoize((i) => {
  if (!i) return 0;
  for (let j = 1; j ** 2 <= i; j++) if (!dfs(i - j ** 2)) return 1;

  return 0;
});

var winnerSquareGame = function (n) {
  return dfs(n);
};
