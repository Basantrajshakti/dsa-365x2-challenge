// Daily challenge

// 1665. Minimum Initial Energy to Finish Tasks
/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function (tasks) {
  tasks.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));

  let totalEnergy = 0;
  let currentEnergy = 0;

  for (const [actual, minimum] of tasks) {
    totalEnergy = Math.max(totalEnergy, currentEnergy + minimum);
    currentEnergy += actual;
  }

  return totalEnergy;
};
