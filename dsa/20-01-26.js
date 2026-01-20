// Strings

// 409. Longest Palindrome
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var longestPalindrome = function (s) {
//   if (s.length === 1) return 1;

//   const f = new Uint16Array(58);

//   for (let i = 0; i < s.length; i++) {
//     f[s.charCodeAt([i]) - 65]++;
//   }

//   let sum = 0;

//   for (let i = 0; i < f.length; i++) {
//     if (f[i] === 0) continue;

//     else if (f[i] % 2 === 0) {
//       sum += f[i];
//     } else {
//       sum += f[i] - 1;
//     }
//   }

//   return sum < s.length ? sum + 1 : sum;
// };

// With optimizations
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const m = new Map();

  for (let i = 0; i < s.length; i++) {
    m.set(s[i], (m.get(s[i]) || 0) + 1);
  }

  let sum = 0;
  let hasOdd = false;

  for (let v of m.values()) {
    if (v % 2 === 0) {
      sum += v;
    } else {
      sum += v - 1;
      hasOdd = true;
    }
  }

  if (hasOdd) sum += 1;

  return sum;
};

// 412. Fizz Buzz
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let ans = [];

  for (let i = 1; i <= n; i++) {
    const isDivisibleBy3 = i % 3 === 0;
    const isDivisibleBy5 = i % 5 === 0;
    let str = '';

    if (isDivisibleBy3) str += "Fizz";
    if (isDivisibleBy5) str += "Buzz";
    if (!str) str += i;

    ans[i - 1] = str;
  }

  return ans;
};