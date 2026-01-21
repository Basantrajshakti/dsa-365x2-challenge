// Maths

// 9. Palindrome Number
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  let xStr = '';
  let n = x;

  while (x) {
    xStr += x % 10;
    x = parseInt(x / 10);
  }

  return +xStr === n;
};


// 69. Sqrt(x)
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let start = 0, end = x, mid, ans;

  while (start <= end) {

    mid = parseInt(start + (end - start) / 2);

    if (mid * mid == x) {
      ans = mid;
      break;
    }

    // Increment start if integral part lies on right side of the mid
    if (mid * mid < x) {
      // First start value should be added to answer
      ans = start;
      // Then start should be changed
      start = mid + 1;
    }

    // Decrement end if integral part lies on the left side of the mid
    else {
      end = mid - 1;
      ans = end;
    }
  }

  return ans;
};