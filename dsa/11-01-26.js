// Strings

// 13. Roman to Integer
/**
 * @param {string} s
 * @return {number}
 */
// const romanMap = {
//   "I": 1,
//   "V": 5,
//   "X": 10,
//   "L": 50,
//   "C": 100,
//   "D": 500,
//   "M": 1000,
//   "IV": 4,
//   "IX": 9,
//   "XL": 40,
//   "XC": 90,
//   "CD": 400,
//   "CM": 900,
//   "II": 2,
// };

// var romanToInt = function (s) {
//   let sum = 0;

//   for (let i = 0; i < s.length; i++) {
//     if ((s[i] + s[i + 1]) in romanMap) {
//       sum += romanMap[s[i] + s[i + 1]];
//       i++; // i+1 is already captured
//     } else {
//       sum += romanMap[s[i]];
//     }
//   }
//   return sum;
// };

// With optimizations
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };

  let total = 0;
  let prev = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    let curr = map[s[i]];

    if (curr < prev) {
      total -= curr;
    } else {
      total += curr;
    }
    prev = curr;
  }

  return total;
};


// 20. Valid Parentheses
// /**
//  * @param {string} s
//  * @return {boolean}
//  */

// const isOpening = (char) => {
//   return char === '(' || char === '[' || char === '{';
// }

// const getClosing = (char) => {
//   if (char === '(') return ')';
//   else if (char === '[') return ']';
//   else if (char === '{') return '}';
//   else return '';
// }

// var isValid = function (s) {
//   let stack = [];

//   for (let i = 0; i < s.length; i++) {
//     if (isOpening(s[i])) {
//       stack.push(s[i]);
//     } else {
//       if (s[i] !== getClosing(stack[stack.length - 1])) {
//         return false;
//       } else {
//         stack.pop();
//       }
//     }
//   }

//   return stack.length === 0
// };


// With optimizations
/**
 * @param {string} s
 * @return {boolean}
 */

const isOpening = (char) => {
  return char === '(' || char === '[' || char === '{';
}

const getClosing = (char) => {
  if (char === '(') return ')';
  else if (char === '[') return ']';
  else if (char === '{') return '}';
  else return '';
}

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

  return stack.length === 0
};