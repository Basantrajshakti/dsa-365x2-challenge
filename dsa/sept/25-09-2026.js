// 1096. Brace Expansion II
/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function (expression) {
  function merge(groups, words) {
    let current = groups[groups.length - 1];

    if (current.length === 0) {
      groups[groups.length - 1] = words;
      return;
    }

    let combined = [];

    for (let a of current) {
      for (let b of words) {
        combined.push(a + b);
      }
    }

    groups[groups.length - 1] = combined;
  }

  function dfs(start, end) {
    let groups = [[]];
    let depth = 0;
    let left = 0;

    for (let i = start; i <= end; i++) {
      if (expression[i] === "{") {
        depth++;

        if (depth === 1) {
          left = i + 1;
        }
      } else if (expression[i] === "}") {
        depth--;

        if (depth === 0) {
          merge(groups, dfs(left, i - 1));
        }
      } else if (expression[i] === "," && depth === 0) {
        groups.push([]);
      } else if (depth === 0) {
        merge(groups, [expression[i]]);
      }
    }

    let result = new Set();

    for (let group of groups) {
      for (let word of group) {
        result.add(word);
      }
    }

    return Array.from(result);
  }

  return dfs(0, expression.length - 1).sort();
};

// With optimizations
/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function (expression) {
  const op = [];
  const stk = [];

  const ope = () => {
    const l = stk.length - 2;
    const r = stk.length - 1;

    if (op[op.length - 1] === "+") {
      for (const item of stk[r]) stk[l].add(item);
    } else {
      const tmp = new Set();

      for (const left of stk[l]) {
        for (const right of stk[r]) {
          tmp.add(left + right);
        }
      }

      stk[l] = tmp;
    }

    op.pop();
    stk.pop();
  };

  for (let i = 0; i < expression.length; i++) {
    const ch = expression[i];
    if (ch === ",") {
      while (op.length > 0 && op[op.length - 1] === "*") ope();

      op.push("+");
    } else if (ch === "{") {
      if (i > 0 && (expression[i - 1] === "}" || /[a-z]/.test(expression[i - 1]))) op.push("*");

      op.push("{");
    } else if (ch === "}") {
      while (op.length > 0 && op[op.length - 1] !== "{") ope();

      op.pop();
    } else {
      if (i > 0 && (expression[i - 1] === "}" || /[a-z]/.test(expression[i - 1]))) op.push("*");

      stk.push(new Set([ch]));
    }
  }

  while (op.length > 0) ope();

  return Array.from(stk[stk.length - 1]).sort();
};
