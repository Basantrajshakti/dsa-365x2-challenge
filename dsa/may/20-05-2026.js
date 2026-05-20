// Daily challenge

// 2657. Find the Prefix Common Array of Two Arrays
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  let n = A.length;

  let freq = new Array(n + 1).fill(0);
  let ans = new Array(n);

  let cnt = 0;

  for (let i = 0; i < n; i++) {
    freq[A[i]]++;
    if (freq[A[i]] === 2) cnt++;

    freq[B[i]]++;
    if (freq[B[i]] === 2) cnt++;

    ans[i] = cnt;
  }

  return ans;
};

// 645. Set Mismatch
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let n = nums.length;
  let freq = new Array(n + 1).fill(0);

  for (let num of nums) {
    freq[num]++;
  }

  let duplicate = 0;
  let missing = 0;

  for (let i = 1; i <= n; i++) {
    if (freq[i] == 2) duplicate = i;
    if (freq[i] == 0) missing = i;
  }

  return [duplicate, missing];
};
