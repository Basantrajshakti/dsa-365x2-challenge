// Strings

// 13. Roman to Integer
/**
 * @param {string} s
 * @return {number}
 */
const romanMap = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000,
  "IV": 4,
  "IX": 9,
  "XL": 40,
  "XC": 90,
  "CD": 400,
  "CM": 900,
  "II": 2,
};

var romanToInt = function (s) {
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if ((s[i] + s[i + 1]) in romanMap) {
      sum += romanMap[s[i] + s[i + 1]];
      i++; // i+1 is already captured
    } else {
      sum += romanMap[s[i]];
    }
  }
  return sum;
};