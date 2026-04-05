// Daily Challenge

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


// 748. Shortest Completing Word
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    let fixLicense = licensePlate.toLowerCase().replace(/[\d\s]/g, '');
    let minWord = '';
    let minWordLen = Infinity;

    for (let word of words) {
        let copyLicense = fixLicense;

        for (let i = 0; i < word.length; i++) {
            copyLicense = copyLicense.replace(word[i], '');
            if (!copyLicense && word.length < minWordLen){
                minWord = word;
                minWordLen = word.length;
            }
        }
    }

    return minWord;
};