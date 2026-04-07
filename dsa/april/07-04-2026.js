// Daily challenge

// 2069. Walking Robot Simulation II
/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function (width, height) {
  this.w = width;
  this.h = height;
  this.per = 2 * (width + height - 2);
  this.pos = 0;
  this.moved = false;
};

/** * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function (num) {
  this.moved = true;
  this.pos = (this.pos + num) % this.per;
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function () {
  const p = this.pos;
  if (p < this.w) return [p, 0];
  if (p < this.w + this.h - 1) return [this.w - 1, p - (this.w - 1)];
  if (p < 2 * this.w + this.h - 2) return [this.w - 1 - (p - (this.w + this.h - 2)), this.h - 1];
  return [0, this.per - p];
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function () {
  const p = this.pos;
  if (p === 0) return this.moved ? "South" : "East";
  if (p < this.w) return "East";
  if (p < this.w + this.h - 1) return "North";
  if (p < 2 * this.w + this.h - 2) return "West";
  return "South";
};
