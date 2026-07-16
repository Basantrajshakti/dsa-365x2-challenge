// 3867. Sum of GCD of Formed Pairs
/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function (nums) {
  const prefix = [];
  let maxValue = -Infinity;

  const gcd = (a, b) => {
    while (b !== 0) {
      const temp = a % b;
      a = b;
      b = temp;
    }

    return a;
  };

  for (const num of nums) {
    maxValue = Math.max(maxValue, num);
    prefix.push(gcd(maxValue, num));
  }

  prefix.sort((a, b) => a - b);

  let left = 0;
  let right = prefix.length - 1;
  let result = 0;

  while (left < right) {
    result += gcd(prefix[left], prefix[right]);
    left++;
    right--;
  }

  return result;
};
