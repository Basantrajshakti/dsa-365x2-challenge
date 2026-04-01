// Daily challenge

// 2751. Robot Collisions
/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function (pos, h, d) {

    const n = pos.length;
    const order = [...Array(n).keys()].sort((a, b) => pos[a] - pos[b]);

    const alive = Array(n).fill(true);
    const stack = [];

    for (const idx of order) {

        if (d[idx] === 'R') {
            stack.push(idx);
        } else {

            while (stack.length) {

                let top = stack[stack.length - 1];

                if (h[top] < h[idx]) {
                    alive[top] = false;
                    stack.pop();
                    h[idx]--;
                }
                else if (h[top] > h[idx]) {
                    alive[idx] = false;
                    h[top]--;
                    break;
                }
                else {
                    alive[top] = false;
                    alive[idx] = false;
                    stack.pop();
                    break;
                }
            }
        }
    }

    const res = [];
    for (let i = 0; i < n; i++)
        if (alive[i]) res.push(h[i]);

    return res;
};


// 657. Robot Return to Origin
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let x = 0;
    let y = 0;
    let ans = moves.split('');

    for (let i = 0; i < ans.length; i++) {
        if (ans[i] == 'U') {
            x++;
        } else if (ans[i] == 'D') {
            x--;
        } else if (ans[i] == 'R') {
            y++;
        } else if (ans[i] == 'L') {
            y--;
        }
    }
    if (x == 0 && y == 0) {
        return true;
    }
    return false;
};