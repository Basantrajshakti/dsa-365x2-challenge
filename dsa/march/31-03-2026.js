// Daily challenge

// 3474. Lexicographically Smallest Generated String
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var generateString = function (str1, str2) {
    const n = str1.length,
        m = str2.length;
    const s = new Array(n + m - 1).fill("a");
    const fixed = new Array(n + m - 1).fill(0);

    for (let i = 0; i < n; i++) {
        if (str1[i] === "T") {
            for (let j = i; j < i + m; j++) {
                if (fixed[j] === 1 && s[j] !== str2[j - i]) {
                    return "";
                } else {
                    s[j] = str2[j - i];
                    fixed[j] = 1;
                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (str1[i] === "F") {
            let flag = false;
            let idx = -1;
            for (let j = i + m - 1; j >= i; j--) {
                if (str2[j - i] !== s[j]) {
                    flag = true;
                }
                if (idx === -1 && fixed[j] === 0) {
                    idx = j;
                }
            }
            if (flag) {
                continue;
            } else if (idx !== -1) {
                s[idx] = "b";
            } else {
                return "";
            }
        }
    }
    return s.join("");
};


// 599. Minimum Index Sum of Two Lists
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const map = new Map();
    let min = Infinity;
    let arr = [];

    for(let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }

    for(let i = 0; i < list2.length; i++) {
        const l = list2[i];
        if(map.has(l)) {
            const sum = i + map.get(l);

            if(sum < min) {
                arr = [l];
                min = sum;
            } else if (sum === min) {
                arr.push(l);
            }
        }
    }

    return arr;
};