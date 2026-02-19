// Prefix sum

// 1732. Find the Highest Altitude
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let max = 0, sum = 0;

  for (let i = 0; i < gain.length; i++) {
    sum += gain[i];
    if (sum > max) max = sum;
  }

  return max;
};


// 1854. Maximum Population Year
/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  const s = new Uint8Array(101);
  const e = new Uint8Array(101);

  for (const [rs, re] of logs) {
    s[rs - 1950]++;
    e[re - 1950]++;
  }

  let noOfPeople = 0, maxNoOfPeople = 0, maxYear = undefined;
  for (let i = 0; i <= 100; i++) {
    noOfPeople += s[i];
    noOfPeople -= e[i];

    if (noOfPeople > maxNoOfPeople) {
      maxNoOfPeople = noOfPeople;
      maxYear = i;
    }
  }

  return maxYear + 1950;
};

// With optimizations
/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  const populationChanges = new Int32Array(101);

  for (const log of logs) {
    populationChanges[log[0] - 1950]++;
    populationChanges[log[1] - 1950]--;
  }

  let currPopulation = 0;
  let maxPopulation = 0;
  let maxPopulationYear = 1950;

  for (let i = 0; i < 101; i++) {
    currPopulation += populationChanges[i];

    if (currPopulation > maxPopulation) {
      maxPopulation = currPopulation;
      maxPopulationYear = i + 1950;
    }
  }

  return maxPopulationYear;
};