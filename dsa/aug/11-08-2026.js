// 2996. Smallest Missing Integer Greater Than Sequential Prefix Sum
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
  let sum = nums[0];
  const seen = new Uint8Array(52);
  let seq = true;

  seen[nums[0]] = 1;

  for (let i = 1; i < nums.length; i++) {
    if (seq && nums[i] === nums[i - 1] + 1) sum += nums[i];
    else {
      seq = false;
      if (sum > 50) return sum;
    }
    seen[nums[i]] = 1;
  }

  for (let i = sum; i < 52; i++) if (!seen[i]) return i;

  return sum;
};
