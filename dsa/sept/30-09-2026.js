// 1111. Maximum Nesting Depth of Two Valid Parentheses Strings
/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
  const depth = [];

  for (let i = 0; i < seq.length; i++) depth.push((i ^ seq.charCodeAt(i)) & 1);

  return depth;
};
