// Strings

// 168. Excel Sheet Column Title
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let ans = "";
  while (columnNumber !== 0) {
    columnNumber--;
    ans = String.fromCharCode((columnNumber % 26) + 65) + ans;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return ans;
};

// 171. Excel Sheet Column Number
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let result = 0;

  for (let ch of columnTitle) {
    let value = ch.charCodeAt(0) - 'A'.charCodeAt(0) + 1; // A=1, B=2, ..., Z=26
    result = result * 26 + value;
  }

  return result;
};