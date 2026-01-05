// Arrays

// 119. Pascal's Triangle II
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];

  const rows = [[1]];

  for (let i = 0; i < rowIndex; i++) {
    let row = [];
    let tempRow = [0, ...rows[rows.length - 1], 0];

    for (let j = 0; j < tempRow.length - 1; j++) {
      row.push(tempRow[j] + tempRow[j + 1]);
    }

    rows.push(row);
  }

  return rows[rows.length - 1];
};