const typeOfN = (N) => {
    if(typeof N !== 'number') {
        return 'Wrong type.';
    }
};

const positiveN = (N) => {
    if(N <= 0) {
        return 'Invalid input.';
    }
    return N;
}

const toBinary = (N) => {
    return (N).toString(2);
}

const toArray = (N) => {
    //return Array.from(N);
    const finArr = [];
    for(let i = 0; i < Array.from(N).length; i++) {
        finArr.push(Number(N[i]));
    }
    return finArr;
}

const countLongest = (N) => {
    const longestReducer = (initial, current) => {
        if(!current) {
            initial[initial.length - 1]++;
        } else {
            initial.push(0);
        }
        return initial;
    }
    return Math.max(...N.reduce(longestReducer, [0]));
}

  module.exports = {
    typeOfN,
    positiveN,
    toBinary,
    toArray,
    countLongest,
  };


  //["1", "1", "1", "0", "0", "0", "1", "0"]