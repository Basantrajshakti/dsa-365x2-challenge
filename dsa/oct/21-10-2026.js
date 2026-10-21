// 3863. Minimum Operations to Sort a String
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  const n = s.length;

  if (n === 2 && s[0] > s[1]) {
    return -1;
  }

  let sorted = true;

  for (let i = 0; i < n - 1; i++) {
    if (s[i] > s[i + 1]) {
      sorted = false;
      break;
    }
  }

  if (sorted) {
    return 0;
  }

  let mn = s[1];
  let mx = s[1];

  for (let i = 1; i < n - 1; i++) {
    if (s[i] < mn) {
      mn = s[i];
    }

    if (s[i] > mx) {
      mx = s[i];
    }
  }

  const left = s[0];
  const right = s[n - 1];

  if ((left <= right && left <= mn) || (right >= left && right >= mx)) {
    return 1;
  } else if (right >= mn || left <= mx) {
    return 2;
  } else {
    return 3;
  }
};

// With optimizations
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  var min = 1e10;
  var max = -1e10;
  var num = 0;
  var sum = 1;
  var bool = true;
  var number = 1;
  var minindex = -1;
  var maxindex = -1;

  for (var x = 0; x < s.length; x++) {
    num = s.charCodeAt(x);
    if (num < min) {
      min = num;
      sum = 1;
      minindex = x;
    } else if (num == min) {
      sum++;
    }
    if (num > max) {
      max = num;
      number = 1;
      maxindex = x;
    } else if (num == max) {
      number++;
      maxindex = x;
    }
    if (x > 0 && s.charCodeAt(x) < s.charCodeAt(x - 1)) {
      bool = false;
    }
  }

  return bool ? 0 : s.length < 3 ? -1 : minindex == 0 || maxindex == s.length - 1 ? 1 : sum == 1 && number == 1 && minindex == s.length - 1 && maxindex == 0 ? 3 : 2;
};
