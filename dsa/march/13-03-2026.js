// Arrays

// 832. Flipping an Image
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    image[i].reverse();

    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] == 0) {
        image[i][j] = 1;
      }
      else {
        image[i][j] = 0;
      }
    }

  }

  return image;

};

// With optimizations
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map(arr => {
    return arr.reverse().map(val => val === 1 ? 0 : 1);
  });
};