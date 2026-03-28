// Daily challenge

// 2573. Find the String with LCP
/**
 * @param {number[][]} lcp
 * @return {string}
 */
var findTheString = function (lcp) {
  const n = lcp.length;
  const word = new Array(n).fill("");
  let current = "a".charCodeAt(0);

  for (let i = 0; i < n; i++) {
    if (!word[i]) {
      if (current > "z".charCodeAt(0)) {
        return "";
      }
      word[i] = String.fromCharCode(current);
      for (let j = i + 1; j < n; j++) {
        if (lcp[i][j] > 0) {
          word[j] = word[i];
        }
      }
      current++;
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (word[i] !== word[j]) {
        if (lcp[i][j] !== 0) {
          return "";
        }
      } else {
        if (i === n - 1 || j === n - 1) {
          if (lcp[i][j] !== 1) {
            return "";
          }
        } else {
          if (lcp[i][j] !== lcp[i + 1][j + 1] + 1) {
            return "";
          }
        }
      }
    }
  }

  return word.join("");
};


// 541. Reverse String II
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {

  const n = s.length;
  s = [...s]; // we convert string to array for in-place mutation

  for (let i = 0; i < n; i += 2 * k) {
    // we reverse the first k characters in the current 2k block
    let left = i;
    let right = Math.min(i + k - 1, n - 1);

    while (left < right) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    }
  }

  return s.join(""); // we convert array back to string
};