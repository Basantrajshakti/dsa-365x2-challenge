// Strings

// 67. Add Binary
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let bin = '';
  let carry = 0;

  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; j--, i--) {
    const c1 = +a[i] || 0;
    const c2 = +b[j] || 0;
    const sum = c1 + c2 + carry;

    if (sum === 3) {
      carry = 1;
      bin = '1' + bin;
    } else if (sum === 2) {
      carry = 1;
      bin = '0' + bin;
    }
    else {
      carry = 0;
      bin = sum + bin;
    }
  }

  if (carry == 1) {
    bin = '1' + bin;
  }

  return bin;
};