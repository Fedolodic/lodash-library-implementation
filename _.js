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
    },
    has(object, key) {
        return Object.keys(object).includes(key);
    },
    invert(object) {
        const newObject = {};
        Object.keys(object).forEach(key => newObject[object[key]] = key);
        return newObject;
    },
    findKey(object, predicate) {
        for (let key in object) {
            const value = object[key]
            const predicateReturnValue = predicate(value);
            if (predicateReturnValue) {
                return key;
            }
        }
        return undefined;
    },
    drop(array, n) {
        if (typeof n === 'undefined') {
            n = 1;
        }
        return array.slice(n);
    },
    dropWhile(array, predicate) {
        const dropNumber = array.findIndex((element, index) => {
            return !predicate(element, index, array);
        });
        const droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },
    chunk(array, size) {
        if (typeof size === 'undefined') {
            size = 1
        }
        let arrayChunks = [];
        for (let i = 0; i < array.length; i += size) {
            let arrayChunk = array.slice(i, i+size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }
}

// Do not write or modify code below this line.
module.exports = _;