// Approach
// Check feasibility: - If m * n !== r * c, return the original matrix unchanged.
// Create the new r x c matrix: - Allocate space for the new structure.
// Linear traversal: - Think of the matrix as a flat 1D list indexed by k = 0 … (m * n - 1).
// Map from old → new coordinates
// In the original matrix(m x n) : - origRow=k / n and origCol = k % n
// In the reshaped matrix(r x c) : - newRow=k / c and newCol = k % c
// Copy the element over.
// Return the reshaped matrix reshaped.
//   Complexity
// Time complexity: - O(m * n), where m is number of input matrix mat rows and n is columns

// Space complexity: - O(1), as we are using limited space for computation


// CODE:
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
let matrixReshape = function (mat, r, c) {
  // find row and column size of input matrix `mat`
  const m = mat.length;
  const n = mat[0].length;

  // step 1 - check for edge case : if total element differ then reshap is not possible
  if (m * n != r * c) {
    return mat;
  }

  // store final result in `reshaped` matrix
  const reshaped = Array.from({ length: r }, () => Array(c).fill(0));

  // step 2 - fill the new `reshaped` matrix 
  // single linear pass over all elements (row-major order)
  for (let k = 0; k < m * n; k++) {
    // step 3 - calculate original position in matrix `mat`
    let originalRow = Math.floor(k / n);
    let originalColumn = k % n;

    // step 4 - find new position in reshaped matrix
    let newRow = Math.floor(k / c);
    let newColumn = k % c;

    // move the element
    reshaped[newRow][newColumn] = mat[originalRow][originalColumn];
  }

  // step 5 - return reshaped matrix `reshaped`
  return reshaped;
};