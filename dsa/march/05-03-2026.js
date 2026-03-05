// Arrays


// 495. Teemo Attacking
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length === 0) return 0;

  let total = 0;

  for (let i = 0; i < timeSeries.length - 1; i++) {
    const diff = timeSeries[i + 1] - timeSeries[i];
    total += Math.min(duration, diff);
  }
  // For last value
  total += duration;
  return total;
};


// 605. Can Place Flowers
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {

    let left = i === 0 ? 0 : flowerbed[i - 1];
    let right = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];

    if (!left && !right && !flowerbed[i]) {
      n--;
      i++; // or flowerbed[i] = 1;
    }
  }

  return n <= 0;
};

// With optimizations
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let i = 0;

  while (n !== 0 && i < flowerbed.length) {
    if (flowerbed[i] === 1) {
      i = i + 2;
      continue;
    }
    if (!flowerbed[i - 1] && !flowerbed[i + 1]) {
      n--;
      i = i + 2;
    } else {
      i++;
    }
  }

  return n === 0;
};
