// Strings

// 1784. Check if Binary String Has at Most One Segment of Ones
/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  for (let i = s.length - 2; i >= 0; i--) {
    if (s[i + 1] == '1' && s[i] == '0') return false;
  }

  return true;
};