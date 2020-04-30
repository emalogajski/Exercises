
const isNumber = n => typeof(n) === 'number';


const areArgsInvalid = ({ currentLocation, nextLocation, distance }) => {
  return (!isNumber(currentLocation) 
    || !isNumber(nextLocation) 
    || !isNumber(distance)
    || nextLocation < currentLocation
    || distance < 0);
}

const nOfJumps = ({ currentLocation, nextLocation, distance }) => {
  return Math.ceil((nextLocation - currentLocation) / distance)
}

const runChallenge = (currentLocation, nextLocation, distance) => {
  const opts = {
    currentLocation,
    nextLocation,
    distance,
  };

  return areArgsInvalid(opts) ?
  false : nOfJumps(opts);
}

module.exports = {
  runChallenge,
};

