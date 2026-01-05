// Arrays

// 119. Pascal's Triangle II
// /**
//  * @param {number} rowIndex
//  * @return {number[]}
//  */
// var getRow = function (rowIndex) {
//   if (rowIndex === 0) return [1];

//   const rows = [[1]];

//   for (let i = 0; i < rowIndex; i++) {
//     let row = [];
//     let tempRow = [0, ...rows[rows.length - 1], 0];

//     for (let j = 0; j < tempRow.length - 1; j++) {
//       row.push(tempRow[j] + tempRow[j + 1]);
//     }

//     rows.push(row);
//   }

//   return rows[rows.length - 1];
// };

// With optimizations
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];

  const row = [1];
  let prev = 1;
  for (let i = 1; i <= rowIndex; i++) {
    let next_val = prev * (rowIndex - i + 1) / i;
    row.push(next_val);
    prev = next_val;
  }
  return row;
};


// 88. Merge Sorted Array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = m + n, j = n; j > 0; i--, j--) {
    nums1[i - 1] = nums2[j - 1];
  }

  return nums1.sort((a, b) => a - b);
};