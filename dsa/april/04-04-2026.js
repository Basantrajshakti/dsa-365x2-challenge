// Daily Challenge

// 2075. Decode the Slanted Ciphertext
/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
const decodeCiphertext = (encodedText, rows) => {
    if (rows === 1) return encodedText;

    const n = encodedText.length;
    const cols = Math.floor(n / rows);
    let res = [];

    for (let c = 0; c < cols; c++) {
        let r = 0, j = c;
        while (r < rows && j < cols) {
            res.push(encodedText[r * cols + j]);
            r++;
            j++;
        }
    }

    return res.join('').replace(/\s+$/, '');
};


// 709. To Lower Case
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        const ascii = s.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90) {
            result += String.fromCharCode(ascii + 32);
        } else {
            result += s.charAt(i);
        }
    }
    return result;
};