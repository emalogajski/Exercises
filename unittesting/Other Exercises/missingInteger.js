const isArray = (arr) => {
    if(typeof arr !== 'object') {
        return 'Wrong input type.';
    }
}

const containsIntegers = (arr) => {
    const mapCheck = (arr) => arr.filter(item => Number.isInteger(item) && item > -1000000000 && item < 1000000000);

    if(mapCheck(arr).length === arr.length) {
        return true;
    } else {
        return false;
    }
}

const arrLength = (arr) => {
    if(arr.length > 100000 || arr.length === 0) {
        return 'Length of array exceeds limit.'
    } else {
        return arr.length;
    }
}

const logic = (arr) => arr.sort((a, b) => a - b).reduce((accumulator, currentValue, currentIndex, array) => {
        if((array[currentIndex + 1] - array[currentIndex]) > 1) {
            accumulator =+ array[currentIndex] + 1;
        } 
        if(accumulator === 0) {
            return (array[array.length - 1] + 1);
        } else if(accumulator < 0) {
            return 1;
        } else {
            return accumulator;
        }
}, 0);


module.exports = {
    isArray,
    containsIntegers,
    arrLength,
    logic,
}