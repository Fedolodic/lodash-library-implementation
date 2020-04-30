_ = {
    clamp(number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange(number, start, end) {
        if (typeof end === "undefined") {
            end = start;
            start = 0;
        } else if (start > end) {
            const temp = start;
            start = end;
            end = temp;
        }
        return start <= number && number < end;
    },
    words(string) {
        const splitString = string.split(' ');
        const symbols = /[^\w\s]/;
        const resultArr = [];

        for (const string of splitString) {
            const newString = string.replace(symbols, '');
            if (newString !== '') {
                resultArr.push(newString);
            }
        }
        return resultArr;
    },
    pad(string, length) {
        let paddingAmount = length - string.length;
        let extraPadding = "";
        let paddedString = string;

        if (paddingAmount <= 0) {
            return string;
        } else if (paddingAmount % 2 !== 0) {
            paddingAmount--;
            extraPadding = " ";
        }

        for (paddingAmount; paddingAmount > 0; paddingAmount -= 2) {
            paddedString = " " + paddedString + " "
        }
        return paddedString + extraPadding;
    }
}

// Do not write or modify code below this line.
module.exports = _;