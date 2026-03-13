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

// One line
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map(arr => arr.reverse().map(val => val === 1 ? 0 : 1));
};


// 860. Lemonade Change
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;

  for (let bill of bills) {
    if (bill === 5) {
      five++;
    }

    else if (bill === 10) {
      if (five === 0) return false;
      ten++;
      five--;
    }
    else {
      if (ten > 0 && five > 0) {
        ten--;
        five--;
      }
      else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};