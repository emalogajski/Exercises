const rotateArray = (arr, k) => {
  const localArray = [...arr];
  for(let i = 0; i < k; i++) {
    localArray.unshift(localArray.pop());
  }
  return localArray;
};

const checkArgs = (arr, k) => {
  if(!Array.isArray(arr)) throw TypeError('First argument: wrong type');
  if(typeof k !== 'number') throw TypeError('Second argument: wrong type');
  return true;
}

const runChallenge = (arr = [], k) => {
  return checkArgs(arr, k) ? rotateArray(arr, k) : false;
}

module.exports = {
  runChallenge,
  rotateArray,
};

