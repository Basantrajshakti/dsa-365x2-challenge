// Daily challenge

// 1344. Angle Between Hands of a Clock
/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  const x = hour + minutes / 60;
  const diff = (11 * x) % 12;
  return Math.min(diff, 12 - diff) * 30;
};
