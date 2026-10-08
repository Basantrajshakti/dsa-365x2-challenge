// 1021. Remove Outermost Parentheses
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let res = "",
    lvl = 0;

  for (const c of s) if (c === "(" ? lvl++ : --lvl) res += c;

  return res;
};
