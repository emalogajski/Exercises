const nonEmptyArray = (arr) => {
    if([]) {
        return 'Empty array not permitted as argument.';
    }
};

const properInt = (arr) => {
    const properIntCheck = (arr) => arr.find((e) => e <= 0 || e > 1000000000);
    if(properIntCheck) {
        return 'Invalid integer(s) provided.';
    }
};

const isOdd = (arr) => {
    if(arr.length % 2 === 0) {
        return 'The number of items provided must be odd.';
    }
};

const howManyofEach = (arr, value) => {
    return arr.filter((v) => (v === value)).length;
};

const finalRes = (arr) => {
    const newArr = [...new Set(arr)].sort(function(a, b) {
        return a - b;
    });
    for(let i = 0; i < newArr.length; i++) {
        if(!(howManyofEach(arr, newArr[i]) % 2 === 0)) {
            return newArr[i];
        }
    }
};


module.exports = {
    nonEmptyArray,
    properInt,
    isOdd,
    howManyofEach,
    finalRes,
};
