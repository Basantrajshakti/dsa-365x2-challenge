// 3348. Smallest Divisible Digit Product II
/**
 * @param {string} num
 * @param {number} t
 * @return {string}
 */
var smallestNumber = function (num, t) {
    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    };

    let temp = t;

    for (let digit = 2; digit <= 9; digit++) {
        while (temp % digit === 0) {
            temp /= digit;
        }
    }

    if (temp !== 1) {
        return "-1";
    }

    const n = num.length;
    const digits = num.split("");

    const remaining = new Array(n + 1).fill(0);
    remaining[0] = t;

    let lastValidPos = n - 1;

    for (let i = 0; i < n; i++) {
        const digit = Number(digits[i]);

        if (digit === 0) {
            lastValidPos = i;
            break;
        }

        remaining[i + 1] =
            remaining[i] / gcd(remaining[i], digit);
    }

    if (remaining[n] === 1) {
        return num;
    }

    for (let i = lastValidPos; i >= 0; i--) {
        const currentDigit = Number(digits[i]);

        for (let newDigit = currentDigit + 1; newDigit <= 9; newDigit++) {
            digits[i] = String(newDigit);

            let need =
                remaining[i] / gcd(remaining[i], newDigit);

            const suffix = [];

            for (let j = i + 1; j < n; j++) {
                let chosenDigit = 9;

                while (
                    chosenDigit > 1 &&
                    need % chosenDigit !== 0
                ) {
                    chosenDigit--;
                }

                if (need % chosenDigit === 0) {
                    need /= chosenDigit;
                }

                suffix.push(String(chosenDigit));
            }

            if (need === 1) {
                suffix.reverse();

                for (let j = i + 1; j < n; j++) {
                    digits[j] = suffix[j - i - 1];
                }

                return digits.join("");
            }
        }

        digits[i] = num[i];
    }

    const factors = [];
    let remainingT = t;

    for (let digit = 9; digit >= 2; digit--) {
        while (remainingT % digit === 0) {
            factors.push(String(digit));
            remainingT /= digit;
        }
    }

    const requiredLength = Math.max(
        n + 1,
        factors.length
    );

    while (factors.length < requiredLength) {
        factors.push("1");
    }

    factors.reverse();

    return factors.join("");
};