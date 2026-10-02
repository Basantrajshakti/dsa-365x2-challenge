// 22. Generate Parentheses
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  const ch = new Array(2 * n);

  function func(index, open, close) {
    if (open === 0 && close === 0) {
      result.push(ch.join(""));
      return;
    }

    if (open > 0) {
      ch[index] = "(";
      func(index + 1, open - 1, close);
    }

    if (close > open) {
      ch[index] = ")";
      func(index + 1, open, close - 1);
    }
  }

  func(0, n, n);

  return result;
};
