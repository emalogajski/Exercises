const isPangram = (str) => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const newAlph = [];
    const newStr = str.replace(/\s+/g, '');
    for(let i of alphabet) {
      if(newStr.includes(i)) {
        newAlph.push(i);
      }
    }
    if(newAlph.toString() === alphabet.toString()) {
        return true;
    }
    return false;
};

const isString = (str) => {
  if(typeof str !== 'string') {
    return 'Wrong input type.'
  }
  return true;
};

module.exports = {
    isPangram,
    isString,
};