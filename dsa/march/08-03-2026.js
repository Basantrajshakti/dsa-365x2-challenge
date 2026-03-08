// Arrays

// 1980. Find Unique Binary String
/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  let ans = "";

  for (let i = 0; i < nums.length; i++) {
    ans += nums[i][i] === '0' ? '1' : '0';
  }

  return ans;
};


// 682. Baseball Game
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let arr = [], arrIdx = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === 'C') {
      if (arr.length !== 0) {
        arr.length = arr.length - 1;
        arrIdx -= 2;
      }
    } else if (operations[i] === 'D') {
      arr.push((arr[arrIdx - 1] || 0) * 2);
    } else if (operations[i] === '+') {
      arr.push((arr[arrIdx - 1] || 0) + (arr[arrIdx - 2] || 0));
    } else {
      arr.push(+operations[i]);
    }
    arrIdx++;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }

  return sum;
};

// With optimizations
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let stack = [];

  for (let op of operations) {
    if (op === "C") {
      stack.pop()
    } else if (op === "D") {
      stack.push(stack[stack.length - 1] * 2)
    } else if (op === "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2])
    } else {
      stack.push(Number(op))
    }
  }

  return stack.reduce((acc, curr) => acc += curr, 0)
};