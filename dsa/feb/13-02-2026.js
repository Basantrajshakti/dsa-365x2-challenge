// Sorting

// 506. Relative Ranks
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const ans = [...score].sort((a, b) => b - a);
  const map = {
    [ans[0]]: "Gold Medal",
    [ans[1]]: "Silver Medal",
    [ans[2]]: "Bronze Medal",
  };

  for (let i = 3; i < ans.length; i++) {
    map[ans[i]] = i + 1 + '';
  }

  for (let i = 0; i < score.length; i++) {
    ans[i] = map[score[i]];
  }

  return ans;
};