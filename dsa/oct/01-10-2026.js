// 20. Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */

const isOpening = (char) => {
  return char === "(" || char === "[" || char === "{";
};

const getClosing = (char) => {
  if (char === "(") return ")";
  else if (char === "[") return "]";
  else if (char === "{") return "}";
  else return "";
};

var isValid = function (s) {
  if (s.length <= 1) return false;

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (isOpening(s[i])) {
      stack.push(s[i]);
    } else if (stack.length === 0) return false;
    else {
      const lastChar = stack.pop();

      if (s[i] !== getClosing(lastChar)) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
